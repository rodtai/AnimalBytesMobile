import {StyleSheet} from 'react-native';
import {vhToPx, vwToPx} from '../../helpers/dimensions.js'
export default StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    gray_box: {
        padding: 20,
        width: vwToPx(90),
        height: vhToPx(27),
        backgroundColor: '#F7F7F7',
        borderRadius: 12,
    },
    label: {
        padding: 1,
        fontFamily: 'lato-regular',
        fontSize: 12,
        // letterSpacing: '0.06em',
        color: '#3A4276',
    },
    user_data: {
        padding: 1,
        fontFamily: 'lato-regular',
        fontSize: 24,
        color: '#000000',
    },
    rowgrid: {
        flex: 2,
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    colgrid: {
        flex: 2,
        flexDirection: 'column',
        alignContent: 'space-between',
    }
});