import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sender from '../../../assets/images/sender.jpg';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import {ImageViewer}  from 'react-native-image-zoom-viewer';
import {nullAudio} from '../../_actions/audioAction'

function receiverMessage({
  isDark,
  text,
  messageImage,
  messageAudio,
  createdAt,
  index,
  audio,
  urlArr,
  setDataToReducer,
  imgIndex,
  nullAudio,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [firstPlay, setFirstPlay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [playState, setplayState] = useState('pause');
  const [playSeconds, setplaySeconds] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(audio){
    if (!firstPlay && audio.index === index && activeIndex != 1) {
      setFirstPlay(true);
      console.log('first play');

      var sound = new Sound(
        audio.message.messageAudio,
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          setplayState('playing');
          if (sound.isLoaded) {
            sound.play((success) => {
              if (success) {
                sound.reset();
                setIsPlaying(false);
                setAudioData(null);
                setFirstPlay(false);
                setValue(0);
                setActiveIndex(0);
                nullAudio();
              }
            });
            setActiveIndex(1);
            setIsPlaying(true);
            setAudioData(sound);
            setIsLoading(false);
          } else {
            setIsLoading(true);
          }
        },
      );
    } else if (audio.index != index && isPlaying && audioData != null) {
      audioData.reset();
      console.log('null');
      setIsPlaying(false);
      setAudioData(null);
      setFirstPlay(false);
      setValue(0);
    } else if (audio.index === index && activeIndex === 1 && isPlaying) {
      audioData.pause(() => {
        console.log('sound paused---');
        setIsPlaying(false);
        setFirstPlay(false);
      });
    } else if (audio.index === index && activeIndex === 1 && !isPlaying) {
      console.log('sound resume---');
      audioData.play((success) => {
        if (success) {
          audioData.reset();
          setIsPlaying(false);
          setAudioData(null);
          setFirstPlay(false);
          setActiveIndex(0);
          setValue(0);
        }
      });
      setIsPlaying(true);
      setFirstPlay(true);
    }
  }
  }, [audio]);

  const onSliderEditing = (sound) => {
    if (sound) {
      sound.setCurrentTime(value);
      setplaySeconds(value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioData && playState == 'playing') {
        audioData.getCurrentTime((seconds, isPlaying) => {
          setplaySeconds(seconds);
        });
      }
    }, 1000);
    return (_) => clearInterval(interval);
  }, [audioData, isPlaying]);

  const display = () => {
    if (text) {
      return (
        <View
          style={
            isDark ? styles.receiverMessageViewDark : styles.receiverMessageView
          }>
          <Text style={isDark ? styles.receiverTextDark : styles.receiverText}>
            {text}
          </Text>
        </View>
      );
    } else if (messageImage) {
      return (
        <TouchableOpacity onPress={() => setClicked(true)}>
          {!clicked && (
            <Image style={styles.stretch} source={{uri: messageImage}} />
          )}

          {clicked && (
            <Modal visible={true} transparent={true}>
              <ImageViewer
                enableSwipeDown={true}
                onSwipeDown={() => setClicked(false)}
                imageUrls={urlArr}
                index={imgIndex - 1}
              />
            </Modal>
          )}
        </TouchableOpacity>
      );
    } else if (messageAudio) {
      return (
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            borderRadius: 10,
          }}>
          <TouchableOpacity>
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Ionicons
                name={isPlaying ? 'pause' : 'ios-play'}
                size={35}
                color={ isPlaying ? 'yellow' : '#fff'}
                style={{
                  position: 'relative',
                  left: 0,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.5,
                  backgroundColor: 'transparent',
                }}
                onPress={(e) => {
                  setDataToReducer();
                }}
              />
            )}
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 100,
            }}>
            <Slider
              style={{
                width: 150,
                height: 40,
                position: 'absolute',
                right: 0,
                width: 100,
              }}
              minimumValue={0}
              maximumValue={audioData ? Math.ceil(audioData._duration) : 0}
              onValueChange={onSliderEditing()}
              value={playSeconds}
              minimumTrackTintColor="white"
              maximumTrackTintColor="white"
            />
          </View>
        </View>
      );
    }
  };
  return (

    <View style={{maxWidth: '60%'}}>
      <View
        style={
          isDark
            ? styles.messageContainerReceiverDark
            : styles.messageContainerReceiver
        }>
          <View style={styles.senderImageView}>
          <Image source={sender} style={styles.receiverImage} />
        </View>
        <View>
          <View
            style={
              isDark
                ? styles.receiverMessageViewDark
                : styles.receiverMessageView
            }>
            <View>{display()}</View>
          </View>
          <Text
            style={
              isDark ? styles.timeStampReceiverDark : styles.timeStampReceiver
            }>
            {moment(createdAt).format('h:m A')}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
  audio: state.AudioReducer.data,
});
export default connect(mapStateToProps, {nullAudio})(receiverMessage);

const styles = StyleSheet.create({
  receiverImage: {width: 55, height: 55, borderRadius: 30, justifyContent:'flex-start'},
  messageContainerReceiver: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '65%',
    // marginLeft: 'auto',
    marginLeft: 5,
  },
  container: {
    paddingTop: 50,
  },
  stretch: {
    height: 120,
    width: 150,
    borderWidth: 3,
    borderColor: '#4D7CFE',
    borderRadius: 10,
    // resizeMode: 'contain',
  },
  messageContainerReceiverDark: {
    justifyContent: 'flex-start',
    width: '65%',
    // marginLeft: 'auto',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginLeft: 5,
  },
  receiverText: {
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    letterSpacing: 1,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
  },
  receiverTextDark: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    letterSpacing: 1,
    fontFamily: 'sans-serif',
  },

  timeStampReceiver: {
    // marginLeft: 17,
    color: 'grey',
    textAlign: 'right',
    marginRight: 5,
  },
  timeStampReceiverDark: {
    textAlign: 'right',
    // marginLeft: 17,
    color: 'white',
    marginRight: 5,
  },

  receiverMessageView: {
    minHeight: 30,
    padding: 5,
    marginRight: 5,
    backgroundColor: '#516395',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },
  receiverMessageViewDark: {
    minHeight: 30,
    padding: 5,
    marginRight: 5,
    // backgroundColor: 'rgba(182, 181, 180, 0.8)',
    backgroundColor: 'grey',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },
});
