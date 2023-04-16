import React, { createContext, useState, useCallback, useContext, PropsWithChildren} from 'react';

export interface AuthContextData {
    user: boolean;
    login(): void;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {

    // const [user, setUser] = useState<boolean>(() => {
    //     const user = localStorage.getItem('@Elk:user');
    //     return !!user;
    // });
    const [user, setUser] = useState(true);

    const logout = useCallback(() => {
        localStorage.removeItem('@Elk:user');
        setUser(false);
    }, []);

    const login = useCallback(() => {
        localStorage.setItem('@Elk:user', 'elk-sockets');

        setUser(true);
    }, []);

    return (
        <AuthContext.Provider value={{ user: user,  login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Outside provider');
    }

    return context;
}