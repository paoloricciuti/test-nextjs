import React, { useEffect, useState } from 'react';

const test = props => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getUserAsync = async () => {
            const res = await fetch("/api/hello");
            if (res.ok) {
                setUser(await res.json());
            }
        }
        getUserAsync();
    }, []);
    return (
        <>
            Test fetching the route api:
            <pre>{JSON.stringify(user,null,2)}</pre>
        </>
    )
};

export default test;