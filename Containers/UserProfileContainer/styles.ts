import {StyleSheet} from 'react-native';
import {height} from 'react-native-size-scaling';

const styles = StyleSheet.create({
  title: {
    color: '#015478',
    fontSize: 18,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    // marginLeft: 20,
    marginTop: 10,
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  titleTxt: {
    flex: 2.5,
    fontSize: 14,
  },
  infoTxt: {
    // height: 45,
    flex: 1.5,
    fontSize: 14,
    padding: 5,
    // height: 50,
    // backgroundColor: 'yellow',
  },
  infoTxtName: {
    // height: 45,
    flex: 1.5,
    fontSize: 14,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // height: 50,
    // backgroundColor: 'yellow',
  },
  dropdownView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoUnitArea: {
    marginTop: 10,
    paddingTop: 10,
  },
  searchIcon: {
    paddingLeft: 10,
    //marginLeft: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    //backgroundColor: 'yellow',
    //height: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  updateBtn: {
    marginTop: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 60,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
