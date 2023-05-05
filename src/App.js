import './App.css';
import Head from './componenets/Head';
import Navigation from './componenets/Navigation';
import NewsSection from './componenets/NewsSection';
import Footer from './componenets/Foot';
import { Routes, Route} from 'react-router-dom';
import FourZero from './componenets/fourzero';
import {ThemeContext} from './componenets/ThemeProvider';
import { useState } from 'react';

function App() {

  let [lightTheme, setLightTheme] = useState(true)

  return (
    <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
      <div className="App">
        <Head></Head>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<NewsSection></NewsSection>}></Route>
          <Route path="/:id" element={<NewsSection></NewsSection>}></Route>
          <Route path="*" element={<FourZero></FourZero>} />
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
