import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const QuestionAndAnswerScreens = ({navigation, route}) => {
  const item = route.params;
  console.log(item);

  return <Text style={styles.text}>QuestionAndAnswerScreens</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#333',
  },
});

export default QuestionAndAnswerScreens;
