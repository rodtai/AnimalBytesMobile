import React from 'react';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import styles from './header-style.js';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(props) {
    return (
        <View style={styles.header}>
            {
                props.navigation &&
                (<TouchableOpacity onPress={props.navigation && props.navigation.goBack}>
                    <Image style={styles.back} source={back} />
                </TouchableOpacity>)
            }
            <Image style={styles.logo} source={logo} />
            <Text style={styles.header_text}>{props.header_title}</Text>
        </View>
    );
}