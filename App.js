import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trần Công Minh - PH19127</Text>
      <Text style={styles.text}>Địa chỉ: Hà Nội</Text>
      <Text style={styles.text}>Email: minhtcph19127@fpt.edu.vn</Text>
      <Text style={styles.text}>SDT: 0333888888</Text>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",

  }
});
