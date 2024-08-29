import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="982030874605-p2u51qpp4ksmmcpsv9l88lb5mg6bgi1f.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
