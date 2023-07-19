import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const HeartIcon = ({ percent }) => {
  const [color, setColor] = useState("white");

  // Update color based on percentage
  React.useEffect(() => {
    if (percent >= 0 && percent <= 100) {
      const redValue = Math.round(255 * (percent / 100));
      setColor(`rgb(${redValue}, 0, 0)`);
    }
  }, [percent]);

  return (
    /*  <View style={styles.heartContainer}>
      <Text style={[styles.heart, { color: color }]}>&#10084;</Text>
      <Text style={styles.percentText}>{percent}%</Text>
    </View> */
    <View style={styles.heartContainer}>
      <Text style={[styles.heart, { color: color }]}>&#10084;</Text>
      <View style={styles.overlay}>
        <Text style={styles.percentText}>{percent}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    fontSize: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  percentText: {
    marginTop: 4,
    fontSize: 40,
    color: "white",
  },
});

export default HeartIcon;
