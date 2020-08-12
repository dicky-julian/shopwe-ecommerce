import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 30,
    backgroundColor: color.light,
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15
  },
  dataContainer: {
    width: '80%',
  },
  mediumText: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 26,
    color: color.dark
  },
  paymentContainer: {
    width: Dimensions.get('window').width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  paymentBrand: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 55,
    backgroundColor: color.light,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.fade
  },
  brandImage: {
    width: 50,
    height: 50
  },
  brandText: {
    marginLeft: 20,
    fontSize: 16,
    color: color.dark
  },
  brandIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    width: 25,
    height: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: color.fade
  },
  dotIndicator: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },
  text: {
    fontSize: 14,
    color: '#9B9B9B',
    lineHeight: 20,
  },
  darkText: {
    fontSize: 14,
    color: color.default,
  },
  fadeText: {
    fontSize: 16,
    color: color.dark,
    fontWeight: '700',
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
  box: {
    backgroundColor: color.light,
  },
});

export default style;