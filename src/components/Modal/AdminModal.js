import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import {hideAdminModal} from '../../_actions/modalActions';
import sender from '../../../assets/images/sender.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import navigation from '../../../navigation';

const AdminModal = ({visible, navigation, hideAdminModal, isDark}) => {
  console.log(navigation);
  console.log(visible);
  const [isSelected, setSelection] = useState(false);
  const [filter, setFilter] = useState();

  const navigateTo = () => {
    navigation.navigate('CreateGroup');
    hideAdminModal();
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        style={{width: 30, borderWidth: 2}}
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          hideAdminModal();
        }}>
        <View style={styles.centeredView}>
          <View style={isDark ? styles.modalViewDark : styles.modalView}>
            {/* <View style={{width:'100%', backgroundColor:'lightblue', height:20, borderTopRightRadius:10, borderTopLeftRadius:10}}></View> */}
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row-reverse',
                // backgroundColor: '#4D7CFE',
                height: 40,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <TouchableHighlight
                onPress={() => {
                  hideAdminModal();
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    padding: 10,
                    marginTop: 18,
                    marginRight: 8,
                  }}
                  source={require('../../../assets/images/cross.png')}
                />
              </TouchableHighlight>
            </View>

            <ScrollView>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={sender} style={styles.image} />
                <Text style={isDark ? styles.nameDark : styles.name}>Professors</Text>
                <Text style={{color: 'grey'}}>Parent</Text>
                <Text style={isDark ? styles.roleDark: styles.role}>Add Role</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:5}}>
                  <Text style={{color:'#4D7CFE'}}>   Make Group Admin</Text>
                  
                    <AntDesign
                      name={'checkcircle'}
                      size={20}
                      color={'green'}
                      style={{paddingLeft:10}}
                    />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  name:{fontSize: 23, color:'black'},
  nameDark:{fontSize: 23, color:'white'},
  role:{padding:5, color:'black'},
  roleDark:{padding:5, color:'white'},





  title: {},
  titleDark: {
    color: 'white',
  },
  sessionDrop: {padding: 10},
  sessionDropDark: {
    // borderWidth: 1,
    // borderColor: 'white',
    // margin: -5,
    color: 'white',
    backgroundColor: 'rgba(182, 181, 180, 0.32)',
  },
  checkbox: {
    alignSelf: 'center',
    color: 'white',
  },
  label: {
    marginTop: 10,
  },
  labelDark: {
    marginTop: 10,
    color: 'white',
  },

  centeredView: {
    flex: 1,
    // height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // alignContent:'center'
    // marginTop: 52
  },
  modalView: {
    margin: 5,
    // height: 560,
    minHeight: 300,
    maxHeight: '80%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    // borderWidth: 1,
    // borderColor: 'red',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalViewDark: {
    margin: 5,
    // height: 560,
    minHeight: 300,
    maxHeight: '80%',
    width: '80%',
    backgroundColor: '#21223E',
    borderRadius: 10,
    // padding: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    // borderWidth: 1,
    // borderColor: 'red',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 15,
    textAlign: 'center',
  },
});

// export default ComplModal;
const mapStateToProps = (state) => ({
  visible: state.modalReducer.visibleModal,
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps, {hideAdminModal})(AdminModal);
