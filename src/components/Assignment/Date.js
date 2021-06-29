import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Date = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        borderRadius: 25,
        marginTop: 0,
      }}>
      <View
        style={{
          backgroundColor: '#40b759',
          flex: 1,
          alignContent: 'center',
          borderTopStartRadius: 5,
          borderBottomStartRadius: 5,
          justifyContent: 'center',
          height: 80,
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>PUBLICADO</Text>
        <Text style={{color: 'white', textAlign: 'center'}}>
          02 DE julhe DE 2020{' '}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#bb2b29',
          flex: 1,
          alignContent: 'center',
          borderTopEndRadius: 5,
          borderBottomEndRadius: 5,
          justifyContent: 'center',
          height: 80,
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>PRAZO: ATE</Text>
        <Text style={{color: 'white', textAlign: 'center'}}>
          01 DE dezembro DE 2020{' '}
        </Text>
      </View>
    </View>
  );
};

export default Date;
