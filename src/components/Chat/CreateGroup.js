import * as React from 'react';
import {useState, useEffect} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import bgImage from '../../../assets/images/bg-image.jpg';
import sender from '../../../assets/images/sender.jpg';

import icon1imag from '../../../assets/images/icon1.png';
import bgImageLight from '../../../assets/images/bg-image-light.jpg';
import {connect} from 'react-redux';
import {BorderlessButton, TextInput} from 'react-native-gesture-handler';
import AdminModal from '../Modal/AdminModal';
import { viewAdminModal } from '../../_actions/modalActions';
const Item = ({title, role,viewAdminModal, isDark, }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
      }}>
      <View>
        <Image
          source={sender}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
      </View>
      <View style={{paddingLeft: 15, flexDirection: 'column'}}>
        <Text style={[isDark ? styles.listText : '', {fontSize: 17}]}>
          {title}
        </Text>
        <Text style={[isDark ? styles.listText : '', {fontSize: 13}]}>
          {role}
        </Text>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity  onPress={()=>viewAdminModal()} >
        <Icon name={'edit'} color={isDark ? 'white' : '#4D7CFE'} size={20}/>
      </TouchableOpacity>
      <View style={{paddingLeft: 20}}>
        <Icon2 name={'delete'} color={'red'} size={20} />
      </View>
    </View>
  </View>
);
const CreateGroup = ({isDark, viewAdminModal}) => {
  const [memberCount, setMemberCount] = useState(3);
  const [dataMembers, setDataMembers] = useState([
    {
      title: 'Professores',
      role: 'Parent',
    },
    {
      title: 'Alunos',
      role: 'Teacher',
    },
    {
      title: 'Tesouraria',
      role: 'student',
    },
    
  ]);

  const renderItem = ({item, role, viewAdminModal}) => (
    <Item title={item.title} role={item.role} isDark={isDark} viewAdminModal={viewAdminModal} />
  );

  return (
    <ImageBackground
      source={isDark ? bgImage : bgImageLight}
      style={styles.image}>
      <View style={{padding: 20}}>
        <AdminModal />
        <ScrollView>
          <View>
            <View>
              <Text style={isDark ? styles.groupNameDark : styles.groupName}>
                Enter Group Name
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#4D7CFE',
                marginTop: -5,
              }}>
              <TextInput
                style={{padding: -4}}
                placeholderTextColor={isDark ? 'white' : ''}
                placeholder="New Group"></TextInput>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <View>
              <Text style={isDark ? styles.groupNameDark : styles.groupName}>
                Group category
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#4D7CFE',
                marginTop: -5,
              }}>
              <TextInput
                style={{padding: -4}}
                placeholderTextColor={isDark ? 'white' : ''}
                placeholder="New Group"></TextInput>
            </View>
          </View>

          <View
            style={[
              {
                borderRadius: 20,
                marginTop: 15,
                padding: 5,
              },
              {backgroundColor: isDark ? 'rgba(182, 181, 180, 0.50)' : ''},
            ]}>
            <View style={{marginTop: 30, marginLeft: '7%'}}>
              <Text
                style={isDark ? styles.memberCountDark : styles.memberCount} >
                {memberCount} Members
              </Text>
            </View>

{dataMembers.map((data, index)=>{
  return(

  
  <View key={index}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
      }}>
      <View>
        <Image
          source={sender}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
      </View>
      <View style={{paddingLeft: 15, flexDirection: 'column'}}>
        <Text style={[isDark ? styles.listText : '', {fontSize: 17}]}>
          {data.title}
        </Text>
        <Text style={[isDark ? styles.listText : '', {fontSize: 13}]}>
          {data.role}
        </Text>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity  onPress={()=>viewAdminModal()} >
        <Icon name={'edit'} color={isDark ? 'white' : '#4D7CFE'} size={20}/>
      </TouchableOpacity>
      <View style={{paddingLeft: 20}}>
        <Icon2 name={'delete'} color={'red'} size={20} />
      </View>
    </View>
  </View>
  )
})}

            {/* <FlatList
              style={{padding: 5}}
              data={dataMembers}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              isDark={isDark}
              viewAdminModal={viewAdminModal}
             
            /> */}
            <View style={{paddingLeft: '85%'}}>
              <Icon2 name={'checkcircle'} size={40} color={'#4D7CFE'} />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
});
export default connect(mapStateToProps, { viewAdminModal } )(CreateGroup);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  groupName: {color: 'grey', fontWeight: 'bold'},
  groupNameDark: {color: 'white', fontWeight: 'bold'},
  memberCount: {color: 'grey', fontWeight: 'bold', fontSize: 25},
  memberCountDark: {color: 'white', fontWeight: 'bold', fontSize: 25},
  listText: {color: 'white'},
});
