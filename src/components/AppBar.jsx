import react from "react";
import { Image, View, ViewPropTypes, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constant from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constant.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.primaryText,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        {" "}
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;
