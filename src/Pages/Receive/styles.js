import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingLeft: metrics.basePadding * 2,
    paddingRight: metrics.basePadding * 2,
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 15,
    color: colors.light,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: colors.tertiary,
    borderRadius: metrics.baseRadius * 4,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 15,
    color: colors.light,
    fontWeight: "bold"
  }
});

export default styles;
