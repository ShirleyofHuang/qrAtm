import { Header, Icon } from 'react-native-elements';
import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert
  } from 'react-native';

const FixedHeader = () => (
<Header
  leftComponent={<Button  title="HOME" 
        onPress={() => Alert.alert('Going Home')}/>}
  centerComponent={{ text: 'CARDLESS', style: { color: '#fff' } }}
  rightComponent={<Icon reverse name='account-circle'
  type='material'
  color='#f50'
 onPress={() => Alert.alert('Profile')}></Icon>}
/>
)

export default FixedHeader;