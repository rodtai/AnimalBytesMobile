import React from 'react';
import {View, Text} from 'react-native';
import styles from './table_row-style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TableRow(props) {
    return (
        <TouchableOpacity style={styles.row} onPress={props.onClick}>
            {
                props.data.map((v, i) => {
                    return (<Text style={styles.col} key={i}>{v}</Text>)
                })
            }
        </TouchableOpacity>
    );
}