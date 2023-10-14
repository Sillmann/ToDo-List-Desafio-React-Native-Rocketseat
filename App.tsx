import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Desafio01</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    color: '#808080',
  }
});