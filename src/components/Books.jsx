import { useEffect, useState } from "react";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bookList">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div style={{ marginBottom: 10 }}>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img
              src={book.image_url}
              onClick={() => navigate(`/books/${book.id}`)}
              alt="#"
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                Удалить из Избранного
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Добавить в избранное
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
