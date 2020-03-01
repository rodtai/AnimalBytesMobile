import React, {useEffect} from 'react';
import styles from './profile-styles.js';
import {View, Text} from 'react-native';

// Import components
import Header from '../../components/header/header.js';
import Subtitle from '../../components/subtitle/subtitle.js';
import GrayCard from '../../components/gray_card/gray_card.js';

// Import animal images
import Cow from '../../assets/cowhead.png';
import Pig from '../../assets/pighead.png';
import Chicken from '../../assets/chickenhead.png';
import Question_Mark from '../../assets/question_mark.png'

import registerForPushNotificationsAsync from '../../helpers/notifications.js';

export default function ProfileScreen({ route, navigation }) {
    const goToAnimalGroup = (animal_name) => () => {
        navigation.navigate('AnimalGroup', {animal_name: animal_name});
    };
    const {user} = route.params;
    useEffect(() => {
        registerForPushNotificationsAsync(user.givenName);
    }, []);
    return (
        <View style={styles.container}>
            <Header header_title={'Profile'}/>
            <Subtitle text={'Your Profile'}/>
            <View style={styles.gray_box}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.user_data}>{user.givenName}</Text>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.user_data}>{user.familyName}</Text>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.user_data}>{user.email}</Text>
            </View>
            <Subtitle text={'Your Animals'}/>
            <View style={styles.rowgrid}>
                <View style={styles.colgrid}>
                    <GrayCard img_source={Cow} img_width={91} img_height={114} text={"Cow"} navigateFunc={goToAnimalGroup}/>
                    <GrayCard img_source={Pig} img_width={106} img_height={90} text={"Pig"} navigateFunc={goToAnimalGroup}/>
                </View>
                <View style={styles.colgrid}>
                    <GrayCard img_source={Chicken} img_width={80} img_height={90} text={"Chicken"} navigateFunc={goToAnimalGroup}/>
                    <GrayCard img_source={Question_Mark} img_width={50} img_height={75} text={"Coming Soon"}/>
                </View>
            </View>

        </View>
    );
}