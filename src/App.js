import logo from './logo.svg';
// import './App.css';
import Head from './componenets/Head';
import Navigation from './componenets/Navigation';
import NewsSection from './componenets/NewsSection';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Navigation></Navigation>
      <Routes>
        <Route path="" element={NewsSection}></Route>
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
