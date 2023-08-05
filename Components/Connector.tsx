import React from 'react';
import {Connector as ConnectorType} from 'relatives-tree/lib/types';
import {View} from 'react-native';

interface ConnectorProps {
  connector: ConnectorType;
  width: number;
  height: number;
}

const Connector: React.FC<ConnectorProps> = ({connector, width, height}) => {
  const [x1, y1, x2, y2] = connector;

  return (
    <View
      style={{
        position: 'absolute',
        width: Math.max(1, (x2 - x1) * width + 1),
        height: Math.max(1, (y2 - y1) * height + 1),
        backgroundColor: `#999`,
        transform: [{translateX: x1 * width}, {translateY: y1 * height}],
        // pointerEvents: 'none',
      }}
    />
  );
};

export default React.memo(Connector);
