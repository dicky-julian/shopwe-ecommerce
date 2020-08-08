import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    actionBar: {
        width: Dimensions.get('window').width,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: color.light,
        borderBottomWidth: 1,
        borderBottomColor: color.fade
    },
    sortAction: {
        width: Dimensions.get('window').width * 10 / 100,
        alignItems: 'flex-end'
    },
    barAction: {
        width: Dimensions.get('window').width * 35 / 100 - 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    actionText: {
        marginLeft: 10,
        fontSize: 16
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: color.light,
        paddingLeft: 20,
        paddingBottom: 150
    },
});

export default style;