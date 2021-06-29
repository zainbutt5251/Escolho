import React from 'react'

 NewRecoder = () => {

  useEffect(() => {
    AudioRecorder.requestAuthorization().then((isAuthorised) => {
      // setaudioPath(`${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`)
      sethasPermission(isAuthorised);
      if (!isAuthorised) return;
      prepareRecordingPath(audioPath);
      AudioRecorder.onProgress = (data) => {
        setcurrentTime(Math.floor(data.currentTime));
      };

      AudioRecorder.onFinished = (data) => {
        // setaudioPath(`${AudioUtils.DocumentDirectoryPath}/${messageIdGenerator()}}/test.aac`)
        // console.log(data);
        setAudioData(data);
        // var audio = data.base64;
        // const audioName = data.audioFileURL;
        // var storageRef = firebase.storage().ref(audioName);
        // storageRef
        //   .putString(audio, 'base64')
        //   .then((snap) => {
        //     storageRef.getDownloadURL();
        //     // console.log('snap :' + snap);
        //   })
        //   .then(async () => {
        //     let url = await storageRef.getDownloadURL();
        //     setAudioUrl(url);
        //   });
        // if (Platform.OS === 'ios') {
        //   this._finishRecording(
        //     data.status === 'OK',
        //     data.audioFileURL,
        //     data.audioFileSize,
        //     // console.log(data),
        //   );
        // }
      };
    });
  }, [audioUrl, audioData]);

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
    setPaused(false);

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

  const renderComposer = (props) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Composer {...props} />
      </View>
    );
  };
    return (
        <View style={{padding: 8}}>
            <TouchableOpacity
              onPressIn={(e) => _record()}
              onPressOut={(e) => _stop()}>
              <FontAwesome
                name="microphone"
                color={recording == true ? 'red' : 'dodgerblue'}
                size={25}
              />
            </TouchableOpacity>
          </View>
    )
}

export default NewRecoder


