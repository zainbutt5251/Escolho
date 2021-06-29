import React, {useState, useCallback, useEffect} from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  PermissionsAndroid,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import SoundPlayer from 'react-native-sound-player';
import {connect} from 'react-redux';
import {
  GiftedChat,
  Actions,
  SystemMessage,
  Send,
  InputToolbar,
  Composer,
  Bubble,
} from 'react-native-gifted-chat';
import storage from '@react-native-firebase/storage';
import {firebase, Auth} from '../../../App';
import Icon from 'react-native-vector-icons/Entypo';
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SendIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import AttachmentIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
import Voice from './Recorder';
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import {Directions} from 'react-native-gesture-handler';

function Example({roomId, userDb, navigation}) {

  const [currentTime, setcurrentTime] = useState(0.0);
  const [recording, setrecording] = useState(false);
  const [paused, setpaused] = useState(false);
  const [stoppedRecording, setstoppedRecording] = useState(false);
  const [finished, setfinished] = useState(false);

  const [messages, setMessages] = useState([]);
  const [fileName, setFileName] = useState({});
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const [audioData, setAudioData] = useState({});
  const [stateSound, setStateSound] = useState(null);
  const [pause, setPause] = useState(false);
  
  const [hasPermission, sethasPermission] = useState(undefined);
  const [playAudio, setPlayAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [progressTime, setProgressTime] = useState(0);

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
      //  setaudioPath(`${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`)
      sethasPermission(isAuthorised);
      if (!isAuthorised) return;
      prepareRecordingPath(audioPath);
      AudioRecorder.onProgress = (data) => {
        setcurrentTime(Math.floor(data.currentTime));
      };

      AudioRecorder.onFinished = (data) => {
        //  setaudioPath(`${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`)
        console.warn('---------------------data should be here');
        console.log(data);
        setAudioData(data.base64);
        var audio = data.base64;
        const audioName = data.audioFileURL;
        var storageRef = firebase.storage().ref(audioName);
        storageRef
          .putString(audio, 'base64')
          .then((snap) => {
            storageRef.getDownloadURL();
            console.log('snap :' + snap);
          })
          .then(async () => {
            let url = await storageRef.getDownloadURL();
            setAudioUrl(url);
          });
        if (Platform.OS === 'ios') {
          this._finishRecording(
            data.status === 'OK',
            data.audioFileURL,
            data.audioFileSize,
            console.log(data),
          );
        }
      };
    });
  }, [audioUrl, audioData]);

  const _renderButton = (title, onPress, active) => {
    var style = active ? styles.activeButtonText : styles.buttonText;

    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={style}>{title} </Text>
      </TouchableHighlight>
    );
  };
  const _renderPauseButton = (onPress, active) => {
    var style = active ? styles.activeButtonText : styles.buttonText;
    var title = paused ? 'RESUME' : 'PAUSE';
    return (
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableHighlight>
    );
  };
  const _pause = async () => {
    if (!recording) {
      console.warn("Can't pause, not recording!");
      return;
    }

    try {
      const filePath = await AudioRecorder.pauseRecording();
      setpaused(true);
    } catch (error) {
      console.error(error);
    }
  };

  const _resume = async () => {
    if (!paused) {
      console.warn("Can't resume, not paused!");
      return;
    }

    try {
      await AudioRecorder.resumeRecording();
      setpaused(false);
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
    setrecording(false);
    setpaused(false);

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

  const _play = async () => {
    try {
      SoundPlayer.playUrl(audioUrl);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

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

    setrecording(true);
    setpaused(false);

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  };

  const _finishRecording = (didSucceed, filePath, fileSize) => {
    setfinished(didSucceed);
    setaudioPath(
      `${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`,
    );
    setcurrentTime(0);
    console.log(
      `Finished recording of duration ${currentTime} seconds at path: ${filePath} and size of ${
        fileSize || 0
      } bytes`,
    );
  };

  // console.log(user);
  const renderComposer = (props) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Composer {...props} />
      </View>
    );
  };

  const renderSend = (props) => {
    // console.log(props);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 80,
            alignItems: 'center',
            // padding:9
          }}>
          <AttachmentIcon
            name="attachment"
            color="dodgerblue"
            size={25}
            // onPress={handleChoosePhoto}
          />
          <FontAwesome
            name="camera"
            color="dodgerblue"
            size={25}
            onPress={(e) => handleChoosePhoto()}
          />
        </View>

        {props.text.trim() || fileUri ? (
          <Send {...props}>
            <View style={{padding: 8}}>
              <Ionicons name="send-sharp" color="dodgerblue" size={25} />
            </View>
          </Send>
        ) : (
          <View style={{padding: 8}}>
            <TouchableOpacity
              onPressIn={(e) => _record()}
              onPressOut={(e) => _stop()}>
              <FontAwesome
                name="microphone"
                color={recording == true ? 'red' : 'dodgerblue'}
                size={25}
              />
              {/* {/ <Text>{state.uri}</Text> /} */}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Icon
            style={{fontSize: 30, marginRight: 15}}
            name={'attachment'}
            onPress={handleChoosePhoto}
          />
        </View>
      ),
    });
  }, [navigation]);

  const handleChoosePhoto = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Cool Photo App Camera Permission',
      message:
        'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // console.log("You can use the camera");
    // } else {
    // alert("Camera permission denied");
    // }

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
        // console.log("response :" + response);
        // console.log("responsedata :" + response.data);
        setFileName(response.fileName);
        setFileData(response.data);
        setFileUri(response.uri);
        // console.log(response.data);
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
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              let data = doc.data();
              let time = data.createdAt.toDate();
              data.createdAt = time;
              return data;
            }),
          );
        });
    }
  }, [roomId]);

  const onSend = useCallback((messages, myData, userDb, audioUrl) => {
    const date = new Date();
    const imageName = fileName + date;
    var storageRef = firebase.storage().ref(imageName);

    if (myData) {
      storageRef
        .putString(myData, 'base64')
        .then((snap) => {
          storageRef.getDownloadURL();
          console.log('snap :' + snap);
        })
        .then(() => {
          storageRef.getDownloadURL().then(function (url) {
            // console.log('url :' + url);

            setFileData(null);
            setFileUri(null);
            setFileName(null);

            const newMessage = {
              _id: messages[0]._id,
              createdAt: messages[0].createdAt,
              text: messages[0].text,
              image: url,
              // image: messages[0].messageType === 'image' ? url : '',
              user: {
                _id: userDb.uid,
                avatar: messages[0].user.avatar,
                name: messages[0].user.name,
              },
            };
            console.log('--------------image');
            console.log(newMessage);
            firebase
              .firestore()
              .collection('rooms')
              .doc(roomId)
              .collection('messages')
              .add(newMessage);

            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, newMessage),
            );
          });
        });
    } else if (audioUrl) {
      const newMessage = {
        _id: messages[0]._id,
        createdAt: messages[0].createdAt,
        text: messages[0].text,
        audioUrl: audioUrl,
        // image: messages[0].messageType === 'image' ? url : '',
        user: {
          _id: userDb.uid,
          avatar: messages[0].user.avatar,
          name: messages[0].user.name,
        },
      };
      firebase
        .firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .add(newMessage);

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessage),
      );
      setAudioUrl(null);
      console.log('------------------- audioUrl');
    } else {
      console.log(audioUrl);
      const newMessage = {
        _id: messages[0]._id,
        createdAt: messages[0].createdAt,
        text: messages[0].text,

        user: {
          _id: userDb.uid,
          avatar: messages[0].user.avatar,
          name: messages[0].user.name,
        },
      };
      console.log('--------------else');
      console.log(newMessage);
      firebase
        .firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .add(...messages, newMessage);

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessage),
      );
    }
  }, []);
  // console.log(user);
  //-----------------------------------------------------------//

  const startPlaying = (sound) => {
    console.log('----playing');
    setPlayAudio(true);
    sound.play((success) => {
      if (success) {
        setPlayAudio(false);
        setStateSound(null);
        console.log('successfully finished');
      } else {
        console.log('playback failed due to audioUrl decoding errors');
      }
    });
  };

  const pausePlaying = (sound) => {
    sound.pause();
    setPlayAudio(false);
    setPause(true);
    console.log('----pausing');
  };

  const resumePlaying = (sound) => {
    console.log('----resume');
    sound.resume();
    setPlayAudio(true);
    setPause(false);
  };

  
  // useEffect(()=>{
  //   console.log(playAudio);
  //   const timeInt = setInterval(()=>{
  //     stateSound && stateSound.getCurrentTime(sec => {
  //       console.log(sec)
  //       Math.ceil(setProgressTime(sec))
  //        })
  //     },1000);
  //   console.log(timeInt)
  //   playAudio ? timeInt : clearInterval(timeInt)
  // },[stateSound,progressTime, playAudio])



  const renderAudio = (props) => {
    const {currentMessage} = props;
    return currentMessage.audioUrl ? (
      <View
        style={{
          position: 'relative',
        }}>
          <TouchableOpacity >
        <Ionicons
          name={playAudio ? 'pause' : 'ios-play'}
          size={35}
          color={playAudio ? 'red' : 'blue'}
          style={{
            position: 'relative',
            left: 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.5,
            backgroundColor: 'transparent',
          }}
          onPress={(e) => {
            console.log(currentMessage)
            if (!stateSound) {
              console.log('----------------')
              console.log(currentMessage)
              var sound = new Sound(
                currentMessage.audioUrl,
                Sound.MAIN_BUNDLE,
                (error) => {
                  if (!playAudio || !sound) {
                    setStateSound(sound);
                    startPlaying(sound);
                  }
                },
              );
            } else if (stateSound && pause) {
              resumePlaying(stateSound);
            } else {
              pausePlaying(stateSound);
            }
          }}
        />
        </TouchableOpacity>
        <Slider
          style={{
            width: 150,
            height: 40,
            position: 'absolute',
            right: 0,
            width: 100,
          }}
          minimumValue={0}
          maximumValue={stateSound ? Math.ceil(stateSound._duration) : 0}
          value={progressTime}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
    ) : (
      <View />
    );
  };

  const renderBubble = (props) => {
    return (
      <View>
        {renderAudio(props, messages)}
        <Bubble {...props} />
      </View>
    );
  };

  return (
    <View style={{height: '100%'}}>
      <GiftedChat
        messages={messages}
        isTyping={true}
        alwaysShowSend={true}
        onSend={(messages) => onSend(messages, fileData, userDb, audioUrl)}
        renderBubble={renderBubble}
        renderSend={renderSend}
        timeFormat="LT"
        user={{
          _id: userDb.uid,
          name: 'saad',
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />

      {fileData === '' || fileData === null ? null : (
        <View
          style={{
            borderWidth: 1,
            height: 200,
            position: 'absolute',
            width: '90%',
            bottom: 50,
            padding: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <Image
            source={{uri: 'data:image/png;base64,' + fileData}}
            // source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}
            style={{width: '80%', height: '100%', borderRadius: 20}}
          />
        </View>
      )}
    </View>
  );
}

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
  roomId: state.chatReducer.roomId,
  userDb: state.authReducer.user,
  voiceUrl: state.voiceURI,
});
export default connect(mapStateToProps)(Example);
