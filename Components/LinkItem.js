
import React, { useRef, useEffect, useCallback }from 'react';
import {
  Alert, Button, Linking, StyleSheet, View, Text
} from 'react-native';

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const Link = ({link, children}) => {

  console.log('in link')
    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

      return <Button title={children} onPress={handlePress} />;
    };

    return(
      <View style={styles.container}>
        <OpenURLButton url={supportedURL}>BBC News</OpenURLButton>
        <OpenURLButton url={unsupportedURL}>Daily Mail</OpenURLButton>
      </View>
    )

}


const styles = StyleSheet.create({
  
});

export default Link;

