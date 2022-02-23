import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={{
            height: 350,
            width: 500,
            aspectRatio: 1,
            display: 'flex',
            alignItems: 'stretch',
            // marginTop: 50,
            borderRadius: 20,
          }}
          resizeMode="contain"
          blurRadius={1}
          source={{
            uri: 'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
          }}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {fontSize: 30, color: '#BA4A00', margin: 0},
          ]}>
          Home Screen
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          cupiditate consequatur modi beatae sint voluptatem pariatur eligendi
          accusamus.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});
export default Home;
