//https://www.youtube.com/watch?v=kye4zEwDxgU

import React from "react";
import { View, Text } from "react-native";
import { CalcButton } from "../components";

export default class CalculatorScreen extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <CalcButton title="1" color="white" backgroundColor="grey" />
      </View>
    );
  }
}
