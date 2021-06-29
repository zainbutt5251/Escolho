import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import MModal from '../Modal/updatePassModal';
import bgImage from '../../../assets/images/bg-image.jpg';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
import {firebase, Auth} from '../../../App';
import {firestore} from '@react-native-firebase/firestore';
const StudentList = ({navigation, isDark}) => {
 
  console.log('Navigation');
  console.log(navigation);
  console.log('Navigation');
  const [child, setChild] = useState({
    data: [],
  });
  const goToDashboard = () => {
    console.log('To Dashboard');
    // navigation.navigate('Dashboard');
    navigation.navigate('FinanceiroProfile');
    
  };
  const childData = [];
  useEffect(() => {
    var user = Auth().currentUser;
    var childArr = [];
    // console.log(user.uid);
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        // console.log(doc.data().child);
        childArr = doc.data().child;
        childArr.map((e) => {
          firebase
            .firestore()
            .collection('students')
            .doc(e)
            .get()
            .then((item) => {
              // console.log(item.data())
              // console.log(item.data());
              childData.push(item.data());
              // console.log(childData)

              setChild({...child, data: childData});
              // console.log(child);
              // console.log('-------------------');
            });
        });
      });
  }, []);
  // console.log(child.data)
  const navigtToChat = () => {
    navigation.navigate('ChatInbox');
  };
  console.log('************** StudentList');
  console.log(isDark);
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <ScrollView style={{}}>
        <View>
          <View id="testView" style={styles.main}>
            {/* <Text style={isDark ? styles.mainHeadingDark : styles.mainHeading} >Escolha o aluno</Text> */}
            {child &&
              child.data.map((item, index) => (
                <View key={index} style={styles.div}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={(e) =>
                      navigation.navigate('Dashboard', {rollno: item.rollno})
                    }>
                    <Image
                      style={styles.imagset}
                      source={{uri: 'data:image/png;base64,' + item.image}}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                        width: '80%',
                      }}>
                      <View>
                        <Text style={styles.texts}>{item.name} </Text>

                        <Text style={styles.textsmall}>
                          Titulo : {item.title}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '10%',
                        marginRight: 25,
                      }}>
                      <TouchableOpacity onPress={(e)=>navigation.navigate('Tabs')} style={{

                      }}>
                        <Text
                          style={{
                            fontSize: 20,
                            borderRadius: 50,
                            backgroundColor: 'green',
                            textAlign: 'center',
                            color: 'white',
                            width:30
                          }}>
                          3
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

            {/* <View style={styles.div1}>
              <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={(e) => goToDashboard()}>
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/awsom1.jpeg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={styles.texts}>LUANA CAROLINA ROCHA</Text>

                    <Text style={styles.textsmall}>Titulo : ALUNOI</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
          <View>
            <MModal />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(StudentList);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor:'rgba(0,0,255,0.3)'
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  main: {
    // marginTop: 35,
    paddingTop: 0,
    padding: 15,
    color: 'black',
    // backgroundColor: 'white',
  },
  mainHeading: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '55%',
    paddingTop: 0,
  },
  mainHeadingDark: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '55%',
    color: 'white',
  },
  imagtop: {
    marginTop: 20,
    marginLeft: 330,
    width: 10,
    height: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  borders: {
    width: 170,
    // marginBottom: 30,
    color: 'black',

    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  div: {
    marginTop: 20,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#F79859',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  indiv: {
    color: 'black',
    fontSize: 10,
    paddingBottom: 1,
  },
  imagset: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  chaticon: {
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'right',
    marginLeft: 100,
  },
  texts: {
    paddingLeft: 5,
    paddingTop: 3,
    fontSize: 17,
    color: 'white',
    // textAlign: "right",
    marginLeft: 10,
  },
  textsmall: {
    paddingLeft: 5,
    padding: 0,
    marginTop: 0,
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  div1: {
    marginTop: 10,
    fontSize: 10,
    color: 'black',
    backgroundColor: '#EE4552',
    textAlign: 'center',
    textAlign: 'center',
    padding: 10,

    borderRadius: 5,

    borderColor: 'white',
  },
  indiv1: {
    color: 'black',
    fontSize: 10,
    paddingBottom: 2,
  },
  imagset1: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  topview: {
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
    flex: 1,
    flexDirection: 'row',
  },
  leftimg: {
    width: 35,
    height: 30,
  },
  rightimg: {
    marginLeft: 265,
  },
});
