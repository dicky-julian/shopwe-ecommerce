import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: color.light,
    height: Dimensions.get('window').height,
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
  headText: {
    fontSize: 34,
    color: color.dark,
    fontWeight: '700',
    lineHeight: 38,
  },
  headline: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#9B9B9B',
    lineHeight: 20,
  },
  box: {
    width: 320,
    height: 130,
    backgroundColor: 'white',
    padding: 15,
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
});

export default styles;
