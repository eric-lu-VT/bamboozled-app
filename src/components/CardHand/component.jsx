import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import ActionCard from '../ActionCard';
import styles from './styles';

const CardHand = ({
  curStage,
  beforeActionCards,
  afterActionCards,
  curCardSelected,
  changeCurCardSelected,
}) => {
  return (
    <View style={styles.container}>
      {
        curStage === 'before-roll-stage' &&
          <FlatList
            data={beforeActionCards}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View>
                  {
                    (index === curCardSelected) ? 
                      <TouchableOpacity onPress={() => changeCurCardSelected('')}>
                        <ActionCard 
                          name={item} isSelected={index === curCardSelected}/>
                      </TouchableOpacity>
                    : 
                      <TouchableOpacity onPress={() => changeCurCardSelected(index)}>
                        <ActionCard 
                          name={item} isSelected={index === curCardSelected}/>
                      </TouchableOpacity>
                  }
                </View>
              )
            }}
            numColumns={beforeActionCards.length}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
      }
      {
        <FlatList
          data={afterActionCards}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <View>
                {
                  (index === curCardSelected) ? 
                    <TouchableOpacity onPress={() => changeCurCardSelected('')}>
                      <ActionCard 
                        name={item} isSelected={index === curCardSelected}/>
                    </TouchableOpacity>
                  : 
                    <TouchableOpacity onPress={() => changeCurCardSelected(index)}>
                      <ActionCard 
                        name={item} isSelected={index === curCardSelected}/>
                    </TouchableOpacity>
                }
              </View>
            )
          }}
          numColumns={afterActionCards.length}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default CardHand;
