import {Text, useInput} from 'ink';
import React, {useState} from 'react';

export default function RoomComponent(handler: any) {
	const [keyword, setKeyword] = useState('');
	useInput(input => {
		if (input === 'q') {
			handler();
		}
		if (input === '\n') {
			setKeyword('');
		}
		setKeyword(prevKeyword => prevKeyword + input);
	});
	return (
		<>
			<Text>
				<Text color="green">You are in the room.</Text>
				<Text color="yellow">Enter a keyword: </Text>
			</Text>
			<Text>
				<Text color="yellow">{keyword}</Text>
			</Text>
		</>
	);
}
