import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignContent: 'space-around',
    padding: 15,
    backgroundColor: color.light,
  },
  darkText: {
    fontSize: 16,
    color: color.default,
  },
  fadeText: {
    fontSize: 18,
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
    margin: 15,
  },
  cardImage: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  cardText: {
    marginLeft: 20,
  },
  list: {
    height: (Dimensions.get('window').height * 10) / 100,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  cardIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },
});

export default styles;
