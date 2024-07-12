// import React from 'react';
// import {Text} from 'ink';

import RoomComponent from './components/room.js';

export default function App() {
	return RoomComponent(() => {
		// exit
		process.exit();
	});
}
