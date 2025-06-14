import { useState } from 'react';
import type { BoardStatus, BoardValue, Player } from './types';

const createBoardValue = (): BoardValue => Array(9).fill(null);

function calculateWinner(boardValue: BoardValue): Player | null {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      boardValue[a] &&
      boardValue[a] === boardValue[b] &&
      boardValue[a] === boardValue[c]
    ) {
      return boardValue[a];
    }
  }

  return null;
}

function calculateIsFull(boardValue: BoardValue): boolean {
  return boardValue.every(square => square !== null);
}

function calculateTurn(step: number): Player {
  return step % 2 === 0 ? 'X' : 'O';
}

export type GameState = {
  boardValue: BoardValue;
  step: number;
};

const createInitialGameState = (): GameState => ({
  boardValue: createBoardValue(),
  step: 0,
});

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(createInitialGameState());

  const { boardValue, step } = gameState;

  const turn = calculateTurn(step);
  const winner = calculateWinner(boardValue);
  const isFull = calculateIsFull(boardValue);

  const boardStatus: BoardStatus = winner
    ? { type: 'winner', player: winner }
    : isFull
      ? { type: 'draw' }
      : { type: 'turn', player: turn };

  function handleSquarePress(square: number) {
    if (winner || isFull || gameState.boardValue[square]) return;

    const currentStep = gameState.step;
    const currentBoardValue = gameState.boardValue;

    const updatedBoardValue = [...currentBoardValue];
    updatedBoardValue[square] = calculateTurn(currentStep);

    setGameState({
      step: currentStep + 1,
      boardValue: updatedBoardValue,
    });
  }

  function handleReset() {
    setGameState(createInitialGameState());
  }

  return {
    boardValue,
    step,
    boardStatus,
    handleSquarePress,
    handleReset,
  };
}
