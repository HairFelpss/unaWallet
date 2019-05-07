import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: metrics.basePadding * 2,
    paddingTop: metrics.basePadding * 8,
    justifyContent: 'flex-start',
    alignItems: "stretch"
  },
  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold"
  },
  formContainer: {
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    paddingTop: metrics.basePadding * 2,
    paddingBottom: metrics.basePadding * 2
  },
  input: {
    fontSize: 15,
    color: colors.light,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },
  text: {
    textAlign: "center",
    marginTop: metrics.baseMargin * 2,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
    fontWeight: "bold"
  },
  success: {
    color: colors.success,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
  }
});

export default styles;