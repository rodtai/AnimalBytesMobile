import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'space-around'
    },
    col: {
        marginTop: 3,
        marginBottom: 3,
        fontFamily: 'poppins-regular',
        fontSize: 11,
        color: '#334D6E',
        opacity: 0.5,
    },
});