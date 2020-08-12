import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  cardOrder: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: color.light,
    height: Dimensions.get('window').height,
    // minHeight: Dimensions.get('window').height - 85,
  },
  headline: {
    paddingBottom: 20,
  },
  fullContainer: {
    minHeight: Dimensions.get('window').height - 85,
    flex: 1,
    padding: 15,
    backgroundColor: color.light,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: color.dark,
    marginBottom: 5,
  },
  fadeText: {
    fontSize: 16,
    lineHeight: 26,
    color: color.default,
    marginBottom: 5,
  },
  darkText: {
    fontSize: 16,
    lineHeight: 26,
    color: color.dark,
    marginBottom: 5,
  },
  successText: {
    fontSize: 16,
    color: color.success,
  },
  headText: {
    fontSize: 34,
    color: color.dark,
    fontWeight: '700',
    lineHeight: 38,
  },
  box: {
    width: 320,
    minHeight: Dimensions.get('window').height - 85,
    flex: 1,
    marginBottom: 50,
    // height: 130,
    // backgroundColor: 'white',
  },
  detail: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  order: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },
  item: {
    width: 150,
  },
  status: {
    color: '#2AA952',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textContainer: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  paymentContainer: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default styles;
