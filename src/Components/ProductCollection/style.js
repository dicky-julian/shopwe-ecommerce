import { StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: color.light,
    },
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 32,
        fontWeight: '700',
        color: color.dark,
        textTransform: 'capitalize'
    },
    descriptionText: {
        fontSize: 16,
        color: color.default
    },
    actionText: {
        fontSize: 16,
        color: color.dark
    },
    collectionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -20,
        marginRight: -20,
        padding: 20,
        paddingTop: 0
    }
});

export default style;