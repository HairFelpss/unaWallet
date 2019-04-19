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
  iconsContainer: {
    flexDirection: "row",
    paddingTop: 20
  },
  logo: {
    borderColor: colors.light,
    borderWidth: 5,
    width: 150,
    height: 150,
    borderRadius: 100
  },
  icon: {
    padding: metrics.basePadding * 2,
    color: colors.light
  },
  unaCoinText: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold"
  },
  text: {
    fontSize: 15,
    color: colors.light,
    fontWeight: "bold"
  }
});

export default styles;
