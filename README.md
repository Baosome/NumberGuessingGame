# Number Guessing Game (Expo)

This repository contains a small React Native app built with Expo.

**Quick Start — Run on Expo Go**

- Install dependencies:

```bash
npm install
```

- Start the development server:

```bash
npm start
# or
npx expo start
```

- Open on your phone with Expo Go:
  - Install the Expo Go app from the App Store / Google Play.
  - Ensure your computer and phone are on the same network.
  - Scan the QR code shown in the terminal or the browser DevTools.

You can also run on emulators/simulators with `npm run android` or `npm run ios`.

## Prerequisites

- Node.js and npm (install from https://nodejs.org/)
- Expo Go (mobile app) for testing on a device: https://expo.dev/client
- (Optional) Install Expo CLI globally if you prefer:

```bash
npm install -g expo-cli
```

## All project dependencies

This project already includes the required dependencies in `package.json`. To install everything at once, run `npm install` as shown above.

If you want to install the main dependencies manually, run:

```bash
npm install @expo/vector-icons @react-navigation/bottom-tabs @react-navigation/elements @react-navigation/native expo expo-constants expo-font expo-haptics expo-image expo-linear-gradient expo-linking expo-router expo-splash-screen expo-status-bar expo-symbols expo-system-ui expo-web-browser react react-dom react-native react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-web react-native-worklets
```

Dev dependencies (for development and linting):

```bash
npm install --save-dev @types/react typescript eslint eslint-config-expo
```

## Start & workflow tips

- Use `npm start` or `npx expo start` to open Expo DevTools in your browser.
- Press `a` to open the Android emulator, `i` to open the iOS simulator, or scan the QR code for Expo Go.
- If the QR code does not connect, confirm both devices are on the same Wi‑Fi and that your firewall allows local network connections.

## Where to edit

Start editing files in the `app/` directory. This project uses file-based routing provided by Expo Router.

If you ever need to regenerate a fresh starter, you can run:

```bash
npm run reset-project
```

## Learn more

See the official Expo docs for deeper guidance: https://docs.expo.dev/
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
