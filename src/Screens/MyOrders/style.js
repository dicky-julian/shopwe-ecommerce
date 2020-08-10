import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  cardOrder: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: color.light,
    height: Dimensions.get('window').height,
  },
  headline: {
    paddingBottom: 20,
  },
  headText: {
    fontSize: 34,
    color: color.dark,
    fontWeight: '700',
    lineHeight: 38,
  },
  box: {
    width: 320,
    height: 130,
    backgroundColor: 'white',
    padding: 15,
  },
});

export default styles;
