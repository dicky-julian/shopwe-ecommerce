import {StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: 400,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  modalsCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginBottom: 10,
  },
  modals: {
    width: 170,
  },
  detailCard: {
    marginBottom: 30,
  },
  desc: {
    textAlign: 'justify',
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default styles