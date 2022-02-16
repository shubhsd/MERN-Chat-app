import { Button } from '@chakra-ui/react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/HomePage';
import Chatpage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
