import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal
} from 'react-native';
import {connect} from 'react-redux';
import {ImageViewer}  from 'react-native-image-zoom-viewer'
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sender from '../../../assets/images/sender.jpg';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import {nullAudio} from '../../_actions/audioAction'

function senderMessage({
  isDark,
  text,
  messageImage,
  messageAudio,
  createdAt,
  index,
  audio,
  nullAudio,
  urlArr,
  setDataToReducer,
  imgIndex,
}) {
 
  console.log(audio);
  console.log('audio');
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
          setplayState('playing')
          if (sound.isLoaded) {
            sound.play((success) => {
              if (success) {
                sound.reset();
                setIsPlaying(false);
                setAudioData(null);
                setFirstPlay(false);
                setValue(0);
                setActiveIndex(0);
                nullAudio()
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
        setValue(0)
    } else if (audio.index === index && activeIndex === 1  && isPlaying) {
      audioData.pause(() => {
        console.log('sound paused---');
        setIsPlaying(false);
        setFirstPlay(false);
      });
    } else if (audio.index === index && activeIndex === 1  && !isPlaying ) {
      console.log('sound resume---');
      audioData.play((success) => {
        if (success) {
          audioData.reset();
          setIsPlaying(false);
          setAudioData(null);
          setFirstPlay(false);
          setActiveIndex(0);
          setValue(0)
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
            isDark ? styles.senderMessageViewDark : styles.senderMessageView
          }>
          <Text style={isDark ? styles.senderTextDark : styles.senderText}>
            {text}
          </Text>
        </View>
      );
    } else if (messageImage) {
         return (
        <TouchableOpacity
          onPress={() => setClicked(true)}>
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
          {isLoading ? <ActivityIndicator size="small" color="black" /> :
          <Ionicons
            name={ (isPlaying ? 'pause' : 'ios-play')}
            size={35}
            color={isPlaying ? 'yellow' : '#fff'}
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
    }
     </TouchableOpacity>
          <View
            style={{
              marginLeft: 100,
            }}>
            <Slider
              style={{
                // width: 150,
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
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <View
        style={isDark ? styles.messageContainerDark : styles.messageContainer}>
        
        <View>
          <View
            style={
              isDark ? styles.senderMessageViewDark : styles.senderMessageView
            }>
            <View>{display(index)}</View>
          </View>
          <Text
            style={
              isDark ? styles.timeStampSenderDark : styles.timeStampSender
            }>
            {moment(createdAt, 'hmm').format('HH:mm')}
          </Text>
        </View>
        <View style={styles.senderImageView}>
          <Image source={sender} style={styles.senderImage} />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
  audio: state.AudioReducer.data,
  
});
export default connect(mapStateToProps,{nullAudio})(senderMessage);

const styles = StyleSheet.create({
  senderImage: {width: 55, height: 55, borderRadius: 30},
  messageContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    padding: 10,
  },
  messageContainerDark: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
  },
  stretch: {
    height: 120,
    width: 150,
    borderWidth: 3,
    borderColor: '#4D7CFE',
    borderRadius: 10,
    // resizeMode: 'contain',
  },
  senderText: {
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'sans-serif',
    fontSize: 15,
  },
  senderTextDark: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    letterSpacing: 1,
    fontFamily: 'sans-serif',
    fontSize: 15,
  },
  senderMessageView: {
    minHeight: 30,
    padding: 5,
    marginLeft: 5,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24C6DC',
    borderRadius: 15,
    flexDirection: 'column',
    borderBottomRightRadius: 0,
  },
  senderMessageViewDark: {
    minHeight: 30,
    padding: 5,
    marginLeft: 5,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(182, 181, 180, 0.8)',
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
  timeStampSender: {
    marginLeft: 17,
    color: 'grey',
  },
  timeStampSenderDark: {
    marginLeft: 17,
    color: 'white',
  },
  bl: {
    color: 'black',
    fontWeight: 'bold',
  },
  white: {
    fontWeight: 'bold',
    color: 'white',
  },
});