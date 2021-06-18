import React from 'react';
import { Button, Text, View } from 'react-native';

function Padding(props) {
  return <View style={{ padding: 10 }}>{props.children}</View>;
}

export default function App() {
  onClickNoCatchSync = () => {
    console.log(new URL("https://example.com/").hostname);
  }

  onClickNoCatchAsync = async () => {
    console.log(new URL("https://example.com/").hostname);
  }

  onClickCatchSyncConsoleLog = () => {
    try {
      console.log(new URL("https://example.com/").hostname);
    } catch (e) {
      console.log(e);
    }
  }

  onClickCatchAsyncConsoleLog = async () => {
    try {
      console.log(new URL("https://example.com/").hostname);
    } catch (e) {
      console.log(e);
    }
  }

  onClickCatchSyncCustomLog = () => {
    try {
      console.log(new URL("https://example.com/").hostname);
    } catch (e) {
      console.log("Introspected error: " + this.getExceptionDetails(e));
    }
  }

  onClickCatchAsyncCustomLog = async () => {
    try {
      console.log(new URL("https://example.com/").hostname);
    } catch (e) {
      console.log("Introspected error: " + this.getExceptionDetails(e));
    }
  }

  getExceptionDetails = (e) => {
    let result = "== START ==\n\ntoString(): " + e + "\n\nstack: " + e.stack;
    result += "\n\nclass: " + e.constructor.name;
    result += "\n\nmessage: " + e.message;
    result += "\n\nname: " + e.name;
    result += "\n\nfileName: " + e.fileName;
    result += "\n\nlineNumber: " + e.lineNumber;
    result += "\n\ndescription: " + e.description;
    result += "\n\nproperties:\n";
    for (var prop in e) {
      result += "  [" + prop + "]: ";
      try {
        if (typeof(e[prop]) == "function") {
          result += "function(): ";
        } else {
          result += e[prop];
        }
      } catch (propError) {
        result += "_inaccessible_";
      }
      result += "\n";
    }
    result += "\n== END ==";
    return result;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello World</Text>
      <Padding><Button onPress={this.onClickNoCatchSync} title="onClick no-catch sync" /></Padding>
      <Padding><Button onPress={this.onClickNoCatchAsync} title="onClick no-catch async" /></Padding>
      <Padding><Button onPress={this.onClickCatchSyncConsoleLog} title="onClick catch sync console log" /></Padding>
      <Padding><Button onPress={this.onClickCatchAsyncConsoleLog} title="onClick catch async console log" /></Padding>
      <Padding><Button onPress={this.onClickCatchSyncCustomLog} title="onClick catch sync custom log" /></Padding>
      <Padding><Button onPress={this.onClickCatchAsyncCustomLog} title="onClick catch async custom log" /></Padding>
    </View>
  );
}
