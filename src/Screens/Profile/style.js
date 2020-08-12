import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: color.light,
    height: Dimensions.get('window').height - 60
  },
  fadeText: {
    fontSize: 16,
    color: color.default,
  },
  darkText: {
    fontSize: 18,
    color: color.dark,
  },
  headText: {
    fontSize: 32,
    color: color.dark,
    fontWeight: '700'
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
  }
});

export default styles;
