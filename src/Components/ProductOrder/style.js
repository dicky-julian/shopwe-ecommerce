import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.fade
    },
    productImage: {
        width: '30%',
        height: 0,
        paddingTop: '30%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    cardProduct: {
        width: '70%',
        height: '99%',
        padding: 10,
        backgroundColor: color.light,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    productTitle: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: '700',
        color: color.dark
    },
    productWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    darkText: {
        fontSize: 16,
        color: color.dark
    },
    fadeText: {
        fontSize: 16,
        color: color.default
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    counterText: {
        alignSelf: 'center',
        fontSize: 20,
        margin: 10,
        color: color.dark
    },
    counterButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: color.fade
    }
});

export default style;