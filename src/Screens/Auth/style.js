import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height - 60,
        padding: 15,
        backgroundColor: color.light
    },

    containerLoading: {
        minHeight: Dimensions.get('window').height - 60,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center'
    },

    headline: {
        marginBottom: 80,
    },
    titleText: {
        marginTop: 20,
        marginBottom: 50,
        fontSize: 34,
        fontWeight: '700'
    },
    darkText: {
        fontSize: 18,
        color: color.dark,
    },
    forgotText: {
        marginTop: 10,
        marginBottom: 50,
        fontSize: 16,
        color: color.dark,
        textAlign: 'right',
    },
    button: {
        marginVertical: 10
    }
});

export default style;
