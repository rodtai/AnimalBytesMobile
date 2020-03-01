import React from 'react';
import {FlatList} from 'react-native';
import TableHeader from './table_header/table_header.js';
import TableRow from './table_row/table_row.js';
import styles from './table-styles.js';

export default function Table(props){
    return (
        <FlatList
            style={styles.table}
            ListHeaderComponent={<TableHeader data={props.headers}/>}
            data={props.data}
            renderItem={({item}) => <TableRow data={props.format(item)} onClick={props.onClick(item)} />}
        />
    );
}
