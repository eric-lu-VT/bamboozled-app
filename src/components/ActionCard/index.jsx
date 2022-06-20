import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import DoubleImg from '../../assets/double.jpg';
import FreshStartImg from '../../assets/fresh_start.jpg';
import JackpotImg from '../../assets/jackpot.jpg';
import MyBadImg from '../../assets/my_bad.jpg';
import ReverseImg from '../../assets/reverse.jpg';
import ReviveImg from '../../assets/revive.jpg';
import SkipImg from '../../assets/skip.jpg';
import UpDownImg from '../../assets/up_down.jpg'

const ActionCard = ({
  name,
  isSelected,
}) => {
  return (
    <View>
      {
        name === 'double' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(DoubleImg).uri}}
        />
      }
      {
        name === 'fresh_start' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(FreshStartImg).uri}}
        />
      }
      {
        name === 'jackpot' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(JackpotImg).uri}}
        />
      }
      {
        name === 'my_bad' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(MyBadImg).uri}}
        />
      }
      {
        name === 'reverse' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(ReverseImg).uri}}
        />
      }
      {
        name === 'revive' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(ReviveImg).uri}}
        />
      }
      {
        name === 'skip' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(SkipImg).uri}}
        />
      }
      {
        name === 'up_down' &&
        <Image
          style={styles.actionCardImg}
          source={{uri: Image.resolveAssetSource(UpDownImg).uri}}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  actionCardImg: {
    width: 175,
    height: 105,
    margin: 5
  }
});

export default ActionCard;
