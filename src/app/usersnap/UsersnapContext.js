'use client'

import { createContext, useEffect, useState } from "react";
import { loadSpace } from '@usersnap/browser';

// const initParams = {
//     custom: {
//         plan: 'trial',
//         testGroup: 'A',
//         currency: 'USD',
//     },
// }

export const UsersnapContext = createContext(null);

export const UsersnapProvider = ({ children }) => {
    const [usersnapApi, setUsersnapApi] = useState(null)

    useEffect(() => {
        loadSpace(process.env.NEXT_PUBLIC_USERSNAP_API_KEY).then((api) => {
            api.init()
            setUsersnapApi(api)
        })
    }, [])

    return (
        <UsersnapContext.Provider value={usersnapApi}>
            {children}
        </UsersnapContext.Provider>
    )
}

export function useUsersnapApi() {
    return useContext(UsersnapContext)
}