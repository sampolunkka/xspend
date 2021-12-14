//https://www.youtube.com/watch?v=kye4zEwDxgU

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalcButton, CalcDisplay } from "../components";

require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
    };

    //Init calculator
    this.oc = global.swisscalc.lib.operationsCache;
    this.calc = new global.swisscalc.calc.calculator();
  }

  //takes in digit from buttono
  onDigitPress = (digit) => {
    this.calc.addDigit(digit);
    this.setState({ display: this.calc.getMainDisplay() });
  };

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
              this.onDigitPress("1");
            }}
          />
          <CalcButton
            title="2"
            onPress={() => {
              this.onDigitPress("2");
            }}
          />
          <CalcButton
            title="3"
            onPress={() => {
              this.onDigitPress("3");
            }}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            title="4"
            onPress={() => {
              this.onDigitPress("4");
            }}
          />
          <CalcButton
            title="5"
            onPress={() => {
              this.onDigitPress("5");
            }}
          />
          <CalcButton
            title="6"
            onPress={() => {
              this.onDigitPress("6");
            }}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            title="7"
            onPress={() => {
              this.onDigitPress("7");
            }}
          />
          <CalcButton
            title="8"
            onPress={() => {
              this.onDigitPress("8");
            }}
          />
          <CalcButton
            title="9"
            onPress={() => {
              this.onDigitPress("9");
            }}
          />
        </View>
        <View style={styles.buttonRow}>
          <CalcButton
            title="."
            onPress={() => {
              this.onDigitPress(".");
            }}
          />
          <CalcButton
            title="0"
            onPress={() => {
              this.onDigitPress("0");
            }}
          />
          <CalcButton
            title=">"
            onPress={() => {
              this.onDigitPress("");
            }}
          />
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
