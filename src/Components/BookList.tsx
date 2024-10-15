import { useEffect, useState } from "react";
import BookCard, { BookProps } from "./BookCard";
import LibrarySearch from "./LibrarySearch";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    fetch("https://localhost:7248/item")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <LibrarySearch onSearch={setUserInput} />
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
