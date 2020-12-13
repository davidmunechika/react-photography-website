import React from 'react';
//GlobalStyle
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
