import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { store } from "./store";
import React from "react";

function App() {


  return (

    <Provider store={store}>

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>

  );
}

export default App;