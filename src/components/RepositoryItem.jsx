import react from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText font="subheading" fontWeight="bold">
      FullName: {props.fullName}
    </StyledText>
    <StyledText>Description: {props.description}</StyledText>
    <StyledText>Lenguage: {props.language}</StyledText>
    <StyledText>StargazersCount: {props.stargazersCount}</StyledText>
    <StyledText>ForksCount: {props.forksCount}</StyledText>
    <StyledText>ReviewsCount: {props.reviewCount}</StyledText>
    <StyledText>Rating: {props.ratingAverage}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default RepositoryItem;
