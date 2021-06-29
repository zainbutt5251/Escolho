import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

function timeStamp({isDark}) {
    return (
        <View style={styles.dayStampView}>
            <Text style={isDark ? styles.dayStampDark : styles.dayStamp}>
              Yesterday
            </Text>
          </View>
    )
}
const styles = StyleSheet.create({
    dayStampView: {minHeight: 50, marginTop: 3},
    dayStamp: {
      color: 'black',
  
      minWidth: 90,
      borderRadius: 20,
      textAlign: 'center',
      padding: 10,
      alignSelf: 'center',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
    dayStampDark: {
      color: 'white',
  
      minWidth: 90,
      borderRadius: 20,
      textAlign: 'center',
      padding: 10,
      alignSelf: 'center',
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
})
const mapStateToProps = (state) => ({
    isDark: state.themeReducer.theme,
  });
  export default connect(mapStateToProps)(timeStamp)
