import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class CalcButton extends React.Component {
  static defaultProps = {
    onPress: function () {},
    title: "",
  };

  render() {
    var bc = this.props.backgroundColor;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#003D5B",
  },
  text: { fontSize: 30, fontWeight: "bold", color: "#E9F5DB" },
});
