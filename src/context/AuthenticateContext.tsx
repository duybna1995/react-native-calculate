import React, { createContext } from 'react';

interface AuthenticateContextProps {
    username: string,
    setUsername: string,
    password: string,
    setPassword: string,
    isAuthenticated: boolean,
    setAuthenticated?: boolean,
    handleSubmit: () => void,
    handleLogout: () => void
}

export const defaultValue: AuthenticateContextProps = {
    username: '',
    setUsername: '',
    password: '',
    setPassword: '',
    isAuthenticated: false,
    handleSubmit: () => {},
    handleLogout: () => {}
};

const AuthenticateContext = createContext<AuthenticateContextProps>({
    ...defaultValue
})

export default AuthenticateContext;