import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import PostUser from './components/postUser/postUser';
import UpdateUser from './components/updateUser/updateUser';
import NoMatch from './components/nomatch/noMatch';
import Header from './components/header/header';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<PostUser />} />
        <Route path="/user/:userId" element={<UpdateUser />} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      
    </>
  );
}

export default App;
