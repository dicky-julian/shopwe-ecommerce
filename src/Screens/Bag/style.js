import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height - 90,
        backgroundColor: color.light,
        padding: 15
    },
    titleText: {
        marginBottom: 10,
        fontSize: 32,
        fontWeight: '700',
        color: color.dark,
        textTransform: 'capitalize'
    },
    subTitleText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '700',
        color: color.dark
    },
    bottomBar: {
        width: Dimensions.get('window').width,
        padding: 15,
        paddingTop: 20,
        paddingBottom: 20,
        position: 'absolute',
        bottom: 49,
        backgroundColor: color.light,
        elevation: 15
    },
    button: {
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: color.primary
    },
    buttonText: {
        fontSize: 16,
        color: color.light
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    fullContainer: {
        minHeight: Dimensions.get('window').height - 25,
        backgroundColor: color.light,
        padding: 15
    },
    darkText: {
        fontSize: 16,
        color: color.dark
    },
    fadeText: {
        fontSize: 16,
        color: color.default
    },
    searchBar: {
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
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
});

export default style;