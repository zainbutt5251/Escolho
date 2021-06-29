import React, {useState, useEffect,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import storage from '@react-native-firebase/storage';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import SenderMessage from './senderMessage';
import ReceiverMessage from './receiverMessage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {firebase, Auth} from '../../../App';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import AttachmentIcon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import {audio} from '../../_actions/audioAction';

const ChatRoom = ({isDark, dispatch, roomId, user}) => {
  let imgIndex = 0;
  const scrollViewRef = useRef()
  const messageIdGenerator = () => {
    // generates uuid.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  const [audioPath, setaudioPath] = useState(
    `${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`,
  );
  const [stoppedRecording, setstoppedRecording] = useState(false);

  const [hasPermission, sethasPermission] = useState(true);
  const [audioData, setAudioData] = useState({});
  const [recording, setRecording] = useState(false);
  const [currentTime, setcurrentTime] = useState(0.0);
  const [messages, setMessages] = useState();
  const [input, setInput] = useState('');
  const [urlArr, setUrlArr] = useState([]);
  const [messageSaved, setMessageSaved] = useState({
    _id: user.uid,
    createdAt: null,
    text: null,
    messageAudio: null,
    messageImage: null,
    type:''
  });

  const prepareRecordingPath = (audioPath) => {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Low',
      AudioEncoding: 'aac',
      AudioEncodingBitRate: 32000,
      IncludeBase64: true,
    });
  };
  useEffect(() => {
    AudioRecorder.requestAuthorization().then((isAuthorised) => {
      console.log(isAuthorised);
      setaudioPath(
        `${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`,
      );
      sethasPermission(isAuthorised);
      if (!isAuthorised) return;
      prepareRecordingPath(audioPath);
      AudioRecorder.onProgress = (data) => {
        // setcurrentTime(Math.floor(data.currentTime));
      };

      AudioRecorder.onFinished = (data) => {
        onChangeHandler(data);
        setAudioData(data);

        if (Platform.OS === 'ios') {
          this._finishRecording(
            data.status === 'OK',
            data.audioFileURL,
            data.audioFileSize,
            // console.log(data),
          );
        }
      };
    });
  }, [audioData]);

  const _record = async () => {
    if (recording) {
      console.warn('Already recording!');
      return;
    }

    if (!hasPermission) {
      console.warn("Can't record, no permission granted!");
      return;
    }

    if (stoppedRecording) {
      prepareRecordingPath(audioPath);
    }
    setRecording(true);

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  };

  const _stop = async () => {
    if (!recording) {
      console.warn("Can't stop, not recording!");
      return;
    }

    setstoppedRecording(true);
    setRecording(false);

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === 'android') {
        _finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  };

  const _finishRecording = () => {
    setaudioPath(
      `${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`,
    );
    setcurrentTime(0);
  };

  const imageHandler = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Cool Photo App Camera Permission',
      message:
        'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'SGI',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        onChangeHandler(response);
      }
    });
  };

  useEffect(() => {
    if (roomId) {
      firebase
        .firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('createdAt', 'asc')
        .onSnapshot((snapshot) => {
          let messagesArr = [];
          snapshot.docs.map((doc) => {
            let singleMesssage = doc.data();
            messagesArr.push(singleMesssage);
          });
          
          setMessages(messagesArr);
        });
      console.log('messages-----------------: ', messages);
      console.log( messages);
    }
  }, [roomId]);
  // if (messages) {
  //   console.log('messages: ', messages);
  // }
  const storeToDB = (messageSaved) => {
    firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .add(messageSaved)
      .then(() => {
        setInput('');
        
        setMessageSaved({
          _id: user.uid,
          createdAt: null,
          text: null,
          messageAudio: null,
          messageImage: null,
        });
      }).then(()=> {
        console.log(messageSaved)
      })
  };

  const onChangeHandler = (data) => {
    const date = new Date();
    console.log(date)

    var storageRef = firebase.storage().ref(`${date}`);
    if (data.data) {
      storageRef.putString(data.data, 'base64').then(() => {
        storageRef
          .getDownloadURL()
          .then(function (url) {
            // for image
messageSaved.type = 'Image'
            messageSaved.messageImage = url;
            messageSaved.createdAt = new Date();
            messageSaved.text = null;
            setMessageSaved(messageSaved);
          })
          .then(() => {
            storeToDB(messageSaved);
          });
      });
    } else if (data.base64) {
      console.log('working');
      storageRef.putString(data.base64, 'base64').then((snap) => {
        storageRef
          .getDownloadURL()
          .then(function (url) {
            // for audio
            messageSaved.type = 'Voice Message'
            messageSaved.messageAudio = url;
            messageSaved.createdAt = new Date();
            messageSaved.text = null;
            setMessageSaved(messageSaved);
          })
          .then(() => {
            storeToDB(messageSaved);
          });
      });
    } else {
      // for text
      messageSaved.type = 'Text'
      messageSaved.text = data;
      messageSaved.createdAt = new Date();
      setMessageSaved(messageSaved);
      storeToDB(messageSaved);
    }
  };

  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
      scrollViewRef.current.scrollToEnd({animated: true})
      }
      style={styles.container}>
        <View style={styles.Chatcontainer}>
          {messages &&
            messages.map((message, index) => {
              
            
              const obj = {url: message.messageImage};
              message.messageImage != urlArr.url && urlArr.push(obj);
              if (message.messageImage) {
                imgIndex = imgIndex + 1;
              }
              return (
              <View key={index}>
                {message && message._id === user.uid ? (
                  <SenderMessage
                    text={message.text}
                    index={index}
                    urlArr={urlArr}
                    imgIndex={message.messageImage && imgIndex}
                    messageAudio={message.messageAudio}
                    messageImage={message.messageImage}
                    createdAt={message.createdAt.toDate()}
                    setDataToReducer={()=>{
                      dispatch(audio({ message, index}))
                    }}

                  />
                ) : (
                  <ReceiverMessage
                  text={message.text}
                  index={index}
                  urlArr={urlArr}
                  imgIndex={message.messageImage && imgIndex}
                  messageAudio={message.messageAudio}
                  messageImage={message.messageImage}
                  createdAt={message.createdAt.toDate()}
                  setDataToReducer={()=>{
                    dispatch(audio({ message, index}))
                  }}
                  />
                )}
              </View>
            )})}
        </View>
      </ScrollView>
      <View>
        <View style={styles.mainContainer}>
          <View>
            <TextInput
              placeholder="Type a message"
              placeholderTextColor="white"
              value={input}
              onChangeText={(e) => setInput(e)}
              style={styles.chatTextInput}
            />
          </View>
          <View style={{flexDirection:'row', width:60,  justifyContent:'space-between' }}>

          
          <AttachmentIcon
            name="attachment"
            color="#fff"
            size={25}
            onPress={imageHandler}
          />
          {input == '' ? (
            <TouchableOpacity
              onPressIn={(e) => _record()}
              onPressOut={(e) => _stop()}>
              <FontAwesome
                name="microphone"
                color={recording ? 'red' : '#fff'}
                size={25}
              />
            </TouchableOpacity>
          ) : (
            <FontAwesome
              name="send"
              style={styles.iconStyles}
              onPress={(e) => onChangeHandler(input)}
            />
          )}
          </View>

          {/* <View style={styles.iconsView}>
            <View style={styles.icon}>
              <AttachmentIcon name="attachment" style={styles.iconStyles} />
            </View>
            <View style={styles.icon}>
              {input == '' ? (
                <MicIcon name="microphone" style={styles.iconStyles} />
              ) : (
                <SendIcon
                  name="send"
                  style={styles.iconStyles}
                  onPress={(e) => sendMessage(e)}
                />
              )}
            </View>
          </View> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    padding: 10,
    flexDirection: 'column',
    flex: 1,
    paddingBottom: 0,
    // borderWidth: 1,
    // borderColor: 'red',

    // color: 'lightgrey',
    height: '100%',
  },
  bl: {
    color: 'black',
    fontWeight: 'bold',
  },
  white: {
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    // paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  Chatcontainer: {
    marginBottom: 20,
  },
  mainContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#4D7CFE',
  },
  chatTextInput: {
    // borderColor: 'red',
    // borderWidth: 1,
    maxWidth: '82%',
    minWidth: 290,
    color: 'white',
    paddingLeft: 10,
    fontSize: 16,
  },
  iconsView: {
    //   borderColor: 'red',
    //   borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {padding: 10},
  iconStyles: {
    fontSize: 20,
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
  roomId: state.chatReducer.roomId,
  user: state.authReducer.user,
});
export default connect(mapStateToProps)(ChatRoom);
