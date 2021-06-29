import React, {useState} from 'react';
import {firebase, Auth} from '../../../App';
import Spinner from 'react-native-loading-spinner-overlay';
import ResetPass from '../Modal/forgetPasswordModal';
import EyeIcon from 'react-native-vector-icons/Entypo';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {viewModal} from '../../_actions/modalActions';
let logo = require('../../../assets/images/CES.png');
let logo1 = require('../../../assets/images/Artboard.png');

const Login = ({navigation, viewModal, isDark}) => {
  const [showSecure, hideSecure] = useState(true);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [spinner, setspinner] = useState(false);

  const login = () => {
    if (password === null || password === '') {
      alert('Please enter the Password');
    } else {
      setspinner(true);

      Auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((error) => {
          setspinner(false);
          console.log(error);
          alert('Invalid Credentials', error);
        });
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'column', height: '100%'}}>
        <Spinner
          visible={spinner}
          textContent={'Processing...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View
          style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Image source={logo1} />
        </View>
        <View style={{flex: 3, height: '100%', alignItems: 'center'}}>
          <View style={{width: '88%'}}>
            <Text style={styles.portalHeading}>PORTAL MOBILE </Text>
            <View style={{marginTop: 40, marginBottom: 40}}>
              <TextInput
                style={styles.textInput1}
                onChangeText={(e) => onChangeEmail(e)}
                placeholder="EMAIL"
                value={email}
              />
              <View>
                <TextInput
                  secureTextEntry={showSecure}
                  onChangeText={(e) => onChangePassword(e)}
                  placeholder="SENHA"
                  value={password}
                  style={styles.textInput}
                />
                <EyeIcon
                  name={showSecure ? 'eye' : 'eye-with-line'}
                  style={styles.eye}
                  onPress={(e) => hideSecure(!showSecure)}
                />
              </View>
            </View>
            <ResetPass />
            <TouchableOpacity
              onPress={(e) => login(e)}
              style={{
                backgroundColor: '#40b759',
                borderRadius: 25,
                alignItems: 'center',
                padding: 15,
              }}>
              <Text style={{color: 'white', textTransform: 'uppercase'}}>
                ENTRAR
              </Text>
            </TouchableOpacity>
            {/* <View    style={{borderColor:'blue', borderWidth:2, borderRadius:20}}>
            <Button style={{borderRadius:20,borderWidth:2, borderColor:'red'}} borderColor='red' color='red' title="Submit" />
          </View> */}
          </View>
          {/* <Text style={{padding: 10}}>
            Noa tem uma conta ?{' '}
            <Text style={styles.createAccount}> Criar Conta</Text>
          </Text> */} 
          <TouchableOpacity onPress={(e) => viewModal(e)}>
            <Text style={{padding: 10}}>Esqueceu a Senha ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createAccount: {
    color: '#40b759',
  },
  inner: {
    padding: 24,
    // alignItems:'center',
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'space-around',
  },
  portalHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    // marginTop: 48,`
    // borderWidth: 2,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    // height: 40,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textInput1: {
    // height: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 10,
    // marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
  },

  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  spinnerTextStyle: {
    color: 'white',
    fontSize: 30,
  },
  eye: {
    position: 'absolute',
    marginLeft: '90%',
    marginTop: 26,
    fontSize: 20,
  },
});
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps, {viewModal})(Login);
