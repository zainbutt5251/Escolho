import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import OptionIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/Feather';
import sender from '../../../assets/images/sender.jpg';
import {firebase, Auth} from '../../../App';
import {changeChat} from '../../_actions/chatActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateGroupModal from './../Modal/CreateGroupModal';
import {viewCreateGroupModal} from '../../_actions/modalActions';

import CheckBox from '@react-native-community/checkbox'

const MenuIcons = ({isDark, viewCreateGroupModal}) => {
  console.log('isssssss');
  console.log(isDark);
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <View style={styles.messageHeadcontainer}>
        <View style={styles.messageIconsView}>
          <View style={styles.menuIcon}>
            <Text style={styles.optionIcon}>
              <OptionIcon
                name={'options'}
                style={isDark ? styles.menuIconDark : styles.menuIcon}
              />
            </Text>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.messageTitle}>Mensagens</Text>
          </View>

          <View style={styles.menuIcon}>
            <Text style={styles.optionIcon1}>
              <SearchIcon
                name={'search'}
                style={isDark ? styles.searchIconDark : styles.searchIcon}
              />
            </Text>
          </View>
        </View>
      </View>
      
    </ImageBackground>
  );
};

const ChatRow = ({isDark, key, id, name}) => {
  console.log('is');
  console.log(isDark);
  const [messages, setMessages] = useState();
  let singleMesssage ;
  useEffect(() => {
    if (id) 
    {
      firebase
        .firestore()
        .collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('createdAt', 'asc')
        .onSnapshot((snapshot) => {
          let messagesArr = [];
          snapshot.docs.map((doc) => {
            singleMesssage = doc.data();
            messagesArr.push(singleMesssage);
          });
          setMessages(messagesArr.reverse());
          console.log(messagesArr);
        });
      }
      console.log(singleMesssage);
    
    
    
    // {
    //   firebase
    //     .firestore()
    //     .collection('rooms')
    //     .doc(id)
    //     .collection('messages')
    //     .orderBy('timestamp', 'asc')
    //     .onSnapshot((snapshot) =>
    //       setmessages(snapshot.docs.map((doc) => console.log( doc.data()))),
    //     );
    //   console.log('messages-----------------: ');
    //   console.log( messages);
    // }
  }, [id]);
  let messageLabel;
  if (messages) {
    if(messages[0].type === 'Text' ){
      messageLabel = messages[0].text;
    }
    else if(messages[0].type === 'Image'){
      messageLabel = 'Image';
    }
    else{
      messageLabel = 'Voice Message'
    }
    console.log(messages[0].type);
  }

  return (
    <View style={styles.chatContactRow}>
      <View style={styles.chatContactView}>
        <View>
          <Image source={sender} style={styles.userAvatar} />
        </View>
        <View style={styles.chatTextView}>
          <Text style={isDark ? styles.chatNameDark : styles.chatName}>
            {name}
          </Text>
          <Text style={{fontSize: 13}}>
            {/* <Text style={isDark ? styles.lastUserDark : styles.lastUser}>
              You :
            </Text> */}
            <Text style={{color: '#666666'}}>{ messageLabel}</Text>
            {/* <Text style={{color: '#666666'}}>{messages[0]?.message}</Text> */}
          </Text>
        </View>
        <View>
          <Text style={isDark ? styles.lastTextTimeDark : styles.lastTextTime}>
            9:41 AM
          </Text>
          <Text style={styles.numberofUnseenTexts}>3</Text>
        </View>
      </View>
    </View>
  );
};

const ChatInbox = ({isDark, navigation, changeChat, viewCreateGroupModal}) => {
  console.log('XXXXXX');
  console.log(isDark);
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('rooms')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setrooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
  }, []);

  const goToChat = (id, name) => {
    navigation.navigate('Chat');
    // console.log(id);
    changeChat(id, name);
  };

  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <ScrollView style={styles.container}>
        <CreateGroupModal
          style={{position: 'absolute'}}
          navigation={navigation}
        />
        <View style={isDark ? styles.chatDark : styles.chat}>
          <MenuIcons isDark={isDark} />

          <View style={isDark ? styles.chatListDark : styles.chatList}>
            <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#4D7CFE',
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  marginRight: 20,
                }}>
                <TouchableOpacity onPress={(e) => viewCreateGroupModal(e)}>
                  <Ionicons name="add" style={{fontSize: 30, color: 'white'}} />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  {color: isDark ? 'white' : '#4D7CFE'},
                  {marginRight: 10, fontSize: 16},
                ]}>
                Create Group
              </Text>
            </View>
            
            {rooms.map((room) => (
              <TouchableOpacity
                onPress={(e) => goToChat(room.id, room.data.name)}
                >
                <ChatRow
                  isDark={isDark}
                  //  key={room.id}
                  id={room.id}
                  name={room.data.name}
                />
              </TouchableOpacity>
            ))}
          
{/* // */}



{/* // */}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps, {changeChat, viewCreateGroupModal})(
  ChatInbox,
);
const styles = StyleSheet.create({
  chat: {
    backgroundColor: '#4D7CFE',
    height: '100%',
  },
  chatDark: {
    // backgroundColor: '#4D7CFE',
    height: '100%',
  },
  chatListDark: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    backgroundColor: 'transparent',

    height: '100%',
  },
  chatList: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
    backgroundColor: 'white',

    height: '100%',
  },
  chatContactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  chatTextView: {width: '70%', paddingLeft: 10},
  chatName: {fontSize: 15, fontWeight: 'bold', marginBottom: 5},
  chatNameDark: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  lastUser: {fontWeight: 'bold', color: '#666666'},
  lastUserDark: {fontWeight: 'bold', color: 'white'},
  lastTextTime: {color: 'grey', marginBottom: 5, fontSize: 11},
  lastTextTimeDark: {
    color: 'grey',
    marginBottom: 5,
    fontSize: 11,
    color: 'white',
  },
  numberofUnseenTexts: {
    backgroundColor: '#4D7CFE',
    padding: 7,
    alignSelf: 'center',

    textAlign: 'center',
    borderRadius: 80,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    height: 30,
    width: 30,
  },
  chatContactRow: {
    padding: 20,
    paddingBottom: 5,
    // backgroundColor: 'transparent',
    shadowOpacity: 0.5,
  },
  userAvatar: {width: 60, height: 60, borderRadius: 30},
  messageHeadcontainer: {
    flexDirection: 'column',
    flex: 1,
  },
  titleView: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  optionIcon: {
    padding: 10,
    backgroundColor: 'rgba(249, 249, 249, 0.2)',
    borderRadius: 10,
    marginLeft: 20,
  },
  optionIcon1: {
    padding: 10,
    backgroundColor: 'rgba(249, 249, 249, 0.2)',
    borderRadius: 10,
    marginRight: 20,
  },

  menuIcon: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  messageIconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'red',
    height: '100%',
    padding: 20,
    backgroundColor: '#4D7CFE',
  },
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    // paddingTop: 25,
    // padding: 10,
    flexDirection: 'column',
    marginTop: '-5%',
    flex: 1,
    backgroundColor: 'transparent',
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
  menuIcon: {
    color: 'white',
    fontSize: 25,
  },
  menuIconDark: {
    color: 'white',
    fontSize: 25,
  },
  searchIcon: {
    color: 'white',
    fontSize: 25,
  },
  searchIconDark: {
    color: 'white',
    fontSize: 25,
  },
  messageTitle: {fontWeight: 'bold', fontSize: 20, color: 'white'},
});
