import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: metrics.basePadding * 2,
    justifyContent: "center",
    alignItems: "stretch"
  },
  iconsContainer: {
    flexDirection: "row",
    paddingTop: 20
  },
  formContainer: {
    alignItems: "stretch",
    flexDirection: "row",
    marginTop: metrics.baseMargin * 3,
    marginLeft: metrics.baseMargin
  },
  logo: {
    borderColor: colors.light,
    borderWidth: 5,
    width: 150,
    height: 150,
    borderRadius: 100
  },
  icon: {
    justifyContent: "flex-start",
    alignItems: "baseline",
    color: colors.light
  },
  input: {
    fontSize: 15,
    color: colors.light,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },
  text: {
    fontSize: 15,
    color: colors.light,
    fontWeight: "bold"
  },
  buttonPassword: {
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius * 4,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
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
