import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: color.light
    },
    topbarContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    barAction: {
        width: 20,
        margin: 15,
        marginTop: 20,
        marginBottom: 20
    },
    titleText: {
        width: Dimensions.get('window').width - 100,
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});

export default style;