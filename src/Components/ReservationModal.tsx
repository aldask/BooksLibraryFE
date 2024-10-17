import React, { useState } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  itemId,
}) => {
  const [days, setDays] = useState(0);
  const [quickPickup, setQuickPickup] = useState(false);
  const [isAudiobook, setIsAudiobook] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleReservation = async () => {
    if (days < 1) {
      setErrorMessage("Please set more than 0 days for reservation");
      return;
    }

    setErrorMessage("");

    const reservation = {
      Duration: days,
      QuickPick: quickPickup,
      IsBook: !isAudiobook,
      IsAudiobook: isAudiobook,
      Item: {
        Id: Number(itemId),
      },
    };

    try {
      const response = await fetch(
        `https://localhost:7248/Reserve/calc/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservation),
        }
      );

      if (response.ok) {
        onClose();
      } else {
        const errorText = await response.text();
        console.error("Reservation failed:", errorText);
      }
    } catch (error) {
      console.error("Error in reservation:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="p-6 rounded-lg w-full mx-auto">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>

      <label htmlFor="days" className="block mb-2">
        Select Days:
      </label>
      <input
        type="number"
        id="days"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className={`border p-2 w-full mb-4 ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
      />

      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

      <label className="block mb-2">Quick Pickup:</label>
      <input
        type="checkbox"
        checked={quickPickup}
        onChange={(e) => setQuickPickup(e.target.checked)}
        className="mb-4"
      />

      <div className="mb-4">
        <label className="block mb-2">Select Version:</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="book"
            checked={!isAudiobook}
            onChange={() => setIsAudiobook(false)}
            className="mr-2"
          />
          Book
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="audiobook"
            checked={isAudiobook}
            onChange={() => setIsAudiobook(true)}
            className="mr-2"
          />
          Audiobook
        </label>
      </div>

      <div className="flex justify-between gap-2">
        <button onClick={onClose} className="bg-gray-300 p-2 rounded">
          Cancel
        </button>
        <button
          onClick={handleReservation}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
