import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    text: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Christian Labutap 2nd Year BSIT</Text>
    </View>
  );
}
