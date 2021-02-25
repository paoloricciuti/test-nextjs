import React, { useState, createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const usePage = () => {
    return useContext(PageContext)
};
const PageContext = createContext(null);

const PageContextProvider = ({ children }) => {
    const router=useRouter();
    useEffect(()=>{
        console.log(router);
        setPage(router.asPath);
    },[router.isReady])
    const [page, setPage] = useState(router.asPath);
    return (
        <PageContext.Provider value={[page, setPage]}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContextProvider;
export { usePage };