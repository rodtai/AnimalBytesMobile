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

export default function AnimalGroupScreen({route, navigation}){
    const headers = [
        'ID',
        'Mood',
        'Probability',
        'Recent Activity'
    ]

    const data = [
        {
            key: 1,
            animal: "cow",
            ourprediction: {
                mood: "Upset",
                probability: 0.9855110809727051,
            },
            probabilities: {
                Angry: 0.42725679738108013,
                Normal: 0.5872321216462146,
                Upset: 0.9855110809727051,
            },
            time: "Sun Mar  1 03:24:12 2020",
        },
    ];

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
    
    const {animal_name} = route.params;
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