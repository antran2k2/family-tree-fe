import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import {useTheme} from '../Hooks';
export interface Node {
  id: number;
  name: string;
  dob: string;
  dod: string;
  alive: boolean;
  details: string;
  gender: 'MALE' | 'FEMALE';
  parents: Relation[];
  children: Relation[];
  siblings: Relation[];
  spouses: Relation[];
}
export type ExtNode = Node & {
  top: number;
  left: number;
};
export interface Relation {
  id: number;
  type: string;
  name: string;
}

interface FamilyNodeProps {
  node: Node;
  isRoot: boolean;
  onClick: (id: number) => void;
  onSubClick: (id: number) => void;
  style?: any;
}

export const FamilyNode = React.memo(function FamilyNode({
  node,
  isRoot,
  onClick,
  onSubClick,
  style,
}: FamilyNodeProps) {
  const {Fonts} = useTheme();

  const clickHandler = useCallback(() => onClick(node.id), [node.id, onClick]);

  const dob = new Date(node.dob);
  const currentYear = new Date().getFullYear();
  const clickSubHandler = useCallback(
    () => onSubClick(node.id),
    [node.id, onSubClick],
  );
  return (
    // <View style={[styles.root, style, styles[node.gender]]}>
    <View>
      {/* {node.hasSubTree && (
        <TouchableOpacity onPress={clickSubHandler} style={styles.sub}>
          <Text>12321</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.add}> */}
      {/* <Button title="123"></Button> */}
      {/* </TouchableOpacity> */}
      <TouchableHighlight
        style={[
          styles.root,
          style,
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot,
        ]}
        activeOpacity={1}
        underlayColor={'gray'}
        onPress={clickHandler}>
        <>
          <Text style={Fonts.textRegularBold}>{node.name}</Text>
          {!node.alive ? (
            <Text style={Fonts.textTinyBold}>-(Đã mất)-</Text>
          ) : (
            <Text style={Fonts.textTinyBold}>
              Tuổi: {currentYear - dob.getFullYear()}
            </Text>
          )}
        </>
      </TouchableHighlight>
    </View>
  );
});

const styles = StyleSheet.create({
  // root: {
  //   position: 'absolute',
  // //   borderWidth: 10,
  // //   borderColor:"white",
  // //   display: 'flex',
  //   padding: 10,
  // //   backgroundColor:"red",
  //   borderRadius: 10
  // },
  root: {
    position: 'absolute',
    display: 'flex',
    padding: 16,
    alignItems: 'center',
    // justifyContent: "center",
    borderRadius: 10,
    // flex: 1,
  },
  inner: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(0, 0, 0, .2)',
    borderRadius: 10,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  MALE: {
    backgroundColor: '#a4ecff',
  },
  FEMALE: {
    backgroundColor: '#fdaed8',
  },
  isRoot: {
    borderColor: 'rgba(0, 0, 0, .4)',
  },
  isHover: {
    borderColor: 'rgba(0, 0, 0, .8)',
  },
  id: {
    fontSize: 14,
    //   lineHeight: 1,
    //   opacity: .5,
  },
  sub: {
    position: 'absolute',
    top: 6,
    right: 14,
    width: 50,
    height: 60,
    // border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: 4,
    backgroundColor: '#000',
    //   cursor: 'pointer',
  },
  add: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
