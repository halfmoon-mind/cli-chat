import {Text, useInput} from 'ink';
import React, {useState} from 'react';

export default function RoomScreen({
	handler,
}: {
	handler: (text: string) => void;
}) {
	const [keyword, setKeyword] = useState('');
	useInput(input => {
		if (input === '\r') {
			handler(keyword);
		} else {
			setKeyword(prevKeyword => prevKeyword + input);
		}
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
