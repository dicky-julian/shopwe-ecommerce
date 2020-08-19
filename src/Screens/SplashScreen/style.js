import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    // alignContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  image: {
    width: 70,
    height: 100,
    flex: 1,
    position: 'absolute',
  },
  text: {
    paddingTop: 130,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.light,
  },
});

export default style;
