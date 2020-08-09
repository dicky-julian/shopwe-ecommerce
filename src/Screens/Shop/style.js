import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    actionBar: {
        width: Dimensions.get('window').width,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: color.light,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
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
    modalFade: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: color.dark,
        opacity: 0.6
    },
    modalContainer: {
        width: Dimensions.get('window').width,
        paddingBottom: 30,
        position: 'absolute',
        bottom: 0,
        backgroundColor: color.light,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    scrollTit: {
        width: 60,
        height: 6,
        margin: 15,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: color.fade
    },
    titleText: {
        alignSelf: 'center',
        marginBottom: 30,
        fontSize: 20,
        fontWeight: '700',
        color: color.dark
    },
    listContainer: {
        padding: 20
    },
    listText: {
        fontSize: 16,
        color: color.dark,
    },
    filterContainer: {
        minHeight: Dimensions.get('window').height - 85,
        backgroundColor: color.light
    },
    titleText: {
        margin: 20,
        fontSize: 20,
        fontWeight: '700',
        color: color.dark
    },
    filterCard: {
        width: Dimensions.get('window').width,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: color.light,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)'
    },
    colorWrapper: {
        padding: 3,
        borderRadius: 39,
        borderWidth: 1
    },
    colorPicker: {
        width: 35,
        height: 35,
        borderRadius: 35
    },
    sizePicker: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1
    },
    categoryPicker: {
        width: Dimensions.get('window').width * 33.3/100 - 20,
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
        borderWidth: 1
    },
    bottomBar: {
        width: Dimensions.get('window').width,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        backgroundColor: color.light,
        elevation: 15
    },
    button: {
        width: Dimensions.get('window').width * 45/100 - 10,
        alignItems: 'center',
        padding: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: color.dark
    },
});

export default style;