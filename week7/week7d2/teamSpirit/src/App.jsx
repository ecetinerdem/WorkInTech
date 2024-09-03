import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Layout.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar users={users} setUsers={setUsers} />
        <Main users={users} setUsers={setUsers} />
      </div>
      <Footer />
    </>
  );
}

export default App;
