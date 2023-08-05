import React from 'react';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../Components/Container';
import {Colors} from '../../Theme/Variables';

const AddPersonContainer = () => {
  return (
    <>
      <Header title="Sửa thông tin "></Header>
      <Container pl={10} pr={10}>
        <Input label="Họ tên" placeholder="Nhập họ tên"></Input>
        <Text style={styles.labelname}>Giới tính</Text>
        <View style={styles.selectSex}>
          <Picker
            // selectedValue={updateData.gender}
            // onValueChange={handleGenderChange}
            style={styles.select}>
            <Picker.Item label="Nam" value="Nam" />
            <Picker.Item label="Nữ" value="Nữ" />
            <Picker.Item label="Khác" value="Khác" />
          </Picker>
        </View>
        <Text style={styles.labelname}>Tình trạng</Text>
        <View style={styles.selectSex}>
          <Picker
            // selectedValue={updateData.gender}
            // onValueChange={handleGenderChange}
            style={styles.select}>
            <Picker.Item label="Còn sống" value="Nam" />
            <Picker.Item label="Nữ" value="Nữ" />
            <Picker.Item label="Khác" value="Khác" />
          </Picker>
        </View>
        <Input label="Ngày sinh" placeholder="2000-07-07"></Input>
        <Input label="Mô tả" placeholder="Somethings"></Input>
        <Container
          // mv={MetricsSizes.tiny}
          flex={1}
          ai="flex-end"
          flexDr="column"
          jc="space-around">
          <Container flex={2}>
            <TouchableOpacity style={styles.themBtn}>
              <Text style={[{color: Colors.white}]}>Save</Text>
            </TouchableOpacity>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default AddPersonContainer;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarHandleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    marginHorizontal: 10,
  },
  avatar: {
    borderRadius: 50,
    width: 90,
    height: 90,
  },
  textChangeAvatar: {
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 40,
  },
  labelname: {
    marginVertical: 4,
    color: 'blue',
    fontSize: 14,
    fontWeight: '500',
  },
  selectSex: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 14,
    marginBottom: 14,
  },
  select: {
    height: 50,
    fontWeight: 'bold',
  },
  selectBirthdayContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 14,
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  buttonSelectBirthday: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSelectBirthday: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10,
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginRight: 0,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 14,
  },
  icon: {
    width: 16,
    height: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  themBtn: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
    height: 50,
    padding: 10,
    color: '#000000',
    backgroundColor: '#3E4095',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
