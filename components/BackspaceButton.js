import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class BackspaceButton extends React.Component {
  static defaultProps = {
    onPress: function () {},
    title: "</x/",
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
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    //height: 30,
    borderRadius: 10,
    //backgroundColor: "#fb3640",
  },
  text: { fontSize: 35, fontWeight: "bold", color: "#fb3640" },
});
