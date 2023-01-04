import { ReactNode, useState, createContext, useMemo } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

interface ChildrenProps {
  children: ReactNode;
}

interface MainContextProps {
  mode: string;
  setMode: (value: string) => void;
  colormode: () => void;
  theme: () => void;
}

export const MainContext = createContext<MainContextProps>({
  mode: "light",
  setMode: (value: string) => {},
  colormode: () => {},
  theme: () => {},
});

export function MainContextProvider({ children }: ChildrenProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colormode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const values = useMemo(
    () => ({
      mode,
      setMode,
      colormode,
      theme,
    }),
    [mode, setMode, colormode, theme]
  );

//   return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}
