import {Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

//Convert view height to pixels.
export function vhToPx(height) {
    return screenHeight * height / 100;
}

//Convert view width to pixels.
export function vwToPx(width) {
    return screenWidth * width / 100;
}