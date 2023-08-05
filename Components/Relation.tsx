import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Node, Relation} from './FamilyNode';
import {useTheme} from '../Hooks';

interface RelationsProps {
  title: string;
  items: Relation[];
  onSelect: (nodeId: number) => void;
  onHover: (nodeId: number) => void;
  onClear: () => void;
}

export const Relations = memo(function Relations({
  title,
  items,
  onSelect,
  onHover,
  onClear,
}: RelationsProps) {
  const {Fonts} = useTheme();

  const selectHandler = useCallback(
    (id: number) => () => onSelect(id),
    [onSelect],
  );
  const hoverHandler = useCallback(
    (id: number) => () => onHover(id),
    [onHover],
  );
  const clearHandler = useCallback(() => onClear(), [onClear]);

  if (!items.length) return null;

  return (
    <View>
      <Text style={Fonts.textTinyBold}>{title}</Text>
      {items.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={selectHandler(item.id)}
          onPressIn={hoverHandler(item.id)}
          onPressOut={clearHandler}>
          <Text style={Fonts.textTiny}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});
