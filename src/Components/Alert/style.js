import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    alert: {
        width: Dimensions.get('window').width - 20,
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    alertText: {
        fontSize: 16,
        color: color.light,
        fontWeight: '700'
    },
    buttonSuccess: {
        backgroundColor: color.success
    },
    buttonFailed: {
        backgroundColor: color.primary
    }
});

export default style;