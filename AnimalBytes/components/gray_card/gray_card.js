import React from 'react';
import styles from './gray_card-styles.js';
import {TouchableOpacity, Image, Text} from 'react-native';

export default function GrayCard(props){
    return (
        <TouchableOpacity style={styles.gray_card_box} onPress={props.navigateFunc && props.navigateFunc(props.text)}>
            <Image 
                source={props.img_source} 
                style={
                    {
                        width: props.img_width,
                        height: props.img_height,
                    }
                } 
            />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}