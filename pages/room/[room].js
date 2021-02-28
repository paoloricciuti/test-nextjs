import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import { useRoom } from '../../contexts/RoomContext';
import { useSocket } from '../../contexts/SocketContext';

const room = props => {
    const [socket] = useSocket();
    const router = useRouter();
    const [room, setRoom] = useRoom();
    const [sentMsg, setSentMsg] = useState("");
    const sendMsg = useCallback((e)=>{
        e.preventDefault();
        socket.emit("msg", {
            message: sentMsg,
            room: room.room
        });
        setSentMsg("");
    },[socket, sentMsg, room])
    useEffect(() => {
        if (!socket) return;
        socket.on("updateRoom", data => {
            setRoom(data);
        });
    }, [socket]);
    return (
        <>
            <ul>
                {room?.users?.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
            <div>
                {room?.messages?.map(msg => (
                    <div>{msg.message}</div>
                ))}
            </div>
            <form onSubmit={sendMsg}>
                <input value={sentMsg} onChange={(e)=> setSentMsg(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </>
    )
};
export default room;