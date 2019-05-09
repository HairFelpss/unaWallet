import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingLeft: metrics.basePadding * 2,
    paddingRight: metrics.basePadding * 2,
    justifyContent: 'space-between',
    alignItems: "center"
  },
  logoContainer: {
    paddingTop: metrics.basePadding * 2
  },
  logo: {
    borderColor: colors.light,
    borderWidth: 5,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textLogo: {
    fontSize: 15,
    color: colors.light,
    textAlign: 'center',
    fontWeight: "bold",
    paddingTop: metrics.basePadding
  },
  unaCoinText: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold"
  },
  text: {
    fontSize: 15,
    color: colors.light,
    textAlign: 'center',
    fontWeight: "bold"
  },
  iconsContainer: {
    flexDirection: "row",
    paddingTop: 20
  },
  icon: {
    padding: metrics.basePadding,
    color: colors.light
  },
});

export default styles;
