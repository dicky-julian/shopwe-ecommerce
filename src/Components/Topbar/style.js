import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: color.light
    },
    topbarContainer: {
        flexDirection: 'row',
    },
    barAction: {
        width: 20,
        margin: 20
    },
    titleText: {
        width: Dimensions.get('window').width - 120,
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        textAlign: 'center'
    }
});

export default style;