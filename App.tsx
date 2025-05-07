import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as types from "./types";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import {Button} from "./components/Button";
import {Status} from "./components/Status";
import {Board} from "./components/Board";
import {useGameState} from "./AppState";

export default function App() {
  const {
    step,
    boardValue,
    boardStatus,
    handleSquarePress,
    handleReset,
  } = useGameState();

  return (
    <SafeAreaView style={styles.appRoot}>
      <View style={styles.viewRoot}>
        <Column gap={50}>
          <Button text="RESTART" disabled={step === 0} onPress={handleReset} />
          <Status boardStatus={boardStatus} />
          <Board
            boardValue={boardValue}
            onSquarePress={handleSquarePress}
          />
        </Column>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
    backgroundColor: '#1893f8',
  },
  viewRoot: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
  }
});
