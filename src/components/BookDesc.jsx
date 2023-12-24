import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";
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

  return (
    <div className="bookDesc">
      <div className="bookImg">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="" />
      </div>
      <div className="bookDetails">
        <h2>Описание</h2>
        <p>{book?.description}</p>
        <h2 style={{ marginTop: 10 }}>Авторы</h2>
        <p style={{ marginBottom: 10 }}>{book?.authors}</p>
        <h2>Жанры</h2>
        <p>{book?.genres}</p>
        <h2>QR-код</h2>
        <QRCode value={`http://localhost:3000/book/${id}`} />
      </div>
    </div>
  );
};

export default BookDesc;
