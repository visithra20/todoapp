import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Task from './components/Task';
const App = () => {
  const [task, setTask] = useState();
  const [taskitems, setTaskitems] = useState([]);
  const handleAddTask = () => {
    setTaskitems([...taskitems, task]);
    setTask(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <View style={styles.tasksWrap}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <ScrollView>
          <View style={styles.items}>
            {taskitems?.map((item, index) => {
              return <Task key={index} text={item} />;
            })}
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder="write a task"
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          style={styles.round}
          onPress={() => {
            handleAddTask();
          }}>
          <Text style={styles.addwrap}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5B0F1',
  },
  tasksWrap: {
    // paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  round: {
    borderRadius: 60,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 30,
    marginLeft: 30,
    width: '100%',
    // marginBottom: 40,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    width: 250,
    borderWidth: 0.2,
  },
  addwrap: {
    width: 60,
    height: 60,
    padding: 22.4,
    backgroundColor: 'white',
    borderWidth: 0.2,
    marginHorizontal: 40,
  },
});
export default App;
