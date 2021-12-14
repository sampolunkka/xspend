//https://www.youtube.com/watch?v=kye4zEwDxgU

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalcButton, CalcDisplay } from "../components";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
    };
  }

  //takes in digit from buttono
  onDigitPress = (digit) => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <CalcDisplay display={this.state.display} />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            title="1"
            onPress={() => {
              this.onDigitPress("7");
            }}
          />
          <CalcButton title="2" />
          <CalcButton title="3" />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="4" />
          <CalcButton title="5" />
          <CalcButton title="6" />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="7" />
          <CalcButton title="8" />
          <CalcButton title="9" />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton title="," />
          <CalcButton title="0" />
          <CalcButton title=">" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#00798C" },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "3%",
    backgroundColor: "#1B9AAA",
  },
  buttonRow: { flexDirection: "row", justifyContent: "space-around" },
});
