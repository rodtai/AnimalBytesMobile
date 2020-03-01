import React from 'react';
// Google Sign-In imports
import * as Google from 'expo-google-app-auth';
import {GOOGLE_API_KEY_Android, GOOGLE_API_KEY_iOS} from '../../secret.js';

// RN Elements and Styles
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './login-styles.js';

// Images
import logo from '../../assets/logo.png';
import chicken_img from '../../assets/chicken.png';
import cow_img from '../../assets/cow.png';
import pig_img from '../../assets/pig.png';
import arrow_img from '../../assets/arrow.png';

export default function LoginScreen({route, navigation}) {
    async function signIn() {
        try {
          const { type, accessToken, user } = await Google.logInAsync({
            androidClientId: GOOGLE_API_KEY_Android,
            iosClientId: GOOGLE_API_KEY_iOS,
            scopes: ["profile", "email"]
          });
          if (type === "success") {
            console.log(user);
            navigation.navigate('Profile', { user: user });
          } else {
            console.log("cancelled")
          }
        } catch (e) {
          console.log("error", e)
        }
    };

    return (
      <View style={styles.container}>
        <View style={styles.left_col}>
            <Image style={styles.chicken_img} source={chicken_img} />
            <Image style={styles.cow_img} source={cow_img} />  
            <Image style={styles.pig_img} source={pig_img} />    
        </View>
        <View style={styles.right_col}>
            <Image style={styles.logo} source={logo} />     
            <Text style={styles.title}>AnimalBytes</Text>
            <Text style={styles.blurb}>
                We help you understand your animals better! 
                Look at the current mood of animals and 
                check the probabilities of actions.
            </Text>
            <Text style={styles.blurb}>
                Join For Free.
            </Text>
            <TouchableOpacity
                style={styles.sign_in_button}
                onPress={signIn}    
            >
                <Text style={styles.sign_in_text}>
                    Sign In
                </Text>
                <Image style={styles.arrow_img} source={arrow_img}></Image>
            </TouchableOpacity>

        </View>

      </View>
    );
  }