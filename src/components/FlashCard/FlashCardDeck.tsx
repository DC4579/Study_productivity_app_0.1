import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { FlashCard } from './FlashCard';

interface Card {
  id: number;
  front: string;
  back: string;
}

export function FlashCardDeck() {
  const [cards, setCards] = React.useState<Card[]>([
    { id: 1, front: "What is React?", back: "A JavaScript library for building user interfaces" },
    { id: 2, front: "What is JSX?", back: "A syntax extension for JavaScript that allows you to write HTML-like code" }
  ]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [newFront, setNewFront] = React.useState('');
  const [newBack, setNewBack] = React.useState('');
  const [isAdding, setIsAdding] = React.useState(false);

  const addCard = () => {
    if (newFront && newBack) {
      setCards([...cards, { id: Date.now(), front: newFront, back: newBack }]);
      setNewFront('');
      setNewBack('');
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Flash Cards</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Card
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            value={newFront}
            onChange={(e) => setNewFront(e.target.value)}
            placeholder="Front of card"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            value={newBack}
            onChange={(e) => setNewBack(e.target.value)}
            placeholder="Back of card"
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={addCard}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Save Card
          </button>
        </div>
      )}

      {cards.length > 0 && (
        <div className="relative">
          <FlashCard
            front={cards[currentIndex].front}
            back={cards[currentIndex].back}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-600">
              {currentIndex + 1} / {cards.length}
            </span>
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1))}
              disabled={currentIndex === cards.length - 1}
              className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}