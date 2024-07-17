import {Text, useInput} from 'ink';
import React, {useEffect, useState} from 'react';
import useSocket from '../hooks/useSocket.js';
import {MessageModel} from '../types/message.js';

export default function ChatScreen({id}: {id: string}) {
	const socket = useSocket(id);

	const [currentMessage, setCurrentMessage] = useState('');
	const [messageList, setMessageList] = useState<MessageModel[]>([]);

	useEffect(() => {
		socket.on('message', (data: any) => {
			setMessageList(prevMessage => [...prevMessage, data]);
		});

		return () => {
			socket.off('message', (data: any) => {
				console.log(data);
			});
		};
	}, [socket]);

	useInput((input, key) => {
		if (key.return) {
			socket.emit('message', input);
			setCurrentMessage('');
		} else setCurrentMessage(prevMessage => prevMessage + input);
	});

	return (
		<>
			<Text color="green">You are in the chat. {id}</Text>
			<Text color="yellow">Enter a message: </Text>
			<Text>
				{messageList.map((msg, index) => (
					<Text key={index}>
						<Text color="green">{msg.id}</Text>:{' '}
						<Text color="yellow">{msg.message}</Text>
					</Text>
				))}
			</Text>
			<Text>currentMessage: {currentMessage}</Text>
		</>
	);
}
