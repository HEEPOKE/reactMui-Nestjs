import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <AppRouter />
  </StyledEngineProvider>
);
