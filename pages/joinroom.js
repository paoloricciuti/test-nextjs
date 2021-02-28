import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect } from 'react';
import { useRoom } from '../contexts/RoomContext';
import { useSocket } from '../contexts/SocketContext';

const joinroom = props => {
    const [socket] = useSocket();
    const [room, setRoom] = useRoom();
    const router = useRouter();
    const [username, setUsername]= useState("");
    const [roomname, setRoomname]= useState("");
    const joinRoom = useCallback(() => {
        socket.emit("joinRoom", {
            room: roomname,
            username
        })
    }, [router, socket, username, roomname]);
    useEffect(()=>{
        if(!socket) return;
        socket.on("joined", data=>{
            if(!data.error){
                setRoom(data);
                router.push(`/room/${data.room}`);
            }
        })
    },[socket]);
    return (
        <>
            Username: <input value={username} onChange={(e)=> setUsername(e.target.value)} /> <br />
            Room: <input value={roomname} onChange={(e)=> setRoomname(e.target.value)} /> <br />
            <button onClick={joinRoom}>Join</button>
        </>
    )
};
export default joinroom;