import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SquareValue } from '../types';

export const useAvailableWidth = () => {
  const { width } = useWindowDimensions();
  return width - 100;
};

export type SquareProps = {
  value: SquareValue;
  onPress: () => void;
};

const squareStyles = StyleSheet.create({
  squareView: {
    backgroundColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontWeight: 'bold',
  },
});

export function Square({ value, onPress }: SquareProps) {
  const availableWidth = useAvailableWidth();
  const width = availableWidth / 3;
  const height = availableWidth / 3;
  const fontSize = width / 2;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[squareStyles.squareView, { width, height }]}>
        <Text style={[squareStyles.squareText, { fontSize }]}>
          {value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
