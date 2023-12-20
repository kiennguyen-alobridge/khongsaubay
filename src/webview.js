/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const NewWebView = () => {
  const [uri, setUri] = useState('https://www.google.com');
  console.log('⛔⛔⛔ ~ file: webview.js:21 ~ uri: ⛳', uri);
  const [inputText, setInputText] = useState('https://www.google.com');
  const webviewRef = useRef<WebView>(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
        paddingVertical: 30,
      }}>
      <Text>WebView</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={inputText}
          onChangeText={text => setInputText(text)}
          style={{height: 50, flex: 1, backgroundColor: 'white'}}
          autoComplete="one-time-code"
        />
        <TouchableOpacity
          style={{backgroundColor: 'white', marginLeft: 20}}
          onPress={() => setUri(inputText)}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 20}}>
        <WebView
          source={{uri}}
          ref={webviewRef}
          webviewDebuggingEnabled
          cacheEnabled
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 20}}>
        <WebView
          source={{uri}}
          ref={webviewRef}
          incognito
          webviewDebuggingEnabled
          cacheEnabled
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 20}}>
        <WebView
          source={{uri}}
          ref={webviewRef}
          webviewDebuggingEnabled
          cacheEnabled
        />
      </View>
      <View style={{backgroundColor: 'white', marginTop: 20}}>
        <TouchableOpacity
          style={{backgroundColor: 'white', marginLeft: 20}}
          onPress={() => {
            console.log('123123213', webviewRef?.current);
            webviewRef?.current.goBack();
          }}>
          <Text>back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default NewWebView;
