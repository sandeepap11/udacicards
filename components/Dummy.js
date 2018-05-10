import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default class ListView extends Component {
    

    render() {

      return (
        <View style={styles.container}>
        
                    <Text style={{color: 'white'}}>Hello </Text>
                    
                
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    deck: {
        backgroundColor: 'purple',        
        height: 200,
        width: 250,
    }
  });