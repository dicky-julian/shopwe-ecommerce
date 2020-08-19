import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: color.light,
    height: Dimensions.get('window').height - 60,
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
    fontWeight: '700',
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
  //modal
  modalFade: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: color.dark,
    opacity: 0.6,
  },
  modalContainer: {
    width: Dimensions.get('window').width,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: color.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  scrollTit: {
    width: 60,
    height: 6,
    margin: 15,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: color.fade,
  },
  titleText: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '700',
    color: color.dark,
  },
  modalsCard: {
    margin: 15,
  }
});

export default styles;
