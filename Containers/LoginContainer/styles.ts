import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#e0e0e0'
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginBottom: 120,
    marginTop: 50,
  },
  containerForm: {
    alignItems: 'center',
  },
  logo: {
    width: 107,
    height: 107,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
  buttonLoginContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  buttonLogin: {
    flex: 3,
    borderRadius: 50,
    paddingVertical: 5,
  },
  bntFaceId: {
    flex: 1,
    // width: 80,
    // height: 80,
    borderRadius: 50,
    paddingVertical: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
  input: {
    //  borderBottomWidth: 1,
    //borderBottomColor: 'rgba(255,255,255,0.5)',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 5,
    //  paddingLeft: 45,
    paddingRight: 22,
    margin: 15,
    // width: '80%',
  },
  inputPassword: {
    marginTop: 12,
    marginBottom: 30,
  },
  loginFingerprint: {
    textAlign: 'center',
    marginTop: 40,
  },
  txtIntro: {
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: 1.2,
  },
  txtVersion: {
    fontSize: 12,
    color: '#FFFFF',
  },
  txtBottom: {
    alignItems: 'center',
    marginBottom: 15,
    opacity: 0.8,
  },
  img_user: {
    marginRight: -25,
    // tintColor :''
    height: 24,
    width: 24,
    marginBottom: 5,
  },
});

export default styles;
