//https://www.youtube.com/watch?v=ql4J6SpLXZA

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native-web";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          //</View>value ={}
          //onChangeTextt => {text = > }
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          //</View>value ={}
          //onChangeTextt => {text = > }
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onpress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onpress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
