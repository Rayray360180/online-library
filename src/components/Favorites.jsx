import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";
import QRCode from "qrcode.react"; // Добавляем импорт

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div style={{ marginBottom: 10 }}>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <>
                  <button onClick={() => removeFromFavorites(book.id)}>
                    Удалить из Избранного
                  </button>
                  <QRCode value={`http://localhost:3000/book/${book.id}`} />
                </>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Добавить в Избранное
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="noFavorites">
            <h2>У вас нет избранных!</h2>
          </div>
          <div className="noFavorites">
            <Link to="/">
              <h2>Вернуться в главное меню?</h2>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
