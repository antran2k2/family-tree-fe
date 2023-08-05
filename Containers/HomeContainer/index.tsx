import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
// import FamilyTree from './components/FamilyTree';
// import {FamilyNode} from './components/FamilyNode';
import Header from '../../Components/Header';
import {Touchable} from '../../Components/Touchable';
import Card from '../../Components/Card';
import useTheme from '../../Hooks/useTheme';
import Container from '../../Components/Container';
import {useNavigation} from '@react-navigation/native';
import {
  useHandleGetListFamilyQuery,
  useHandleAddFamilyMutation,
} from '../../Services/family';
// import NodeDetail from './components/NodeDetail';
import {navigate} from '../../Navigators/utils';
import useLoadingGlobal from '../../Hooks/useLoadingGlobal';
import {Family} from '../../Services/family/family';
import Input from '../../Components/Input';
function HomeContainer(): JSX.Element {
  const {MetricsSizes, Fonts, Images, Colors, Gutters, Common} = useTheme();
  const [listFamily, setListFamily] = useState<Family[]>([]);
  const navigation = useNavigation();
  const loading = useLoadingGlobal();
  const [modalVisible, setModalVisible] = useState(false);

  const {data, isFetching, isSuccess, refetch} = useHandleGetListFamilyQuery({
    data: {},
  });
  const [addFamily, {isLoading}] = useHandleAddFamilyMutation({});
  const onShowDetail = useCallback(
    (item: any) => {
      navigate('Tree', {item});
    },
    [navigation],
  );
  const [familyName, setFamilyName] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    if (isSuccess) {
      setListFamily(data);
    }
  }, [isSuccess]);
  useEffect(() => {
    refetch();
  }, []);
  const renderItem = useCallback(
    ({item, index}: {item: any; index: any}) => {
      // if (index == 0) {
      //   console.log('renderItem', item)
      // }
      return (
        <Touchable
          key={index}
          mh={MetricsSizes.tiny}
          mb={MetricsSizes.regular}
          bg={'white'}
          onPress={() => onShowDetail(item)}>
          <View>
            <Card>
              <Text style={[Fonts.textSmallBold, {color: Colors.note}]}>
                {item.name}
              </Text>
              <Text style={[Fonts.textSmallBold, {color: Colors.note}]}>
                Địa chỉ: {item.address}
              </Text>
              <Container>
                <Text style={[Fonts.textTiny]}>
                  Số thành viên : {item.members}
                </Text>
                {/* <Text style={[Fonts.textTiny]}>Đơn vị : {item.tenDonVi}</Text> */}
              </Container>
            </Card>
          </View>
        </Touchable>
      );
    },
    [
      Colors.note,
      Fonts.textSmallBold,
      Fonts.textTiny,
      MetricsSizes.regular,
      MetricsSizes.tiny,
    ],
  );

  useEffect(() => {
    loading.toogleLoading?.(isFetching);
  }, [loading, isFetching]);

  const isValidForm = (): boolean => {
    if (familyName.trim() === '') {
      Alert.alert('Chưa nhập tên');
      return false;
    } else if (address.trim() === '') {
      Alert.alert('Chưa nhập địa chỉ');
      return false;
    }
    return true;
  };
  const handleAddFamily = () => {
    if (isValidForm()) {
      addFamily({
        data: {
          familyName: familyName,
          address: address,
        },
      })
        .unwrap()
        .then(item => {
          setListFamily([...listFamily, item]);
          setModalVisible(false);
        })
        .catch(e => {
          Alert.alert('Có lỗi xảy ra!!');
        });
    }
  };
  return (
    <>
      <Header title="Gia phả" noBack></Header>
      <Container flex={1} pt={MetricsSizes.tiny}>
        <Container
          // mv={MetricsSizes.tiny}
          flex={1}
          ai="flex-end"
          flexDr="column"
          jc="space-around">
          <Container flex={2}>
            <TouchableOpacity
              style={styles.themBtn}
              onPress={() => setModalVisible(true)}>
              <Text style={[{color: Colors.white}]}>Thêm mới</Text>
            </TouchableOpacity>
          </Container>
        </Container>
        <Container flex={8}>
          <ScrollView>
            {listFamily?.map((item: any, index: any) => {
              return renderItem({item, index});
            })}
          </ScrollView>
        </Container>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Thêm mới gia phả</Text>

                <Input
                  label="Tên gia phả:"
                  placeholder="Nhập tên"
                  value={familyName}
                  onChangeText={value => setFamilyName(value)}
                />
                <Input
                  label="Địa chỉ:"
                  placeholder="Nhập địa chỉ"
                  value={address}
                  onChangeText={value => setAddress(value)}
                />

                <Container flexDr="row" jc="space-around">
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleAddFamily}>
                    <Text style={styles.textStyle}>Thêm</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Đóng</Text>
                  </Pressable>
                </Container>
              </View>
            </View>
          </Modal>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    // borderRadius: 4,
    // margin: 5,
    // height: 35,
    // padding: 5,
  },
  themBtn: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
    height: 35,
    color: '#000000',
    backgroundColor: '#3E4095',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    // width: 70,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: 650,
    // height: 300,
    // width: '100%',
    // backgroundColor: 'gray',
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeContainer;
