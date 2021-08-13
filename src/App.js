import React from "react";

// React without JSX
/*const Star = () => React.createElement('div', null, 'This is a litle star *')

const App = () => {
  return (
    Star()
  );
}*/

// Styles
import { GlobalStyle } from "./GlobalStyle"

// Components
const App = () => {
  return (
    <div className="App">
      Hola Adri como estas?
      <GlobalStyle />
    </div>
  )
};

export default App;
