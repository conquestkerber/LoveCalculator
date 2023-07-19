import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ValentinesMatch from "./components/ValentinesMatch";

export default function App() {
  // alert(process.env.REACT_APP_API_KEY);
  // alert(process.env.REACT_APP_PROBA);
  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      <ValentinesMatch />
      <StatusBar style="light" />
      {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    /*   backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", */
  },
});
