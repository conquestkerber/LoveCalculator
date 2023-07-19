import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeartIcon from "./Heart";
import axios from "axios";

const ValentinesMatch = () => {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  // const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [dataInfo, setDataInfo] = useState({});
  const apiKey = "5ce1171e8cmsh08bc54db6697345p1f708fjsn96ee0024ee1b";

  /* https://love-calculator.p.rapidapi.com/getPercentage */

  const fetchData = async () => {
    try {
      const response = await axios({
        metgod: "GET",
        url: `https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${female}`,
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      });
      if (response.status == 200) {
        setDataInfo(response.data);
      }
      // alert(response);
    } catch (error) {
      // alert(error);
    }
  };

  const checkHandler = () => {
    setPressed(true);
    setMale("");
    setFemale("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Valentines Match</Text>
      </View>
      <TextInput
        placeholder="Male name"
        placeholderTextColor="white"
        value={male}
        onChangeText={(text) => setMale(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Female name"
        placeholderTextColor="white"
        value={female}
        onChangeText={(text) => setFemale(text)}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={checkHandler}>
        <Text style={styles.text}>Check It</Text>
      </Pressable>
      {pressed && (
        <View>
          <HeartIcon percent={dataInfo.percentage} />
          <Text style={styles.results}>
            {dataInfo.fname} + {dataInfo.sname}
          </Text>
          <Text style={styles.results}>{dataInfo.result}</Text>
        </View>
      )}
    </View>
  );
};

export default ValentinesMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F67280",
    height: 100,
    paddingTop: 30,
  },
  header: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    paddingLeft: 20,
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop: 20,
    color: "white",
  },
  // button: {
  //   margin: 50,
  // },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    // elevation: 3,
    backgroundColor: "brown",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  results: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
});
