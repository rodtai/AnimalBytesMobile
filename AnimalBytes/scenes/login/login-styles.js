import {StyleSheet} from 'react-native';
import {vhToPx, vwToPx} from '../../helpers/dimensions.js'
export default StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    left_col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    right_col: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1.5,
        marginRight: 10,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'ubuntu-regular',
        fontWeight: "500",
        fontSize: vhToPx(3.5),
        lineHeight: 37,
        color: '#1B1D28',
    },  
    blurb: {
        fontFamily: 'lato-regular',
        fontWeight: "500",
        fontSize: vhToPx(1.8),
        lineHeight: 37,
        color: '#7B7F9E',
    },
    logo: {
        width: vwToPx(49),
        height: vhToPx(13),
    },
    chicken_img: {
        width: 155,
        height: vhToPx(34),
    },
    cow_img: {
        width: 130,
        height: vhToPx(34),
    },
    pig_img: {
        width: 146,
        height: vhToPx(27),
    },
    arrow_img: {
        width: 14,
        height: 5.25,
    },
    sign_in_button: {
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 5,
        width: 190,
        height: 44,
        backgroundColor: '#D1210F',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    sign_in_text: {
        fontFamily: 'lato-italic',
        fontSize: 16,
        color: '#FFFFFF'
    }
  });