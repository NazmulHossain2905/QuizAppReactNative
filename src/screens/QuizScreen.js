import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../utils/colors';
import HIND_SILIGURI from '../utils/fonts';

import AntDesign from 'react-native-vector-icons/AntDesign';

// import {item?.islamicQuiz} from '../../quizs/item?.islamicQuiz';

const QuizScreen = ({route, navigation}) => {
  const item = route.params;
  //   console.log(item.title);

  const [questionNo, setQuestionNo] = React.useState(0);
  const [correctAnswerColor, setCorrectAnswerColor] = React.useState('grey');
  const [userSelected, setUserSelected] = React.useState('');
  const [wrongAnswerColor, setWrongAnswerColor] = React.useState('grey');

  // result
  const [correctAnsCount, setCorrectAnsCount] = React.useState(0);
  const [wrongAnsCount, setWrongAnsCount] = React.useState(0);

  //   console.log(questionNo);

  function findAnswer(arr, userSelected) {
    if (arr[questionNo].answer == userSelected) {
      setCorrectAnswerColor(COLORS.green);
      setUserSelected(userSelected);
      setCorrectAnsCount(correctAnsCount + 1);
      // console.log('Yuu Selected Correct answer');
    } else {
      // console.log('Current answer is', arr[questionNo].answer);
      setCorrectAnswerColor(COLORS.green);
      setWrongAnswerColor(COLORS.red);
      setUserSelected(arr[questionNo].answer);
      setWrongAnsCount(wrongAnsCount + 1);
    }
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#333',
            fontFamily: 'HindSiliguri-Bold',
          }}>
          {item?.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#333',
            fontFamily: 'HindSiliguri-Bold',
            // fontFamily: 'HindSiliguri-SemiBold',
          }}>
          প্রশ্ন নাম্বার: {item?.islamicQuiz[questionNo].questionNo}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          minHeight: 325,
        }}>
        <View style={{minHeight: 80}}>
          <Text
            style={{
              fontSize: 20,
              color: '#333',
              fontFamily: 'HindSiliguri-Bold',
            }}>
            প্রশ্ন {item?.islamicQuiz[questionNo].questionNo}:-{' '}
            {item?.islamicQuiz[questionNo].question}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 6,
          }}>
          <TouchableOpacity
            onPress={() =>
              findAnswer(item?.islamicQuiz, item?.islamicQuiz[questionNo].hint1)
            }
            style={{
              marginVertical: 5,
              backgroundColor:
                item?.islamicQuiz[questionNo].hint1 == userSelected
                  ? correctAnswerColor
                  : wrongAnswerColor,
              padding: 5,
              paddingLeft: 16,
              borderRadius: 76,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'HindSiliguri-Regular',
              }}>
              (ক) {item?.islamicQuiz[questionNo].hint1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              findAnswer(item?.islamicQuiz, item?.islamicQuiz[questionNo].hint2)
            }
            style={{
              marginVertical: 5,
              backgroundColor:
                item?.islamicQuiz[questionNo].hint2 == userSelected
                  ? correctAnswerColor
                  : wrongAnswerColor,
              padding: 5,
              paddingLeft: 16,
              borderRadius: 76,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'HindSiliguri-Regular',
              }}>
              (খ) {item?.islamicQuiz[questionNo].hint2}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              findAnswer(item?.islamicQuiz, item?.islamicQuiz[questionNo].hint3)
            }
            style={{
              marginVertical: 5,
              backgroundColor:
                item?.islamicQuiz[questionNo].hint3 == userSelected
                  ? correctAnswerColor
                  : wrongAnswerColor,

              padding: 5,
              paddingLeft: 16,
              borderRadius: 76,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'HindSiliguri-Regular',
              }}>
              (গ) {item?.islamicQuiz[questionNo].hint3}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              findAnswer(item?.islamicQuiz, item?.islamicQuiz[questionNo].hint4)
            }
            style={{
              marginVertical: 5,
              backgroundColor:
                item?.islamicQuiz[questionNo].hint4 == userSelected
                  ? correctAnswerColor
                  : wrongAnswerColor,

              padding: 5,
              paddingLeft: 16,
              borderRadius: 76,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'HindSiliguri-Regular',
              }}>
              (ঘ) {item?.islamicQuiz[questionNo].hint4}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: HIND_SILIGURI.bold,
            color: COLORS.dark,
            borderBottomWidth: 2,
            borderBottomColor: COLORS.green,
            marginBottom: 15,
          }}>
          মোট: {item.islamicQuiz.length} টি।
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: HIND_SILIGURI.bold,
              color: COLORS.green,
            }}>
            সঠিক: {correctAnsCount} টি।
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: HIND_SILIGURI.bold,
              color: COLORS.red,
            }}>
            ভূল: {wrongAnsCount} টি।
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          paddingHorizontal: 30,
          // justifyContent: 'space-between',
          justifyContent: 'center',
        }}>
        {/* <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            questionNo > 0 ? setQuestionNo(questionNo - 1) : questionNo;
            setCorrectAnswerColor('grey');

            setCorrectAnswerColor(questionNo > 0 ? 'grey' : COLORS.green);
            setWrongAnswerColor(questionNo > 0 && 'grey');
            // questionNo > 0 && console.log('prev');
          }}
          style={{
            width: 100,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.green,
            borderRadius: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontFamily: 'HindSiliguri-SemiBold',
            }}>
            পূর্ববর্তী
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            questionNo < item?.islamicQuiz.length - 1
              ? setQuestionNo(questionNo + 1)
              : questionNo;
            questionNo < item?.islamicQuiz.length - 1 &&
              setCorrectAnswerColor('grey');
            setWrongAnswerColor(
              questionNo < item?.islamicQuiz.length - 1 && 'grey',
            );
          }}
          style={{
            width: 100,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.green,
            borderRadius: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontFamily: 'HindSiliguri-SemiBold',
            }}>
            পরবর্তী
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
