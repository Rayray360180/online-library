import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
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
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="noFavorites">
            <h2>You don't have any favorites yet!</h2>
          </div>
          <div className="noFavorites">
            <Link to="/">
              <h2>Go back to main menu?</h2>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
