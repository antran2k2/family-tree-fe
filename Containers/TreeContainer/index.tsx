import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
// import FamilyTree from './components/FamilyTree';
// import {FamilyNode} from './components/FamilyNode';
import FamilyTree from '../../Components/FamilyTree';
import {ExtNode, FamilyNode, Node} from '../../Components/FamilyNode';
import NodeDetail from '../../Components/NodeDetail';
import Header from '../../Components/Header';
import {useRoute} from '@react-navigation/native';
import {useTheme} from '../../Hooks';
import Container from '../../Components/Container';
import {
  useHandleGetListMembersQuery,
  useHandleDeleteFamilyMutation,
} from '../../Services/family';
import useLoadingGlobal from '../../Hooks/useLoadingGlobal';
// import NodeDetail from './components/NodeDetail';
import sample from './data.json';
import {navigate, navigateAndSimpleReset} from '../../Navigators/utils';

const NODE_WIDTH = 400;
const NODE_HEIGHT = 500;

function TreeContainer(): JSX.Element {
  const {MetricsSizes, Fonts, Images, Colors} = useTheme();

  const route = useRoute<any>();
  const {item} = route.params;

  const initState: Node[] = [
    {
      id: 1,
      name: 'An',
      gender: 'MALE',
      dob: '2002-02-02',
      alive: true,
      parents: [],
      siblings: [
        {
          id: 2,
          name: 'Minh',
          type: 'blood',
        },
      ],
      spouses: [],
      children: [],
    },
    {
      id: 2,
      name: 'Minh',
      gender: 'MALE',
      alive: true,
      dob: '2003-09-09',
      parents: [
        {
          id: 1,
          name: 'An',
          type: 'blood',
        },
      ],
      siblings: [],
      spouses: [],
      children: [],
    },
  ];
  const loading = useLoadingGlobal();

  const [nodes, setNodes] = useState<Node[]>(sample);
  const [rootId, setRootId] = useState<number>(1);
  const [deleteFamily] = useHandleDeleteFamilyMutation();
  const {data, isFetching, isSuccess} = useHandleGetListMembersQuery({
    data: {
      id: item.id,
    },
  });
  const [nameInput, setNameInput] = useState('');
  useEffect(() => {
    loading.toogleLoading?.(isFetching, 'tree');
  }, [loading, isFetching]);

  useEffect(() => {
    if (data) {
      setRootId(data.at(0)?.id);
      setNodes(data);
    }
  }, [isSuccess]);

  const [modalVisible, setModalVisible] = useState(false);
  // const [nodes, setNodes] = useState(SOURCES[source]);
  const firstNodeId = useMemo(() => nodes.at(0)?.id, [nodes]);

  const [selectId, setSelectId] = useState<number>();
  const [hoverId, setHoverId] = useState<number>();

  const selected = useMemo(
    () => nodes.find((item: any) => item.id === selectId),
    [nodes, selectId],
  );

  const handleAddChild = () => {
    setModalVisible(true);
  };
  const handleDeleteFamily = () => {
    Alert.alert(
      'Bạn có muốn xoá cây phả hệ này?',
      '',
      [
        {
          text: 'Có',
          onPress: () => {
            //  hide()
            setTimeout(() => {
              deleteFamily({data: {id: item.id}});
              navigateAndSimpleReset('Main');
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
  };

  const renderTree = useCallback(() => {
    return (
      <FamilyTree
        nodes={nodes}
        rootId={rootId || 0}
        width={NODE_WIDTH}
        height={NODE_HEIGHT}
        renderNode={(node: ExtNode) => (
          <FamilyNode
            key={node.id}
            node={node}
            isRoot={node.id === rootId}
            onClick={setSelectId}
            onSubClick={setRootId}
            style={{
              width: NODE_WIDTH / 2,
              height: NODE_HEIGHT / 2,
              transform: [
                {translateX: node.left * (NODE_WIDTH / 2) + NODE_WIDTH / 4},
                {
                  translateY: node.top * (NODE_HEIGHT / 2) + NODE_HEIGHT / 4,
                },
              ],
            }}
          />
        )}
      />
    );
  }, [nodes]);
  return (
    <>
      <Header
        title={item.name}
        rightButton={{
          icon: Images.delete,
          function: handleDeleteFamily,
        }}></Header>
      {selected && (
        // <Container pt={MetricsSizes.tiny} overflow="hidden">
        <NodeDetail
          node={selected}
          onSelect={setSelectId}
          onHover={setHoverId}
          onClear={() => setHoverId(undefined)}
          onAdd={handleAddChild}
        />
      )}
      <Container flex={1} pt={MetricsSizes.tiny} overflow="hidden">
        <ReactNativeZoomableView
          zoomEnabled={true}
          maxZoom={3}
          minZoom={0.5}
          zoomStep={0.5}
          style={styles.container}>
          {/* <View style={styles.container}> */}
          {renderTree()}
          {/* </View> */}
        </ReactNativeZoomableView>

        <View style={styles.centeredView}></View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    backgroundColor: '#F194FF',
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

export default TreeContainer;
