import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - 30,
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 16,
        textTransform: 'uppercase'
    },
});

export default style;