// import BottomSheet, { TouchableOpacity } from '@gorhom/bottom-sheet'
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {useEffect} from 'react';
import {Alert, Platform, TextInput, TouchableOpacity} from 'react-native';
import {Linking} from 'react-native';
import {Text, View} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../Hooks/useApp';
import {useTheme} from '../../Hooks';
import useLoadingGlobal from '../../Hooks/useLoadingGlobal';
import {setAccessToken} from '../../Store/Authentication';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import {useHandleGetListMembersQuery} from '../../Services/family';
const UserProfileContainer = () => {
  const {Images, Fonts, Colors, MetricsSizes} = useTheme();
  const dispatch = useAppDispatch();
  //const { userName, fullName } = useAppSelector(state => state.authentication)
  const userInfo = useAppSelector(
    state => state.authentication.detailNguoiDung,
  );
  const bottomSheetRef: any = useRef();
  const [curr, setCurr] = useState(1);
  // console.log('storeVersion', storeVersion)
  // console.log('dviSstoreVersionhow', storeVersion)
  const loading = useLoadingGlobal();
  // useEffect(() => {
  //   loading.toogleLoading?.(propsgertCBdt.isLoading, 'cbdtDashboard')
  // }, [loading, propsgertCBdt.isLoading])
  // const { data, refetch } = useFetchUnitQuery(
  //   {
  //     param: {
  //       idDonVi: userInfo?.idDonVi,
  //       suDung: true,
  //       p: 5,
  //       userId: userInfo?.id,
  //     },
  //   },
  //   {},
  // )

  // useEffect(() => {
  //   if (data?.resultObj) {
  //     const tmp = data?.resultObj

  //     setDsDonVi(data?.resultObj)
  //   }
  // }, [data?.resultObj])

  // const navigation = useNavigation()
  // useEffect(() => {
  //   const getProfile = async () => {
  //     const profile = await getUserProfile()
  //     if (profile) {
  //       setUserProfile(profile.userName)
  //     }
  //   }
  //   getProfile()
  // }, [navigation])
  const onOpenSheet = useCallback(async () => {
    try {
      bottomSheetRef.current?.snapToIndex(0);
      setCurr(0);
    } catch (error) {
      throw error;
    }
  }, []);
  const onLogout = useCallback(async () => {
    try {
      Alert.alert(
        'Bạn có muốn đăng xuất?',
        '',
        [
          {
            text: 'Có',
            onPress: () => {
              //  hide()
              setTimeout(() => {
                dispatch(setAccessToken({jwtToken: ''}));
              }, 300);
            },
          },
          {
            text: 'Không',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      throw error;
    }
  }, [dispatch]);

  const {data, isFetching, isSuccess} = useHandleGetListMembersQuery({
    data: {
      id: 1,
    },
  });
  console.log(data);

  return (
    <>
      <Container w={'100%'}>
        <Header
          title="TÀI KHOẢN"
          rightButton={{icon: Images.logout, function: onLogout}}
        />
      </Container>
      <Container
        //ai="center"
        // flex={1}
        bg={Colors.white}
        ph={MetricsSizes.regular}
        pt={MetricsSizes.regular * 2}>
        <View style={[]}>
          <Text style={[styles.title]}>Thông tin người dùng</Text>
          <View style={[styles.infoRow]}>
            <Text style={[styles.titleTxt]}>Họ tên:</Text>
            <TextInput style={[styles.infoTxtName]}>Nguyễn Văn A</TextInput>
          </View>
          <View style={[styles.infoRow]}>
            <Text style={[styles.titleTxt]}>Username:</Text>
            <Text style={[styles.infoTxt]}>user1</Text>
          </View>
          <View style={[styles.infoRow]}>
            <Text style={[styles.titleTxt]}>Ngày tham gia</Text>
            <Text style={[styles.infoTxt]}>2023-07-07</Text>
          </View>
        </View>
      </Container>
      <Container>
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.textStyle}>Lưu</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};
export default UserProfileContainer;
