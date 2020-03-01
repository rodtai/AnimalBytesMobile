import React from 'react';
import {View, Text} from 'react-native';
import styles from './table_header-styles.js';

export default function TableHeader(props){
    return (
        <View style={styles.row}>
        {
            props.data.map((v, i) => {
                return (<Text style={styles.col} key={i}>{v}</Text>)
            })
        }
    </View>
    );
}