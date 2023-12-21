/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Share from 'react-native-share';
import reactNativeFS from 'react-native-fs';

const NewWebView = () => {
  const uri = 'https://www.pexels.com/vi-vn/tim-kiem/videos/4k/';
  const [uriDL, setUriDl] = useState(['https://www.pexels.com/vi-vn/tim-kiem/videos/4k/']);
  // useEffect(() => {
  //   setInterval(() => {
  //     const d = new Date();
  //     console.log(d.getTime());
  //   }, 1000);
  // }, []);
  useEffect(() => {
    const x = `${reactNativeFS.DocumentDirectoryPath}/downloads`;
    console.log('⛔⛔⛔ ~ file: webview.js:26 ~ dirs: ⛳', x);

    ReactNativeBlobUtil.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      appendExt: 'mp4',
      path: `${reactNativeFS.DocumentDirectoryPath}/downloads`,
    })
      .fetch('GET', uriDL[0], {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        // sharexx(res.path());
      });
  }, [uriDL]);
  const sharexx = () => {
    const shareOptions = {
      title: 'Share via',
      message: 'some message',
      url: 'some share url',
      social: Share.Overlay,
      whatsAppNumber: '9199999999', // country code + phone number
      filename: 'test', // only for base64 file in Android
    };
    Share.shareSingle(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 20}}>
      <WebView
        source={{uri}}
        webviewDebugging
        onMessage={e => {
          console.log('==================>', e.nativeEvent);
        }}
        onLoadProgress={e => {
          console.log('==onLoadProgress================>', e.nativeEvent);
        }}
        onFileDownload={e => {
          setUriDl([e.nativeEvent.downloadUrl]);
        }}
      />
    </View>
  );
};

export default NewWebView;
