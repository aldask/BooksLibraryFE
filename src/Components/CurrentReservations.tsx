import React, { useEffect, useState } from "react";

const databaseRefresh = 10000;

const CurrentReservations: React.FC = () => {
  const [reservations, setReservations] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCurrentReservations = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://localhost:7248/Reserve/allreservations"
      );
      if (response.ok) {
        const data = await response.json();
        setReservations(data);
      } else {
        throw new Error("All reservations fetch failed");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentReservations();
    const interval = setInterval(fetchCurrentReservations, databaseRefresh);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r bg-gradient-to-br from-blue-50 to-blue-300 opacity-80 p-6 flex flex-col items-center justify-center">
      <div className="p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
          Current Reservations
        </h2>

        {loading && (
          <div className="flex justify-center mb-8">
            <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {reservations.length > 0 ? (
          <ul className="space-y-6">
            {reservations.map((reservation) => (
              <li
                key={reservation.id}
                className="transition-transform transform hover:scale-105 bg-white/80 backdrop-blur-lg shadow-lg rounded-xl p-6 flex justify-between items-center"
              >
                <div className="text-gray-700">
                  <p className="text-lg font-semibold text-blue-900 tracking-wide">
                    Reservation NO: {reservation.id}
                  </p>
                  <p className="text-lg font-semibold">
                    Book ID: {reservation.itemNo}
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    <strong>Duration:</strong> {reservation.duration} days
                  </p>
                  <p className="text-sm mt-1 text-gray-500">
                    <strong>Quick Pickup:</strong>{" "}
                    {reservation.quickPick ? "Yes" : "No"}
                  </p>
                  <p className="text-sm mt-1 text-gray-500">
                    <strong>Type:</strong>{" "}
                    {reservation.isBook ? "Book" : "Audiobook"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-800">
                    €{reservation.price.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && (
            <p className="text-center text-gray-600 text-lg">
              No current reservations
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default CurrentReservations;
