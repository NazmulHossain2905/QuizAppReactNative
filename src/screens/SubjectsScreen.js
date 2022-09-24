import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../utils/colors';
import HIND_SILIGURI from '../utils/fonts';

const SubjectsScreen = ({navigation, route}) => {
  const item = route.params;

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
        data={item.allSubjects}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate(
                  item.quiz ? 'Quiz' : item.subject ? 'Sub' : 'QA',
                  item,
                )
              }
              style={{flex: 1}}>
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
                      {item.subjectNo}
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
                    {item.title}
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
                      মোট:{'- '}
                    </Text>
                    {item.total} টি প্রশ্ন ও উত্তর।
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
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

export default SubjectsScreen;
