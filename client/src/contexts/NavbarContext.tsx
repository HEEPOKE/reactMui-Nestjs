import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

interface NavbarContextProps {
  login: boolean;
  setLogin: (value: boolean) => void;
}

const getAccessToken = sessionStorage.getItem("access_token") ?? false;

export const NavbarContext = createContext<NavbarContextProps>({
  login: false,
  setLogin: (value: boolean) => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export function NavbarContextProvider({ children }: ChildrenProps) {
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    if (!getAccessToken) {
      setLogin(false);
      console.log("false");
    } else {
      setLogin(true);
      console.log("true");
    }
  }, []);

  const values = useMemo(
    () => ({
      login,
      setLogin,
    }),
    [login, setLogin]
  );

  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
}
