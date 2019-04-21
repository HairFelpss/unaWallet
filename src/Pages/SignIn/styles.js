import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: metrics.basePadding * 2
  },
  logo: {
    width: 150,
    height: 220,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: metrics.baseMargin * 3
  },
  buttonDiv: {
    marginTop: metrics.baseMargin * 5
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
  },
  text: {
    textAlign: "center",
    marginTop: metrics.baseMargin * 2,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
    fontWeight: "bold"
  }
});

export default styles;
