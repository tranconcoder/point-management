import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssVariables from "./components/styleComponents/CssVariables";
import GlobalStyle from "./components/styleComponents/GlobalStyle";
import ResetStyle from "./components/styleComponents/ResetStyle";
import reportWebVitals from "./reportWebVitals";

// React redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* Global style component */}
			<ResetStyle />
			<CssVariables />
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>
);
reportWebVitals();
