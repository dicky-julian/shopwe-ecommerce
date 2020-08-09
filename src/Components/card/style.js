import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 30,
        backgroundColor: color.light,
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 15
    },
    dataContainer: {
        width: '80%',
    },
    mediumText: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 26,
        color: color.dark
    }
});

export default style;