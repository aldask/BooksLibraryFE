export type BookProps = {
  id: string;
  name: string;
  year: number;
  picUrl: string;
};

const BookCard: React.FC<BookProps> = ({ name, year, picUrl }) => {
  return (
    <div>
      <img src={picUrl} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>Release year: {year}</p>
      </div>
    </div>
  );
};

export default BookCard;
