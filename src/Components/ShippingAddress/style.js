import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    color: '#DB3022',
    lineHeight: 20,
  },
  box: {
    width: 320,
    height: 100,
    backgroundColor: 'white',
    padding: 15,
  },
  detail: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginBottom: 8,
  },
  item: {
    width: 240,
  },
  addressCard: {
    width: 240,
  },
});

export default styles;
