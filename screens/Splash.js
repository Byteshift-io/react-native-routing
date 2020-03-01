import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function Splash(props) {
  console.log(props);
  return (
    <View>
      <Text>Spalsh</Text>
      <Button
        title="goto Login"
        onPress={() => props.navigation.replace('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Splash;
