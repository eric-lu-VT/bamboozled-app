# Bamboozled App

A functional implementation of the dice bluffing game "Bamboozled", to be played live and with multiplayer support on mobile devices.

## Impressions

## Tech Stack
- [Expo Go](https://expo.dev/client)
- [React Native](https://reactnative.dev/) 
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [axios](https://github.com/axios/axios)
- [React Router](https://reactrouter.com/)
- [Babel](https://babeljs.io/)

## Directory Structure
    .
    ├── ...         
    ├── src
    |   └── assets             # static photos, icons, etc.
    │   └── components         # reusable components across several screens
    │   └── containers         # individual pages
    │   └── hocs               # contains React higher-order components
    │   └── navigation         # contains navigation related React components
    │   └── store              # Redux store and setup
    |     └── actionCreators   # actions (http & socket.io)
    |     └── middleware       # middleware (configure socket.io)
    |     └── reducers         # reducers
    |     └── requests         # backend server API calls (only http)
    │   └── utils              # utility folder containing helper files
    ├── app.config.js          # configure app meta-properties
    ├── App.js                 # starting point of Application
    ├── babel.config.js        # JavaScript backwards compatibility setup
    ├── package.json           # yarn config
    └── ...

## Local Setup
### Dev Environment
1. `yarn global add expo-cli` if you don't already have expo.
2. clone repo and install dependencies with `yarn install` 
3. Set up `.env` variables
   a. Add the file `.env` in the root directory.
   b. Set `BACKEND_URL` to `[Your IPV4 address]:9090`. (Your IPV4 address can be found by running `-ipconfig` in the command terminal.)
5. Download the app "Expo Go" on your mobile device and create a corresponding account, if you don't already have it.
6. `yarn start` and scan the QR code on your mobile device to launch the development environment.

### Debugging
1. Download [react-native-debugger](https://github.com/jhen0409/react-native-debugger/releases) release
2. Run `.exe` file
3. Hook to port 19000

## Known Issues

## Roadmap

## Acknowledgements
Bamboozled is the intellectual property of Blue Wasatch Games. This program is NOT endorsed nor sponsored in any way by Blue Wasatch Games. All used properties of Blue Wasatch Games (such as names, audio, graphics, etc.) in this software are not intended to maliciously infringe trademark rights. All other trademarks and assets are property of their respective owners. This is a community project and this is available for others to use according to the GPL-3.0 license, without charge.
