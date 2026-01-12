# Number Guessing Game (Expo)

This repository contains a responsive mobile game built with React Native and Expo. The user picks a number, and the app tries to guess it with "Lower" or "Greater" hints.

## Project Overview (STAR components)

- **Situation:** Required a standalone mobile application to assist with understanding React Native's component lifecycle and layout systems across different device sizes.
- **Task:** Create a logically complete "Number Guessing Game" involving three main stages: Game Start, Active Game (guessing loop), and Game Over (reporting results), ensuring smooth transitions and state retention.
- **Action:** Developed the solution using **React Native** and **Expo**, utilizing modular component architecture. Implemented responsive designs using `Flexbox` and `Dimensions` API, and managed complex game state using React Hooks (`useState`, `useEffect`). Enhanced the visual appeal with `expo-linear-gradient` and custom fonts.
- **Result:** Produced a robust, interactive app that efficiently handles user inputs and game logic, providing immediate feedback and a seamless user experience on both Android and iOS platforms.

## Technologies Used

### Core
- **Language:** JavaScript
- **Framework:** React Native
- **Platform:** Expo

### Libraries & Tools
- **Expo Router:** For navigation and structure.
- **Expo Linear Gradient:** For the main background styling.
- **@expo/vector-icons:** For button and UI icons.
- **React Native Safe Area Context:** ensuring UI elements respect device boundaries.
- **Expo Font:** Integration of custom Google Fonts.
- **Expo Status Bar:** Control over the app status bar style.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [Expo Go](https://expo.dev/client) app on your mobile device (or an Android/iOS emulator).

### How to Run

1. **Clone or Pull the repository**
   Open your terminal and run:
   ```bash
   git clone <your-repo-url>
   cd NumberGuessingGame
   ```
   *(Or just navigate to the downloaded project folder)*

2. **Install Dependencies**
   Install the necessary packages listed in `package.json`:
   ```bash
   npm install
   ```

3. **Start the Application**
   Launch the Expo development server:
   ```bash
   npx expo start
   ```

4. **Launch on Device**
   - **Physical Device:** Scan the QR code displayed in the terminal using the **Expo Go** app.
   - **Android Emulator:** Press `a` in the terminal window.
   - **iOS Simulator:** Press `i` in the terminal window.
