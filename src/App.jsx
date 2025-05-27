import Home from "./views/Home";
import Main from "./views/Main";
import Playlist from "./views/Playlist";
import Layout from "./sections/Layout";
import UserProfile from "./views/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/album" element={<Home />} />
          <Route path="/" element={<Main />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
