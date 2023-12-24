// Ваш файл App.js

import Header from "./components/Header";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import BookDesc from "./components/BookDesc";
import Favorites from "./components/Favorites";
import LoginPage from "./LoginPage"; // Импортируйте компонент для страницы авторизации
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<BookDesc />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
