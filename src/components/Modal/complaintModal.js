import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {hideComplModal} from '../../_actions/modalActions';

const ComplModal = ({complModelVisible, hideComplModal}) => {
  // const [MyDB, setMyDB] = useState(props.MyDB);
  // console.log(MyDB)
  return (
    <View style={styles.centeredView}>
      <Modal
        style={{width: 30, borderWidth: 2}}
        animationType="fade"
        transparent={true}
        visible={complModelVisible}
        onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
                hideComplModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%', flexDirection: 'row-reverse'}}>
              <TouchableHighlight
                onPress={() => {
                  hideComplModal();
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../../assets/images/cross.png')}
                />
              </TouchableHighlight>
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'darkgrey',
                  paddingTop: 30,
                  paddingBottom: 30,
                  textAlign: 'center',
                }}>
                Compartamento
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'darkgrey',
                  paddingTop: 0,
                  paddingBottom: 30,
                  textAlign: 'center',
                }}>
                O aluno conversou muito com os coleguinhas durante a aula e
                atrapalhou a professora
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'springgreen',
                  paddingTop: 0,
                  paddingBottom: 30,
                  textAlign: 'center',
                }}>
                A professra pediu silencio e ele obedeceu.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'springgreen',
                  paddingTop: 0,
                  paddingBottom: 30,
                  textAlign: 'center',
                }}>
                Date: 25/06/2020
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setvisibility(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 360,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
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
  complModelVisible: state.modalReducer.visibleCompl,
});
export default connect(mapStateToProps, {hideComplModal})(ComplModal);
