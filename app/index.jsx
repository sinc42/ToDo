import { Text, View, StyleSheet } from "react-native";

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Text>ToDo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Homescreen;
