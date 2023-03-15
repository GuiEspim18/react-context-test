import { createContext, useState, Dispatch, SetStateAction, ReactNode, FC, Context } from "react";

interface ILogin {
    name: string,
    setName: Dispatch<SetStateAction<string>>
}

export const LoginContext = createContext<ILogin>({} as ILogin);

LoginContext.displayName = "LoginContext";

type LoginProvideProps = {
    children: ReactNode
}

export const LoginProvider = ({ children }: LoginProvideProps) => {
    const [name, setName] = useState('');
    return (
        <LoginContext.Provider value={{ name, setName }}>
            {children}
        </LoginContext.Provider>
    );
};