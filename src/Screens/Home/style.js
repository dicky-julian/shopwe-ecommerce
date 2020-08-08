import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        backgroundColor: color.light
    },
    header: {
        width: Dimensions.get('window').width,
        paddingTop: '35%',
        padding: 20
    },
    headerText: {
        fontSize: 32,
        fontWeight: '700',
        color: color.light,
    }
});

export default style;