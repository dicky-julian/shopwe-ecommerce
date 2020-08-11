import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../Assets/Styles';

const style = StyleSheet.create({
  container: {
    padding: 15,
    width: Dimensions.get('window').width,
    backgroundColor: color.light,
  },
  titleText: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 34,
    fontWeight: '700',
  },
  forgotText: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16,
    color: color.dark,
    textAlign: 'right',
  },
  textinput: {
    marginTop: 20,
    marginBottom: 50,
  },
});

export default style;
