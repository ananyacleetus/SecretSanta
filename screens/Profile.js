import React, {Component} from 'react';

import {StyleSheet, View, Text, ScrollView, Image, TextInput, FlatList, TouchableOpacity, Item} from 'react-native';
import {Card, ListItem, Header, Input, Button, Icon, Avatar} from 'react-native-elements';

{/*Profile inspired in part by https://www.bootdey.com/react-native-snippet/12/User-profile-with-options*/}
{/*List updating information inspired by https://reactnativecode.com/add-items-to-flatlist-dynamically*/}


type Props = {};
export default class Profile extends Component {

  constructor(props) {
    super(props);


    this.currArray = [
      {
        name:'Brand new lightsaber',
      },
      {
        name:'Mugs and tea',
      },
      {
        name:'Cute socks',
      }
    ]

    this.state = {
        editable: false,
        textInput_Holder: '',
        arrayHolder : [],
    }

    this.toggleEditable = this.toggleEditable.bind(this)
    this.joinData = this.joinData.bind(this)
  }


  componentDidMount() {
    this.setState({ arrayHolder: [...this.currArray] })
  }

  toggleEditable() {
    this.setState({
      editable: !this.state.editable
    })
  }

  joinData = () => {
    this.currArray.push({'name' : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.currArray] })
  }

  GetItem(item) {

  }

  render () {
    return (
      <ScrollView style={{height:'400%', width:'100%'}}>
        <View style={{ height: 1200 }}>
          <Header
            leftComponent={{ type: 'material-community', icon: 'logout', color: '#fff', onPress: () => this.props.navigation.navigate('LoginScreen')}}
            centerComponent={{ text: 'My Profile', style: { color: '#fff'} }}
            rightComponent={{ type: 'entypo', icon: 'plus', color: '#fff', onPress: () => this.props.navigation.navigate('AddEvents')}}
          />
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/ananya.jpg')}/>
                <Icon type='material-community' name='pencil' color='#000' onPress={this.toggleEditable}/>
                <TextInput style={styles.name} editable={this.state.editable}>Ananya Cleetus</TextInput>
                <TextInput style={styles.userInfo} editable={this.state.editable}>ananyacleetus@gmail.com </TextInput>
                <TextInput style={styles.userInfo} editable={this.state.editable}>Champaign, IL</TextInput>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>My Bio: </Text>
                <Text style={{paddingLeft:15, paddingRight:15}}>I'm a current student at the University of Illinois Urbana-Champaign. I'm super passionate about robotics and mental health advocacy, and even made the first mental health crisis app, Anemone. In my free time, I make memes and box.</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Add to Wishlist: </Text>
              </View>
            </View>

            <View>
              <View>
                <Input
                  placeholder='Enter Item Here'
                  placeholderTextColor='#000000'
                  leftIcon={{type: 'ionicon', name: 'md-gift'}}
                  onChangeText={data => this.setState({ textInput_Holder: data })}
                  />
                <Text>{"\n"}{"\n"}</Text>
                <TouchableOpacity onPress={this.joinData}
                  activeOpacity={0.7} style={styles.button} >
                  <Text style={styles.buttonText}> Add Item </Text>
                </TouchableOpacity>
              </View>
              <Text>{"\n"}{"\n"}</Text>
              <View style={styles.item}>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>My Wishlist: </Text>
                </View>
              </View>
              <View>
                {
                  this.state.arrayHolder.map((l, i) => (
                    <ListItem
                      key={i}
                      title={l.name}
                      bottomDivider
                      />
                  ))
                }
              </View>
            </View>
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
   width: 200,
   height: 45,
   alignItems: 'center',
   justifyContent: 'center'
  },
  buttonText:{
   color:'white',
   fontSize: 15,
   fontWeight: 'bold',
  },
  header:{
   backgroundColor: "#ffffff",
  },
  headerContent:{
   padding:30,
   alignItems: 'center',
  },
  avatar: {
   width: 130,
   height: 130,
   borderRadius: 63,
   borderWidth: 4,
   borderColor: "white",
   marginBottom:10,
  },
  name:{
   fontSize:22,
   color:"#000000",
   fontWeight:'600',
  },
  userInfo:{
   fontSize:16,
   color:"#778899",
   fontWeight:'600'
  },
  body:{
   backgroundColor: "#778899",
   height:1200,
   alignItems:'center',
  },
  item:{
   flexDirection : 'row',
  },
  infoContent:{
   flex:1,
   alignItems:'center',
   paddingLeft:5
  },
  info:{
   fontSize:18,
   marginTop:20,
   color: "#FFFFFF",
  }
});
