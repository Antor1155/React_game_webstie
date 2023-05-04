import './App.css';
import Head from './componenets/Head';
import Navigation from './componenets/Navigation';
import NewsSection from './componenets/NewsSection';
import Footer from './componenets/Foot';
import { Routes, Route} from 'react-router-dom';
import FourZero from './componenets/fourzero';
import {ThemeContext} from './componenets/ThemeProvider';

function App() {

  return (
    <ThemeContext.Provider value={"hello2"}>
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
