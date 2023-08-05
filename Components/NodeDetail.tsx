import {
  Button,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Relations} from './Relation';
import {Node} from './FamilyNode';
import {useTheme} from '../Hooks';
import Container from './Container';
import {navigate} from '../Navigators/utils';

interface NodeDetailProp {
  node: Node;
  // setSelectId: Function;
  onSelect: (nodeId: number | undefined) => void;
  onHover: (nodeId: number) => void;
  onClear: () => void;
  onAdd: () => any;
}

const NodeDetail: React.FC<NodeDetailProp> = props => {
  const {Fonts} = useTheme();

  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.modalView}>
        {/* Nội dung của ScrollView */}
        <Container flex={9}>
          <Container jc="flex-start">
            <Text style={Fonts.textTinyBold}>Họ tên: </Text>
            <Text style={Fonts.textTiny}>{props.node.name} </Text>
            {!props.node.alive && <Text style={Fonts.textTiny}> (Đã mất)</Text>}
          </Container>
          <Container jc="flex-start" flexDr="row" style={{flexWrap: 'wrap'}}>
            <Text style={Fonts.textTinyBold}>Giới tính: </Text>
            <Text style={Fonts.textTiny}> {props.node.gender} </Text>
          </Container>
          <Container jc="flex-start" flexDr="row" style={{flexWrap: 'wrap'}}>
            <Text style={Fonts.textTinyBold}>Ngày sinh: </Text>
            <Text style={Fonts.textTiny}> {props.node.dob} </Text>
          </Container>
          {!props.node.alive && (
            <Container jc="flex-start" flexDr="row" style={{flexWrap: 'wrap'}}>
              <Text style={Fonts.textTinyBold}>Ngày mất: </Text>
              <Text style={Fonts.textTiny}> {props.node.dod} </Text>
            </Container>
          )}

          <Container jc="flex-start" pt={20}>
            <Relations {...props} title="Bố mẹ" items={props.node.parents} />
            <Relations {...props} title="Con" items={props.node.children} />
            <Relations
              {...props}
              title="Anh chị em"
              items={props.node.siblings}
            />
            <Relations {...props} title="Vợ chồng" items={props.node.spouses} />
          </Container>
          <Container jc="flex-start" pt={10}>
            <Text style={Fonts.textTinyBold}>Mô tả: </Text>
            <Text style={Fonts.textTiny}>{props.node.details} </Text>
          </Container>
          <Container flexDr="column" jc="space-around" bottom={0}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                navigate('AddPerson', {});
              }}>
              <Text style={styles.textStyle}>Thêm con</Text>
            </TouchableOpacity>

            {props.node.spouses.length == 0 && (
              <TouchableOpacity style={[styles.button, styles.buttonOpen]}>
                <Text style={styles.textStyle}>Thêm vợ/chồng</Text>
              </TouchableOpacity>
            )}
          </Container>
        </Container>

        <Container flex={1} flexDr="row" jc="space-around">
          <TouchableOpacity style={[styles.button, styles.buttonEdit]}>
            <Text style={styles.textStyle}>Sửa</Text>
          </TouchableOpacity>
          {props.node.children.length == 0 && (
            <TouchableOpacity style={[styles.button, styles.buttonDel]}>
              <Text style={styles.textStyle}>Xoá</Text>
            </TouchableOpacity>
          )}
        </Container>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          top: 20,
          right: 50,
        }}>
        <Button title="X" onPress={() => props.onSelect(undefined)} />
      </View>
    </View>
  );
};

export default NodeDetail;

const styles = StyleSheet.create({
  centeredView: {
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
    marginTop: 10,
    backgroundColor: 'blue',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonDel: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  buttonEdit: {
    marginTop: 10,
    backgroundColor: 'green',
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
