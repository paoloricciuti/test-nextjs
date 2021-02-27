import React from 'react';

const serverside = ({testData}) => {
    return (
        <>
            This is server side rendered:
            <pre>
                {JSON.stringify(testData)}
            </pre>
        </>
    )
};
export default serverside;

export async function getServerSideProps(context){
    return{
        props: {
            testData: "data from the server"
        }
    }
}