import { createContext } from "react";

export const authContext = createContext<{
    authStatus: boolean,
    setAuthStatus: (status: boolean) => void,
}>({
    authStatus: false,
    setAuthStatus: (status: boolean) => { },
});

export const AuthProvider = authContext.Provider;

export default authContext;