import react from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};
const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText align="center">StargazersCount</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center">ForksCount</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledText>
        <StyledText align="center">ReviewsCount</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.ratingAverage)}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
