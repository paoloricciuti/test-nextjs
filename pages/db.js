import React, { useCallback, useState } from 'react';

const db = props => {
    const [username, setUsername] = useState("");
    const [response, setResponse] = useState({});
    const [entries, setEntries] = useState(props.entries || []);
    const postToDb = useCallback(async (e) => {
        e.preventDefault();
        const options = {
            method: "POST",
            body: JSON.stringify({
                username,
            })
        };
        let res = await fetch("/api/testdb", options);
        setResponse(await res.json());
        res = await fetch("/api/testdb");
        setEntries(await res.json());
    }, [username]);
    return (
        <>
            Last added:
            <pre>
                {JSON.stringify(response, null, 2)}
            </pre>
            <hr />
            <form onSubmit={postToDb}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            <hr />
        Usernames already added:
            <ul>
                {
                    entries.map(entry => (
                        <li key={entry._id}>{entry.username}({entry._id})</li>
                    ))
                }
            </ul>
        </>
    )
};
export default db;

export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/testdb");
    return {
        props: {
            entries: await res.json()
        }
    }
}