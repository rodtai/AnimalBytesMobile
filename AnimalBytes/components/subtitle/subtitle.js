import React from 'react';
import {Text} from 'react-native';
import styles from './subtitle-styles.js';

export default function Subtitle(props){
    return (
        <Text style={styles.gray_box_title}>{props.text}</Text>
    );
}