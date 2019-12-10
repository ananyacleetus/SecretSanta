import React, {Component} from 'react';

import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Header, Input, Button} from 'react-native-elements';

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
export default class CreateEvent extends Component {
  render () {
    return (

      <ScrollView  style={{height:'100%', width:'100%'}}>
      <View style={{ height: 900}}>

      <Header
        leftComponent={{ type: 'material-community', icon: 'logout', color: '#fff', onPress: () => this.props.navigation.navigate('LoginScreen')}}
        centerComponent={{ text: 'Create ', style: { color: '#fff'} }}
        rightComponent={{ type: 'entypo', icon: 'plus', color: '#fff', onPress: () => this.props.navigation.navigate('AddEvents')}}
      />

      <View style={{alignItems:'center'}}>
      <Text h1 style={{fontSize:25}}>Add Event by Code: </Text>

      <Text>{"\n"}{"\n"}</Text>

      <Input
      label="Event Code"
        placeholder='H6Z7A2D'
        leftIcon={{ type: 'material', name: 'event' }}
      />
      <Text>{"\n"}{"\n"}</Text>

      <View style={{
        width: '100%',
        justifyContent: 'center',
          alignItems: 'center',
          width: 200}}>
      <Button
      onPress={() => this.props.navigation.navigate('AllEvents')}
      buttonStyle={styles.button}
          title="Join Event"
        raised/>
        </View>

        <Text>{"\n"}{"\n"}</Text>


      <Text h1 style={{fontSize:35}}> OR </Text>

      <Text>{"\n"}{"\n"}</Text>

      <Input
      label="Person 1"
        placeholder='example@gmail.com'
        leftIcon={{ type: 'entypo', name: 'email' }}
      />

      <Input
      label="Person 2"
        placeholder='example@gmail.com'
        leftIcon={{ type: 'entypo', name: 'email' }}
      />

      <Input
      label="Person 3"
        placeholder='example@gmail.com'
        leftIcon={{ type: 'entypo', name: 'email' }}
      />

      <Input
      label="Person 4"
        placeholder='example@gmail.com'
        leftIcon={{ type: 'entypo', name: 'email' }}
      />
<Text>{"\n"}{"\n"}</Text>

<Text>{"\n"}{"\n"}</Text>

<View style={{
  width: '100%',
  justifyContent: 'center',
    alignItems: 'center',
    width: 200}}>
<Button
onPress={() => this.props.navigation.navigate('AllEvents')}
buttonStyle={styles.button}
    title="Create Event"
  raised/>
  </View>

<Text>{"\n"}{"\n"}</Text>

</View>

<Text>{"\n"}{"\n"}</Text>

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
   width: 130,
   height: 45,
 },
});
