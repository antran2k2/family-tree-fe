import React from 'react';
import calcTree from 'relatives-tree';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Connector from './Connector';
import {ExtNode, Node} from './FamilyNode';

interface Props {
  nodes: Node[];
  rootId: number;
  width: number;
  height: number;
  placeholders?: boolean;
  renderNode: (node: Node) => React.ReactNode;
}
const {width: width1, height: height1} = Dimensions.get('window');

export default React.memo<Props>(function FamilyTree(props) {
  const data = calcTree(props.nodes, {
    rootId: props.rootId,
    placeholders: props.placeholders,
  });

  const width = (data.canvas.width * props.width) / 2;
  const height = (data.canvas.height * props.height) / 2;

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          transform: [{scale: Math.min(width1 / width, height1 / height)}],
        },
      ]}>
      {data.connectors.map((connector, idx) => (
        <Connector
          key={idx}
          connector={connector}
          width={props.width / 2}
          height={props.height / 2}
        />
      ))}
      {data.nodes.map(props.renderNode)}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
