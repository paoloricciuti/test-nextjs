import React, { useState, createContext, useContext, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = ()=>{
    return useContext(SocketContext)
};
const SocketContext = createContext(null);

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    useEffect(()=>{
        setSocket(io());
    },[]);
    return (
        <SocketContext.Provider value={[ socket, setSocket ]}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContextProvider;
export { useSocket };