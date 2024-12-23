import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  const textInputChange = (text) => {
    setNewGoal(text);
  };

  function addNewGoal() {
    props.handleGoal(newGoal);
    setNewGoal("");
  }

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={textInputChange}
          value={newGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.cancelModal}
              color="#f31282"
            />
          </View>
          <View>
            <Button title="Add goal" onPress={addNewGoal} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#5e0acc",
    margin: 30,
  },
});

export default GoalInput;
