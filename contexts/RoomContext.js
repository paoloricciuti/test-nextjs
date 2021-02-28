import React, { useState, createContext, useContext } from 'react';

const useRoom = ()=>{
    return useContext(RoomContext)
};
const RoomContext = createContext(null);

const RoomContextProvider = ({ children }) => {
    const [room, setRoom] = useState(null);
    return (
        <RoomContext.Provider value={[ room, setRoom ]}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomContextProvider;
export { useRoom };