import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import COLORS from '../utils/colors';
import HIND_SILIGURI from '../utils/fonts';

import allQuestionsAndAnswers from '../questionsAndAnswers/questionsAndAnswers';
// console.log(allQuestionsAndAnswers[0].questionAndAnswer);

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20}}>
      <View style={{marginTop: 30, marginBottom: 20, alignItems: 'center'}}>
        <Image
          resizeMode="center"
          style={{width: 70, height: 70}}
          source={require('../assets/images/book.png')}
        />
        <Text style={styles.headingText}>কুইজ ও প্রশ্ন উত্তর</Text>
      </View>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={allQuestionsAndAnswers}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Quiz', item)}
              style={styles.list}>
              <View style={styles.header}>
                <Image style={{width: 65, height: 65}} source={item.img} />
              </View>
              <View style={styles.titlePart}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: HIND_SILIGURI.semiBold,
                    color: COLORS.dark,
                  }}>
                  {!item.quiz ? `প্রশ্ন ও উত্তর` : ``}
                </Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.dark,
                    fontFamily: HIND_SILIGURI.semiBold,
                  }}>{`${item.subject ? 'বিষয়:' : 'মোট:'} ${
                  item.total || '০'
                } টি`}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const width = Dimensions.get('screen').width / 2 - 30;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 32,
    color: COLORS.dark,
    textAlign: 'center',
    fontFamily: HIND_SILIGURI.bold,
  },
  list: {
    width,
    height: 225,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 2,
    elevation: 4,
  },
  header: {
    marginTop: 15,
    alignItems: 'center',
  },
  titlePart: {
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: COLORS.dark,
    fontFamily: HIND_SILIGURI.bold,
  },
});

export default HomeScreen;
