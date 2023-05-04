import logo from './logo.svg';
import './App.css';
import Head from './componenets/Head';
import Navigation from './componenets/Navigation';
import NewsSection from './componenets/NewsSection';
import Footer from './componenets/Foot';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Head></Head>
      <Navigation></Navigation>
        <Routes>
          <Route path="/:id" element={<NewsSection></NewsSection>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
