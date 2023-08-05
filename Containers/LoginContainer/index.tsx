import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import React from 'react';
import {
  Alert,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '../../Hooks/useApp';
import useLoadingGlobal from '../../Hooks/useLoadingGlobal';
import {navigate} from '../../Navigators/utils';
import {useAuthenticateMutation} from '../../Services/authentication';
import {useUseGetProfileMutation} from '../../Services/profile';
import {setAccessToken} from '../../Store/Authentication';
import styles from './styles';
import useTheme from '../../Hooks/useTheme';

const LoginContainer = () => {
  const {Common, Gutters, Layout, Images, Colors} = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const loading = useLoadingGlobal();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [authenticate, {data, isError, isSuccess, isLoading}] =
    useAuthenticateMutation({});
  const [getProfile, propGetProfile] = useUseGetProfileMutation({
    fixedCacheKey: 'getProfile',
  });

  useEffect(() => {
    loading.toogleLoading?.(isLoading, 'login');
  }, [loading, isLoading]);

  const isValidForm = (): boolean => {
    if (username.trim() === '') {
      Alert.alert('Chưa nhập tên đăng nhập');
      return false;
    } else if (password.trim() === '') {
      Alert.alert('Chưa nhập password');
      return false;
    }
    return true;
  };
  const onSubmit = async () => {
    if (isValidForm()) {
      await authenticate({
        username: username,
        password: password,
      })
        .unwrap()
        .then(({token}) => {
          dispatch(setAccessToken({jwtToken: token}));
          navigate('Main', {});
        })
        .catch(err => {
          Alert.alert('Đăng nhập không thành công!');
        });
    }
  };

  const validPassword = (pwd: string) => {
    setPassword(pwd);
  };

  return (
    <View style={[{flex: 1, backgroundColor: 'yellow'}]}>
      <KeyboardAwareScrollView contentContainerStyle={[{flexGrow: 1}]}>
        <ImageBackground
          source={Images.loginBg1}
          style={[{width: '100%', height: '100%'}]}>
          <View style={[{flex: 8}]}>
            <View style={[{flex: 1}]}>
              <View style={styles.containerLogo}>
                <Image
                  style={styles.logo}
                  source={Images.icTree}
                  resizeMode="contain"
                />
                <Text style={styles.txtTitle}>Ứng dụng gia phả</Text>
              </View>
            </View>
            <View style={[{flex: 4}]}>
              <View
                style={[
                  Gutters.regularLMargin,
                  Layout.rowHCenter,
                  Gutters.regularLPadding,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    borderWidth: 1,
                    borderColor: Colors.borderInput,
                    borderRadius: 8,
                    backgroundColor: Colors.bgInfo,
                    margin: 10,
                    //width: '100%',
                  },
                ]}>
                <FontAwesomeIcon icon={faUser} color={Colors.primary} />
                <TextInput
                  style={[styles.input, {color: Colors.placeHolder}]}
                  placeholder={'Username'}
                  //keyboardType="default"
                  value={username}
                  onChangeText={value => setUsername(value)}
                  onSubmitEditing={onSubmit}
                  //ref={fieldRef}
                  placeholderTextColor={Colors.placeHolder}
                />
              </View>
              <View
                style={[
                  Gutters.regularLMargin,
                  Layout.rowHCenter,
                  Gutters.regularLPadding,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    borderWidth: 1,
                    borderColor: Colors.borderInput,
                    borderRadius: 8,
                    backgroundColor: Colors.bgInfo,
                    margin: 10,
                    //     width: '100%',
                  },
                ]}>
                {/* <Image source={Images.icKey} style={styles.img_user} resizeMode='contain' /> */}
                <FontAwesomeIcon icon={faLock} color={Colors.primary} />
                <TextInput
                  //  style={[Common.]}
                  style={[styles.input, {color: Colors.placeHolder}, {flex: 8}]}
                  placeholder={'Password'}
                  keyboardType="default"
                  value={password}
                  onChangeText={pwd => validPassword(pwd.trim())}
                  onSubmitEditing={onSubmit}
                  //c  ref={fieldRef}
                  secureTextEntry={secure}
                  placeholderTextColor={Colors.placeHolder}
                />

                <TouchableOpacity
                  style={[{flex: 1}]}
                  onPress={() => setSecure(!secure)}>
                  <FontAwesomeIcon
                    icon={secure ? faEye : faEyeSlash}
                    color={Colors.primary}
                    size={20}
                    // style={{ marginLeft: -20 }}
                  />
                </TouchableOpacity>
              </View>
              {/* </Item> */}

              <View style={styles.buttonLoginContainer}>
                <TouchableOpacity
                  onPress={onSubmit}
                  style={[
                    Common.button.rounded,
                    {backgroundColor: Colors.primary},
                    Gutters.tinyTMargin,
                  ]}>
                  <Text style={[{color: Colors.white}]}>
                    <>Đăng nhập</>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default LoginContainer;
