import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  DetailStyle: {
    margin: 20,
  },
  actionText: {
    marginLeft: 10,
    fontSize: 16,
    marginRight: 70,
  },
  barAction: {
    width: (Dimensions.get('window').width * 35) / 100 - 20,
    flexDirection: 'row',
    borderWidth: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.light,
    height: 40,
    borderRadius: 5,
  },
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
  listText: {
    fontSize: 16,
    color: color.dark,
  },
  listContainer: {
    padding: 20,
    width: (Dimensions.get('window').width * 33) / 100 - 20,
    margin: 10,
    borderRadius: 7,
    borderWidth: 0.5,
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
    // margin: 10,
    flexWrap: 'wrap',
  },
  modals: {
    width: (Dimensions.get('window').width * 30) / 100 - 20,
  },
  detailCard: {
    marginBottom: 30,
    marginTop: 20,
  },
  descText: {
    textAlign: 'justify',
  },
  button: {
    margin: 10,
  },
  footerText: {
    margin: 20,
    fontSize: 20,
    color: color.dark,
  },
});

export default styles;
