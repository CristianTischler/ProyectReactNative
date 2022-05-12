import react from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../theme.js";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={styles.header}>
    <View style={styles.ImgView}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={styles.info}>
      <StyledText fontWeight="bold">{fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.lenguage}>Lenguage: {language}</StyledText>
    </View>
  </View>
);
const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 4,
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    marginVertical: 4,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4, //cuando en un texto no te toma el borderRadius hay que sumarle el overflow hidden
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 2,
  },
  info: {
    flex: 1,
  },
  ImgView: {
    paddingRight: 10,
  },
});
export default RepositoryItem;
