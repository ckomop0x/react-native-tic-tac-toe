import React from 'react';
import { BoardValue } from '../types';
import { Square, SquareProps } from './Square';
import {Column} from "./Column";
import {Row} from "./Row";

export type BoardProps = {
  boardValue: BoardValue;
  onSquarePress: (square: number) => void;
};

export function Board({ boardValue, onSquarePress }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: boardValue[square],
      onPress: () => onSquarePress(square),
    };
  };

  return (
    <Column gap={0}>
      <Row gap={0}>
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(3)} />
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
        <Square {...createProps(8)} />
      </Row>
    </Column>
  );
}
