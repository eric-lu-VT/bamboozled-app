import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../utils/Colors';

const Accordion = ({ 
  title,
  data 
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name={expanded ? 'minuscircleo' : 'pluscircleo'} size={30} color='white' />
      </TouchableOpacity>
      { 
        expanded &&
          <View style={styles.child}>
            <Text>{data}</Text>    
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
    textTransform: "uppercase"
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height:56,
    paddingLeft:25,
    paddingRight:18,
    alignItems: 'center',
    fontWeight: "bold",
    backgroundColor: Colors.primary.normal,
  },
  parentHr:{
    height:1,
    color: 'white',
    width:'100%'
  },
  child:{
    backgroundColor: 'white',
    padding:16,
  }
});

export default Accordion;
