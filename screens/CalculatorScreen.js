import React from "react";
import { View, Text } from "react-native";
import { CalcButton } from "../components";

export default class CalculatorScreen extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <CalcButton title="1" color="white" backgroundColor="blue" />
      </View>
    );
  }
}
