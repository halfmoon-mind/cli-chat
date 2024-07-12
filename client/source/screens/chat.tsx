import {Text} from 'ink';
import React from 'react';

export default function ChatScreen({id}: {id: string}) {
	return (
		<>
			<Text color="green">You are in the chat. {id}</Text>
			<Text color="yellow">Enter a message: </Text>
		</>
	);
}
