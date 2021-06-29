import * as React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Entypo';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import bgImage from '../../../assets/images/bg-image.jpg';
import icon1imag from '../../../assets/images/icon1.png';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
import { BorderlessButton } from 'react-native-gesture-handler';

const Teacher = ({isDark}) => {
  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
          <View style={styles.mian} >
         <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#D064EC', '#A94BEA']}>

                <View style={styles.pmain}>
                    <Text style={styles.proffesortext}> Professores</Text> 
                    </View>

        </LinearGradient>
       <ScrollView>
            
        <LinearGradient
        style={styles.div1}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FCA86A', '#FDA05A']}> 
          
              <View
                style={{ flexDirection: 'row' ,}}
              >
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/professor.jpg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View >
                      <View style={{flexDirection:'row'}}>
                    <Text style={styles.textLisandra}>Lisandra Araujo</Text>
                    <Icon2
                            name="dots-three-horizontal"
                            style={styles.icon2}
                          />
                          </View>
                    <Text style={styles.textTitulo}>Titulo : Professor de Históía</Text>
                    <View style={styles.Titoloflex}>
                    <Icon
                            name="calendar"
                            style={styles.icon}
                          />
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  4736
                              </Text>
                              <Text style={styles.likes}>
                                  Likes
                              </Text>
                              
                          </View>
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  1384
                              </Text>
                              <Text style={styles.followers}>
                                  Followers
                              </Text>
                              
                          </View>
                          <View style={styles.smsiconpadding}>
                         <Image
                                style={styles.smsicon}
                                source={require('../../../assets/images/icon1.png')}
                                />
                              
                          </View>
                    </View>
                  </View>
                
                   
                  
                </View>
              </View>
           
        </LinearGradient>
        
            
     <LinearGradient
        style={styles.div}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FA4982', '#FE3B77']}> 
          
              <View
                style={{ flexDirection: 'row' ,}}
              >
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/professor.jpg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View >
                      <View style={{flexDirection:'row'}}>
                    <Text style={styles.textLisandra}>David Sandro Escolo</Text>
                    <Icon2
                            name="dots-three-horizontal"
                            style={styles.iconpink}
                          />
                          </View>
                    <Text style={styles.textTitulo}>Titulo : Professor de Históía</Text>
                    <View style={styles.Titoloflex}>
                    <Icon
                            name="calendar"
                            style={styles.icon}
                          />
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  4736
                              </Text>
                              <Text style={styles.likes}>
                                  Likes
                              </Text>
                              
                          </View>
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  1384
                              </Text>
                              <Text style={styles.followers}>
                                  Followers
                              </Text>
                              
                          </View>
                          <View style={styles.smsiconpadding}>
                         <Image
                                style={styles.smsicon}
                                source={require('../../../assets/images/icon1.png')}
                                />
                              
                          </View>
                    </View>
                  </View>
                
                   
                  
                </View>
              </View>
           
        </LinearGradient>

        <LinearGradient
        style={styles.div}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#695DFF', '#669EFB']}> 
          
              <View
                style={{ flexDirection: 'row' ,}}
              >
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/professor.jpg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View >
                      <View style={{flexDirection:'row'}}>
                    <Text style={styles.textLisandra}>Júlío César Beírute</Text>
                    <Icon2
                            name="dots-three-horizontal"
                            style={styles.iconblu}
                          />
                          </View>
                    <Text style={styles.textTitulo}>Titulo : Professor de Históía</Text>
                    <View style={styles.Titoloflex}>
                    <Icon
                            name="calendar"
                            style={styles.icon}
                          />
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  4736
                              </Text>
                              <Text style={styles.likes}>
                                  Likes
                              </Text>
                              
                          </View>
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  1384
                              </Text>
                              <Text style={styles.followers}>
                                  Followers
                              </Text>
                              
                          </View>
                          <View style={styles.smsiconpadding}>
                         <Image
                                style={styles.smsicon}
                                source={require('../../../assets/images/icon1.png')}
                                />
                              
                          </View>
                    </View>
                  </View>
                
                   
                  
                </View>
              </View>
           
        </LinearGradient>
        <LinearGradient
        style={styles.div}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FA8B84', '#F5548A']}> 
          
              <View
                style={{ flexDirection: 'row' ,}}
              >
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/professor.jpg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View >
                      <View style={{flexDirection:'row'}}>
                    <Text style={styles.textLisandra}>Roberta Castro e Silva</Text>
                    <Icon2
                            name="dots-three-horizontal"
                            style={styles.iconlightpink}
                          />
                          </View>
                    <Text style={styles.textTitulo}>Titulo : Professor de Históía</Text>
                    <View style={styles.Titoloflex}>
                    <Icon
                            name="calendar"
                            style={styles.icon}
                          />
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  4736
                              </Text>
                              <Text style={styles.likes}>
                                  Likes
                              </Text>
                              
                          </View>
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  1384
                              </Text>
                              <Text style={styles.followers}>
                                  Followers
                              </Text>
                              
                          </View>
                          <View style={styles.smsiconpadding}>
                         <Image
                                style={styles.smsicon}
                                source={require('../../../assets/images/icon1.png')}
                                />
                              
                          </View>
                    </View>
                  </View>
                </View>
              </View>
           
        </LinearGradient>
        
        <LinearGradient
        style={styles.div}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#11D1B8', '#14D2B8']}> 
          
              <View
                style={{ flexDirection: 'row' ,}}
              >
                <Image
                  style={styles.imagset}
                  source={require('../../../assets/images/professor.jpg')}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View >
                      <View style={{flexDirection:'row'}}>
                    <Text style={styles.textLisandra}>Silvana Miereles Soares</Text>
                    <Icon2
                            name="dots-three-horizontal"
                            style={styles.icongreen}
                          />
                          </View>
                    <Text style={styles.textTitulo}>Titulo : Professor de Históía</Text>
                    <View style={styles.Titoloflex}>
                    <Icon
                            name="calendar"
                            style={styles.icon}
                          />
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  4736
                              </Text>
                              <Text style={styles.likes}>
                                  Likes
                              </Text>
                              
                          </View>
                          <View style={styles.maincount}>
                          <Text style={styles.count}>
                                  1384
                              </Text>
                              <Text style={styles.followers}>
                                  Followers
                              </Text>
                              
                          </View>
                          <View style={styles.smsiconpadding}>
                         <Image
                                style={styles.smsicon}
                                source={require('../../../assets/images/icon1.png')}
                                />
                              
                          </View>
                    </View>
                  </View>
                
                   
                  
                </View>
              </View>
           
        </LinearGradient>
        </ScrollView>
       </View>
      
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps)(Teacher);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  main:{flexDirection:"column",flex:1},
  imagset: {
    borderRadius: 40,
    width: 60,
    height: 60,
    margin: 5,
  },
  div1: {
    borderWidth:2,
  marginTop: 10,
  fontSize: 12,
  color: 'black',
  marginTop:20,
   margin:10,
  textAlign: 'center',
  textAlign: 'center',
  padding: 20,
  borderRadius: 10,
  borderColor: 'white',
},
div: {
    borderWidth:2,
  
  fontSize: 12,
  color: 'black',
  marginTop:1,
   margin:10,
  textAlign: 'center',
  textAlign: 'center',
  padding: 20,
  borderRadius: 10,
  borderColor: 'white',
},
  textLisandra: {
      top:-10,
    paddingLeft: 5,
    paddingTop: 0,
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  textTitulo: {
    paddingLeft: 7,
    padding: 0,
    top:-2,
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  icon2:{
    color: 'white',
    fontSize: 20,
    paddingLeft:67,
    top:-15,
  },
  iconpink:{
    color: 'white',
    fontSize: 20,
    paddingLeft:22,
    top:-15,
  },
  iconblu:{
    color: 'white',
    fontSize: 20,
    paddingLeft:37,
    top:-15,
  },
  iconlightpink:{
    color: 'white',
    fontSize: 20,
    paddingLeft:8,

    top:-15,
  },
  icongreen:{
    color: 'white',
    fontSize: 20,
    top:-15,
  },
  icon:{
    color: 'white',
    fontSize: 20,
  },
  likes:{color:"white",top:-5,fontSize:8,textAlign:"center"},
  pmain:{paddingLeft:15,marginBottom:5,},
  proffesortext:{color:'white',fontSize:20,borderColor:"white", borderBottomWidth:2,width:110},
  maincount:{paddingLeft:30,},
  Titoloflex:{top:10,paddingLeft:22,flexDirection:'row',marginTop:8},
  count:{color:"white",top:-4,fontSize:11,textAlign:"center"},
  smsiconpadding:{paddingLeft:50,},
  smsicon:{height:30,width:30,top:-10},
  followers:{color:"white",top:-5,fontSize:9,textAlign:"center"},
});
