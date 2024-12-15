import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';



export default function App() {
  return (<>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home/>  } />
      <Route path="/about" />
    </Routes>
  </>)
}