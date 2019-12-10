import React, {Component} from 'react';

import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card, ListItem, Header, Input, Button, Icon} from 'react-native-elements';

//import { Container, Header, Content, Item, Input, Icon, Body, Title } from 'native-base';

//
// const styles = StyleSheet.create({
//
//   container: {
//   flex: 1,
// },
// scrollView: {
//   backgroundColor: '#FFFFFF',
//   flex: 1
// },
//
// });

type Props = {};
export default class AllEvents extends Component {
  render () {
    return (

      <ScrollView  style={{height:'100%', width:'100%'}}>
      <View style={{ height: 900}}>


      <Header style={styles.header}
        leftComponent={{ type: 'material-community', icon: 'logout', color: '#fff', onPress: () => this.props.navigation.navigate('LoginScreen')}}
        centerComponent={{ text: 'My Events', style: { color: '#fff'} }}
        rightComponent={{ type: 'entypo', icon: 'plus', color: '#fff', onPress: () => this.props.navigation.navigate('AddEvents')}}
      />

      <Card
        title='Girls Squad'>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon type='ionicon' name='md-gift' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#bb2528'}}
          title='  VIEW EVENT'
          onPress={() => this.props.navigation.navigate('ViewEvent')}
          />
      </Card>

      <Card
        title='Lab Research Group'>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon type='ionicon' name='md-gift' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#bb2528'}}
          title='  VIEW EVENT'
          onPress={() => this.props.navigation.navigate('ViewEvent')}
          />
      </Card>

      <Card
        title='CS 125 Secret Santa'>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon type='ionicon' name='md-gift' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#bb2528'}}
          title='  VIEW EVENT'
          onPress={() => this.props.navigation.navigate('ViewEvent')}/>
      </Card>

</View>

</ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  button: {
   backgroundColor:'#bb2528',
   borderRadius:10,
   borderWidth: 1,
   borderColor: '#fff',
   width: 100,
   height: 30,
 },
 header:{
  backgroundColor: "#bb2528",
 },
});
