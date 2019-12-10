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
export default class SignUpScreen extends Component {
  render () {
    return (

      <ScrollView  style={{height:'100%', width:'100%'}}>
      <View style={{ height: 900}}>


      <Header style={styles.header}
        leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => this.props.navigation.navigate('LoginScreen')}}
        centerComponent={{ text: 'Sign Up for an Account', style: { color: '#fff'} }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />

      <Text>{"\n"}{"\n"}</Text>

      <Text>{"\n"}{"\n"}</Text>

      <Text>{"\n"}{"\n"}</Text>

      <Text>{"\n"}{"\n"}</Text>



            <Input
            label="Full Name"
              placeholder='Ananya Cleetus'
              leftIcon={{ type: 'ionicon', name: 'md-person' }}
            />

      <Input
      label="Email Address"
        placeholder='example@gmail.com'
        leftIcon={{ type: 'entypo', name: 'email' }}
      />

      <Input
      label="Password"
  placeholder='**********'
  leftIcon={{ type: 'material-community', name: 'textbox-password' }}
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
    title="Sign Up"
  raised/>
  </View>

<View>
<Text
onPress={() => this.props.navigation.navigate('LoginScreen')}
>              Return to Log In</Text>
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
   width: 100,
   height: 30,
 },
 header:{
  backgroundColor: "#bb2528",
 },
});
