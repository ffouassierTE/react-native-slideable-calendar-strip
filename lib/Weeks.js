import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { scale } from "react-native-size-matters";

const width = Dimensions.get('window').width;
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const WEEK_en = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEK_fr = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];

export default ({ isChinese, weekStartsOn }) => {
  const week_localized = isChinese ? WEEK : WEEK_fr;
  const weekStartsOnMinnor = weekStartsOn % 7;
  const weekTranformed = [
    ...week_localized.slice(weekStartsOnMinnor),
    ...week_localized.slice(0, weekStartsOnMinnor),
  ];
  return (
    <View style={{
      width,
      // height: scale(30),
      flexDirection: 'row',
    }}>
      {weekTranformed.map(day =>
        <View style={{
          // flex: 1,
          width: '100%',
          // height: '100%',
          paddingTop: scale(8),
          paddingBottom: scale(5),
          alignItems: 'center',
          justifyContent: 'center',
        }} key={day}>
          <Text style={{
            color: '#494a4b',
            fontSize: scale(12),
          }}>{day}</Text>
        </View>
      )}
    </View>
  );
}