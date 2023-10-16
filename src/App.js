import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import './App.css'

function App() {

  const menu = [
    {
      id: 0,
      name: "Home",
      link: "/"
    },
    {
      id: 1,
      name: "About",
      link: "/about"
    }
  ]

  const [tab, setTab] = useState(menu[0].id)

  console.log(tab)

  return (
    <div className="App">
      <div style={{ textAlign: "center" , paddingBlock:"20px"}}>
        <h1>TIC TAC TOE</h1>
      </div>
      <div style={{ display: "flex", paddingInline: "5%" }}>
        <div style={{ display: "flex", flexFlow: "column", width: "200px", paddingRight:'30px' }}>
          <h2 style={{paddingInline:'10px'}}>Menu</h2>
          {
            menu.map(item => (
              <Link
                key={item.id}
                className='linkStyle'
                style={item.id === tab ? {
                  color: '#fff',
                  backgroundColor: '#000000',
                  fontStyle: 'normal'
                } : {
                  color:'#000000'
                }}
                to={item.link}
                onClick={() => {setTab(item.id)}}
              >
                <p>{item.name}</p>
              </Link>
            ))
          }
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>


    </div>

  );
}

export default App;
