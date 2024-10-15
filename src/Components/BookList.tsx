import { useEffect, useState } from "react";
import BookCard, { BookProps } from "./BookCard";
import LibrarySearch from "./LibrarySearch";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    fetch("https://localhost:7248/item")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books from the database");
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books"));
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
