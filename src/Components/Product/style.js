import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        backgroundColor: color.light,
    },
    productImage: {
        width: '100%',
        height: 200
    },
    productLabel: {
        width: 40,
        margin: 10,
        padding: 5,
        borderRadius: 20
    },
    labelText: {
        alignSelf: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        color: color.light
    },
    ratingContainer: {
        flexDirection: 'row'
    },
    rating: {
        marginTop: 10,
        marginBottom: 3,
        marginRight: 2
    },
    brandText: {
        marginBottom: 3,
        fontSize: 16,
        color: color.default
    },
    nameText: {
        marginBottom: 3,
        fontSize: 20,
        fontWeight: '700',
        color: color.dark
    },
    priceText: {
        fontSize: 16,
        color: color.dark
    }
});

export default style;