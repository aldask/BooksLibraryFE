import { useEffect, useState } from "react";
import BookCard, { BookProps } from "./BookCard";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    fetch("https://localhost:7248/item")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
