import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  searchBar: {
    width: Dimensions.get('window').width - 20,
    // height: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    paddingLeft: 15,
    backgroundColor: color.light,
    borderWidth: 1,
    borderColor: color.fade,
    borderRadius: 30,
    margin: 10
  },
  searchInput: {
    marginLeft: 5,
    fontSize: 16,
  },
  container: {
    minHeight: Dimensions.get('window').height - 60,
    backgroundColor: color.light,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
  },
  subheads: {
    paddingBottom: 20,
  },
  box: {
    width: 320,
    height: 130,
    backgroundColor: 'white',
    padding: 15,
  },
});

export default styles;
