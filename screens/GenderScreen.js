import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const GenderScreen = () => {
  const [gender, setGender] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleNextButtonPress = () => {
    navigation.navigate("-_____");
    setIsButtonEnabled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What is your gender?</Text>
      <Text style={styles.subheading}>Pick one:</Text>
      <View style={styles.genderContainer}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity onPress={() => handleGenderSelection("male")}>
            <Image style={styles.genderImage} source={require("./images/male.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGenderSelection("female")}>
            <Image style={styles.genderImage} source={require("./images/male.jpg")} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageWrapperBot}>
          <TouchableOpacity onPress={() => handleGenderSelection("other")}>
            <Image style={styles.genderImage} source={require("./images/other.jpg")} />
          </TouchableOpacity>
        </View>
      </View>
      {gender && (
        <Text style={styles.selectedGenderText}>Selected gender: {gender}</Text>
      )}
      <TouchableOpacity
        style={isButtonEnabled ? styles.nextButton : styles.disabledNextButton}
        onPress={handleNextButtonPress}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    padding: 20,
  },
  heading: {
    fontSize: 50,
    marginBottom: 50,
    textAlign: "left",
    marginRight: 50,
    color: "tan",
    padding: 0,
  },
  subheading:{
    fontSize:20,
    fontWeight: "500",
    color: '#333',
    textAlign: 'left',
    color:"tan",
  },
  genderContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  imageWrapperBot:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  genderImage: {
    width: 150,
    height: 150,
  },
  selectedGenderText: {
    fontSize: 18,
    marginTop: 20,
    color: "tan",
  },
  nextButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  disabledNextButton: {
    backgroundColor: "tan",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default GenderScreen;
