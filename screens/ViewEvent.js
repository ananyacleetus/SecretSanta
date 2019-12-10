import React, {Component} from 'react';

import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import {Header, Input, Button, Card, Image, ListItem } from 'react-native-elements';

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

const list = [
  {
    name: 'New hate for chuchu',

  },
  {
    name: 'New hat for xyz',

  },
  {
    name: 'Best meme from the forum contest',

  },
]
type Props = {};
export default class ViewEvent extends Component {


  constructor(props) {
    super(props)

    this.state = {
        editable: false,
        arrayHolder: [],
        textInput_Holder: ''
    }

}
  render () {
    return (
      <ScrollView  style={{height:'100%', width:'100%'}}>
      <View style={{ height: 900}}>

      <Header style={styles.header}
        leftComponent={{icon: 'chevron-left', color: '#fff', onPress: () => this.props.navigation.navigate('AllEvents')}}
        centerComponent={{ text: 'CS 125 Secret Santa', style: { color: '#fff'} }}
      />

      <Text h3>Your giftee is: </Text>

      <View>
      <Card title="Geoff Challen">
      <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{}}
                />

        <Text h3>Their Wishlist: </Text>

        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                bottomDivider
              />
            ))
          }
        </View>


      </Card>
      </View>

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
