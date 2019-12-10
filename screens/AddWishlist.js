import React from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

const styles = StyleSheet.create({

  container: {
  flex: 1,
},
scrollView: {
  backgroundColor: '#FFFFFF',
  flex: 1,
  padding: 10,
},

});

export default () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <ScrollView
      style={styles.scrollView}
    >
    <Text>
    THIS IS THE ADD WISHLIST PAGE.
    </Text>
    </ScrollView>

  </View>
);
