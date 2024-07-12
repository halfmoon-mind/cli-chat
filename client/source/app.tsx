import {useState} from 'react';
import RoomScreen from './screens/room.js';
import ChatScreen from './screens/chat.js';
import React from 'react';

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('room');
	const [roomId, setRoomId] = useState('');

	return (
		<>
			{currentScreen === 'room' && (
				<RoomScreen
					handler={(text: string) => {
						setRoomId(text);
						setCurrentScreen('chat');
					}}
				/>
			)}
			{currentScreen === 'chat' && <ChatScreen id={roomId} />}
		</>
	);
}
