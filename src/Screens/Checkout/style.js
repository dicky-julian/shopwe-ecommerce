import {StyleSheet} from 'react-native';
import {color} from '../../Assets/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  subheads: {
    marginBottom: 20,
  },
  amountStyle: {
    height: 60,
  },
  amountCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginBottom: 10,
  },
  amountItems: {
    width: 170,
    height: 20,
  },
  shipaddress: {
    height: 130,
  },
  paymentCard: {
    width: 320,
    height: 70,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  image: {
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  card: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    margin: 10,
  },
  itemImage: {
    width: 100,
  },
  itemName: {
    width: 150,
    marginTop: 10,
  },
  itemButton: {
    width: 80,
  },
  text: {
    fontSize: 14,
    color: '#9B9B9B',

    // fontWeight: 'bold',
  },
});

export default styles