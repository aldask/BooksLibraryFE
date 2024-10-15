export interface BookProps {
  id: string;
  name: string;
  year: number;
  picUrl: string;
}

const BookCard: React.FC<BookProps> = ({ name, year, picUrl }) => {
  return (
    <div className="flex flex-col justify-center p-6 bg-white shadow-lg rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-xs mx-4">
      <img
        src={picUrl}
        alt={name}
        className="w-full h-60 object-cover rounded-lg mb-4 shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-1">
        Release year: <span className="font-semibold text-black">{year}</span>
      </p>
    </div>
  );
};

export default BookCard;
