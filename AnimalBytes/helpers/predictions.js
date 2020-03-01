import {BASE_URL} from './constants.js';

export async function fetchPredictions(key){
    try{
        let response = await fetch(BASE_URL + '/animal?key=' + key.toString());
        let responseJson = await response.json();
        console.log(responseJson);
    }
    catch (error) {
        console.log(error);
    }
}