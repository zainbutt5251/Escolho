import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {hideModal} from '../../_actions/modalActions';
import {TextInput} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import {firebase, Auth} from '../../../App';

const ResetModel = ({modelVisible, hideModal}) => {
  const [spinner, setspinner] = useState(false);

  const [email, setemail] = useState('');

  const sendResetPassEmail = () => {
    if (email === '') {
      alert('Please Enter your email to Reset your Password');
    } else {
      var auth = firebase.auth();
      setspinner(true);
      auth
        .sendPasswordResetEmail(email)
        .then(function () {
          alert('An email has been sent to your Email Address ');
          setspinner(false);
          // Email sent.
        })
        .catch(function (error) {
          setspinner(false);
          // An error happened.
          alert(error);
        });
      hideModal();
    }
  };

  //   const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Spinner
        visible={spinner}
        textContent={'Processing...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modelVisible}
        style={{
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Redefinição de senha</Text>
            <Text style={styles.infoText}>Informe o login do usuário</Text>
            <Text style={styles.infoText}>Uma nova senha será gerada e </Text>
            <Text style={styles.infoText}>
              enviada para o e-mail existente no cadastro
            </Text>

            <View style={{marginTop: 10, marginBottom: 10}}>
              <TextInput
                style={styles.textInput}
                onChangeText={(e) => setemail(e)}
                placeholder="Login"
                value={email}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={(e) => hideModal(e)}
                style={{
                  backgroundColor: '#ba2c28',
                  borderRadius: 30,
                  alignItems: 'center',
                  padding: 15,
                  width: 120,
                  marginLeft: -2,
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(e) => sendResetPassEmail(e)}
                style={{
                  backgroundColor: '#40b759',
                  borderRadius: 30,
                  alignItems: 'center',
                  padding: 15,
                  width: 120,
                  marginLeft: 35,
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 20,
    height: 800,

    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 5,
    height: 340,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    // height:1800,
    alignItems: 'center',
    shadowColor: '#000',
    // borderWidth: 1,
    // borderColor: 'red',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 15,
    paddingTop: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666666',
    marginTop: 40,
    // borderWidth: 1,
    // borderColor: 'red',
    marginBottom: 10,
  },
  textInput: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    // height: 40,
    borderRadius: 5,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 10,
    width: 270,
  },
  spinnerTextStyle: {
    color: 'white',
    fontSize: 30,
  },
});
const mapStateToProps = (state) => ({
  modelVisible: state.modalReducer.visible,
});
export default connect(mapStateToProps, {hideModal})(ResetModel);
