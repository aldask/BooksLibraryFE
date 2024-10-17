import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard, { BookProps } from "./BookCard";
import LibrarySearch from "./LibrarySearch";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [searchType, setSearchType] = useState<"name" | "year">("name");

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

  const handleUserSearch = (userInput: string, searchType: "name" | "year") => {
    setUserInput(userInput);
    setSearchType(searchType);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-300 opacity-80">
      <div className="relative z-10 p-8 flex-grow">
        <LibrarySearch onSearch={handleUserSearch} />

        <div className="mt-4 mb-6 flex justify-center">
          <Link
            to="/reservations"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            View Current Reservations
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 max-w-5xl mx-auto">
          {books
            .filter((book) => {
              return (
                (searchType === "name" &&
                  book.name.toLowerCase().includes(userInput.toLowerCase())) ||
                (searchType === "year" &&
                  book.year.toString().includes(userInput))
              );
            })
            .map((book) => (
              <div className="flex justify-center" key={book.id}>
                <BookCard {...book} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
