import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "localhost" })
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}

// adb reverse tcp:9090 tcp:9090

// cd C:\Users\fajre\AppData\Local\Android\Sdk\platform-tools
