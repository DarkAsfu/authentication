import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const apiURL = "http://127.0.0.1:8000/api/books/";
  const fetchData = async () => {
    const response = await axios.get(apiURL, { withCredentials: true });
    console.log(response);
    setBookList(response.data);
    console.log(bookList);
    console.log(response.data);
  };

  return (
    <>
      This is app
      <h1>All Books</h1>
      <div className="book-list">
        {bookList.map((book, index) => (
          <ul>
            <li>Book: {book.name}</li>
            <li>Author: {book.author}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
