import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class CalcButton extends React.Component {
  static defaultProps = {
    onPress: function () {},
    title: "",
    color: "white",
    backgroundColor: "black",
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
