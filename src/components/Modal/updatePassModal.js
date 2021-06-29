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
import EyeIcon from 'react-native-vector-icons/Entypo';

import {firebase, Auth} from '../../../App';

const Model = ({modelVisible, hideModal, isDark}) => {
  const [spinner, setspinner] = useState(false);
  const [showSecure, hideSecure] = useState(true);
  const [showSecure2, hideSecure2] = useState(true);
  const [showSecure3, hideSecure3] = useState(true);
  const [oldPass, checkPass] = useState('');
  const [newPass, setnewPass] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
  // console.log(oldPass)
  const resetPass = () => {
    const user = Auth().currentUser;
    const userEmail = Auth().currentUser.email;
    const credential = Auth.EmailAuthProvider.credential(userEmail, oldPass);
    if (newPass == '' || confirmPass == '' || oldPass == '') {
      alert('Please Enter All fields to Reset your Password');
    } else {
      setspinner(true);
      user
        .reauthenticateWithCredential(credential)
        .then(function () {
          if (newPass == confirmPass) {
            user
              .updatePassword(confirmPass)
              .then(function () {
                // Update successful.
                alert('Password Updated');
                setspinner(false);
                hideModal();
              })
              .catch(function (error) {
                // An error happened.
                alert(`there's been an error, please try again`);
              });
          } else {
            alert('Password Do not match ');
            setspinner(false);
          }
          // alert('Authenticated');
        })
        .catch(function (error) {
          // An error happened.
          alert('Not Authorized ! ');
          setspinner(false);
        });
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
          <View style={isDark ? styles.modalViewDark : styles.modalView}>
            <Text style={isDark ? styles.modalTextDark : styles.modalText}>
              Alteração de senha
            </Text>
            <View style={{marginTop: 10, marginBottom: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  secureTextEntry={showSecure}
                  style={styles.textInput}
                  onChangeText={(e) => checkPass(e)}
                  placeholder="Senha atual"
                  placeholderTextColor={isDark ? 'white' : ''}
                  value={oldPass}
                />
                <EyeIcon
                  name={showSecure ? 'eye' : 'eye-with-line'}
                  style={isDark ? styles.eyeDark : styles.eye}
                  onPress={(e) => hideSecure(!showSecure)}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  secureTextEntry={showSecure2}
                  onChangeText={(e) => setnewPass(e)}
                  placeholder="Nova senha"
                  value={newPass}
                  style={styles.textInput}
                  placeholderTextColor={isDark ? 'white' : ''}
                />
                <EyeIcon
                  name={showSecure2 ? 'eye' : 'eye-with-line'}
                  style={isDark ? styles.eyeDark : styles.eye}
                  onPress={(e) => hideSecure2(!showSecure2)}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  secureTextEntry={showSecure3}
                  onChangeText={(e) => setconfirmPass(e)}
                  placeholder="Confirmação da nova senha"
                  value={confirmPass}
                  style={styles.textInput}
                  placeholderTextColor={isDark ? 'white' : ''}
                />
                <EyeIcon
                  name={showSecure3 ? 'eye' : 'eye-with-line'}
                  style={isDark ? styles.eyeDark : styles.eye}
                  onPress={(e) => hideSecure3(!showSecure3)}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 0,
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={(e) => hideModal(e)}
                style={{
                  backgroundColor: '#ba2c28',
                  borderRadius: 25,
                  alignItems: 'center',
                  padding: 15,
                  width: 130,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(e) => resetPass(e)}
                style={{
                  backgroundColor: '#40b759',
                  borderRadius: 25,
                  alignItems: 'center',
                  padding: 15,
                  width: 130,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
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
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 5,
    height: 360,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    // borderWidth: 1,
    // borderColor: 'red',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalViewDark: {
    margin: 5,
    height: 360,
    width: '85%',
    backgroundColor: '#21223E',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    // borderWidth: 1,
    // borderColor: 'red',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#666666',
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  modalTextDark: {
    // marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  textInput: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    // height: 40,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    // padding: 10,
    width: '100%',
  },
  textInput2: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    // height: 40,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    // padding: 10,
    width: 270,
  },
  textInput3: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    // height: 40,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    // padding: 10,
    width: 270,
  },
  spinnerTextStyle: {
    color: 'white',
    fontSize: 30,
  },
  eye: {
    marginLeft: '-10%',
    fontSize: 20,
  },
  eyeDark: {
    marginLeft: '-10%',
    color: 'white',
    fontSize: 20,
  },
  eye1: {
    position: 'relative',
    marginLeft: '90%',
    marginTop: '-15%',
    fontSize: 20,
  },
  eye2: {
    position: 'relative',
    marginLeft: '90%',
    marginTop: '-22%',

    fontSize: 20,
  },
});
const mapStateToProps = (state) => ({
  modelVisible: state.modalReducer.visible,
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps, {hideModal})(Model);
