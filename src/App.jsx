import Chat from './components/Chat';
import InicioSesion from './components/InicioSesion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
