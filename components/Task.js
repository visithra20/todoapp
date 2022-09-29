import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Task = props => {
  //const [taskitems, setTaskitems] = useState([]);
  // const deletetask = index => {
  //   setTaskitems([...taskitems.splice(index, 1)]);
  // };
  return (
    <View style={styles.item}>
      <View style={styles.item}>
        <TouchableOpacity style={styles.square} />
        <Text style={styles.itemText}> {props.text} </Text>
      </View>
      {/* <View style={styles.buttn}>
        <Button title="delete" />
        <Button title="edit" onPress={deletetask} />
      </View> */}

      <View style={styles.circular} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E2D6F1',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttn: {
    border: 'purple',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'purple',
    opacity: 0.3,
    marginRight: 30,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'purple',
    borderRadius: 5,
    borderWidth: 2,
    opacity: 0.6,
  },
  itemText: {
    maxWidth: '80%',
  },
});
export default Task;
