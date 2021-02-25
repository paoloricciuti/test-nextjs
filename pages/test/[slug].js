import { useRouter } from 'next/router';
import React from 'react';

const slug = props => {
    const router=useRouter();
    return (
        <>
            Testing the subsroute: slug={router.query.slug}
        </>
    )
};
export default slug;