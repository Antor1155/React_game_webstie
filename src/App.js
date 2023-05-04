import logo from './logo.svg';
import './App.css';
import Head from './componenets/Head';
import Navigation from './componenets/Navigation';
import NewsSection from './componenets/NewsSection';
import Footer from './componenets/Foot';
import { Routes, Route, Outlet } from 'react-router-dom';
import FourZero from './componenets/fourzero';

function App() {
  return (
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
  );
}

export default App;
