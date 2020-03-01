import React from 'react';
import styles from './animal_single-style.js';

// Components
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit'
import Header from '../../components/header/header.js';

// Constants and Helpers
import {CHART_CONFIG} from '../../helpers/constants.js';
import {getPercent} from '../../helpers/calculation.js';
import { vwToPx } from '../../helpers/dimensions.js';

export default function AnimalSingleScreen({route, navigation}){
    const {animal_data} = route.params;
    const pie_data = [
        {
          name: 'Angry',
          population: animal_data.probabilities.Angry,
          color: '#FF0000',
        },
        {
          name: 'Normal',
          population: animal_data.probabilities.Normal,
          color: '#00FF00',
        },
        {
          name: 'Upset',
          population: animal_data.probabilities.Upset,
          color: '#0000FF',
        },
    ];
    const upper = (lower) => lower.charAt(0).toUpperCase() + lower.substring(1);
    return (
        <View style={styles.container}>
            <Header header_title={upper(animal_data.animal) + ' ' + animal_data.key} navigation={navigation}/>
            <View style={styles.pie_chart_container}>
                <PieChart
                    data={pie_data}
                    width={vwToPx(99)}
                    paddingLeft={vwToPx(24)}
                    height={500}
                    chartConfig={CHART_CONFIG}
                    accessor="population"
                    backgroundColor="transparent"
                    hasLegend={false}
                />
            </View>
            <View>
                {
                    pie_data.map((v, i) => {
                        return (
                            <View key={i} style={ {flexDirection: 'row', alignItems: 'baseline'} }>
                                <Text style={ {color: v.color, fontSize: 27} }>• </Text>
                                <Text style={ {fontSize: 20} }>{`${v.name} (p=${getPercent(v.population)})`}</Text>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
}