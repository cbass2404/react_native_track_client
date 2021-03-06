## Track Creation App

---

An app utilizing MongoDB, Express.js, React Native, Node.js.

The goal of the app is to give the ability to an authorized user to record a route as they move around and store it to retrace their footsteps, recreate their trail, or simply log their day.

_Note: The server setup is stored seperately, go to the following address to set it up:_
https://github.com/cbass2404/track_express_server

## Setup

---

1. Navigate to the directory you want the app stored in and run the following command in your terminal:

```
$ git clone https://github.com/cbass2404/react_native_track_client
```

2. CD into the directory and run the following to install dependecies:

```
$ npm install
```

3. Start the app server by running the following command after it finishes installing:

```
$ npm start
```

4. In project root directory run the following command to create a virtual local storage for expo app:

```
$ react-native link @react-native-async-storage/async-storage
$ npm start --reset-cache
```

5. To install and track locations run the following command:

```
$ npx expo-cli install expo-location
```

6. In your terminal run the following command to reset permissions for testing:

```
$adb shell pm reset-permissions
```
