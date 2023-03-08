import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BOOK_DETAILS_URL } from "../API";

const BookDesc = () => {
  const [book, setBook] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(book);

  return (
    <div className="bookDesc">
      <div className="bookImg">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="" />
      </div>
      <div className="bookDetails">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2 style={{ marginTop: 10 }}>Authors</h2>
        <p style={{ marginBottom: 10 }}>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};

export default BookDesc;
