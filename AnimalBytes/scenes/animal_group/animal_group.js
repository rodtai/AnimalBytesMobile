import React from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';

//Import styles
import styles from './animal_group-style.js';

//Import components
import Header from '../../components/header/header.js';
import Subtitle from '../../components/subtitle/subtitle.js';
import Table from '../../components/table/table.js';

// Import Helpers
import { getDate } from '../../helpers/date_parse.js';
import { getPercent } from '../../helpers/calculation.js';
import { generateRandomData } from '../../helpers/random.js';

export default function AnimalGroupScreen({route, navigation}){
    const headers = [
        'ID',
        'Mood',
        'Probability',
        'Recent Acitvity'
    ];

    const {animal_name} = route.params;

    const data = generateRandomData(animal_name);

    const formatAnimalRow = (item) => {
        let prob = getPercent(item.ourprediction.probability);
        let datetime = getDate(item.time);
        return [
            item.key, 
            item.ourprediction.mood, 
            prob,
            datetime
        ];
    };

    const whenRowClicked = (item) => () => {
        console.log(item);
        navigation.navigate('AnimalSingle', {animal_data: item});
    }
    
    return (
        <View style={styles.container}>
            <Header navigation={navigation} header_title={animal_name}/>
            <Subtitle text={`Your ${animal_name}s`}/>
            <Table 
                headers={headers}
                data={data} 
                format={formatAnimalRow}
                onClick={whenRowClicked}
            />
        </View>
    );
}