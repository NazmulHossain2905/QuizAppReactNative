import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../utils/colors';
import HIND_SILIGURI from '../utils/fonts';

const QuestionAndAnswerScreens = ({navigation, route}) => {
  const item = route.params;
  // console.log('I  T E M ==========>', item);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          height: 65,
          backgroundColor: COLORS.white,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={30}
          color={COLORS.dark}
        />
        <Text
          style={{
            fontSize: 18,
            color: COLORS.dark,
            fontFamily: HIND_SILIGURI.bold,
            marginLeft: 20,
            paddingTop: 5,
          }}>
          {item?.title}
        </Text>
      </View>
      <FlatList
        data={item.questionAndAnswer}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1}}>
              <LinearGradient
                colors={['#f3f3f3', '#fff', '#f5f5f5']}
                style={styles.linearGradient}>
                <LinearGradient
                  //   colors={['crimson', 'orange']}
                  colors={[COLORS.dark, COLORS.green]}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#fff',
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: COLORS.green,
                        fontFamily: HIND_SILIGURI.bold,
                      }}>
                      {item.questionNo}
                    </Text>
                  </View>
                </LinearGradient>
                <View style={{flex: 1, marginLeft: 8}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLORS.dark,
                      fontFamily: HIND_SILIGURI.bold,
                    }}>
                    {item.question}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLORS.green,
                      fontFamily: HIND_SILIGURI.semiBold,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: HIND_SILIGURI.bold,
                        color: COLORS.green,
                      }}>
                      উত্তর:{'- '}
                    </Text>
                    {item.answer}
                  </Text>
                </View>
              </LinearGradient>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#333',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 14,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  titleText: {
    fontSize: 18,
    color: COLORS.dark,
  },
});

export default QuestionAndAnswerScreens;
