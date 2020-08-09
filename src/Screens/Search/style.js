import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    searchBar: {
        width: Dimensions.get('window').width - 80,
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        paddingLeft: 15,
        backgroundColor: color.light,
        borderWidth: 1,
        borderColor: color.fade,
        borderRadius: 30
    },
    searchInput: {
        marginLeft: 5,
        fontSize: 16
    },
    container: {
        minHeight: Dimensions.get('window').height - 60,
        backgroundColor: color.light
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700',
        color: color.dark,
        textTransform: 'capitalize'
    },
    labelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    label: {
        marginTop: 5,
        marginRight: 5,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.primary
    },
    labelText: {
        color: color.primary,
        fontSize: 12
    }
});

export default style;