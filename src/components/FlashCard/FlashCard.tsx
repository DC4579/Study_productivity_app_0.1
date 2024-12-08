import React from 'react';
import { RotateCw } from 'lucide-react';

interface FlashCardProps {
  front: string;
  back: string;
}

export function FlashCard({ front, back }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full h-64 cursor-pointer group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-white rounded-lg shadow-lg">
            <p className="text-xl font-medium text-gray-800">{front}</p>
            <RotateCw className="absolute bottom-4 right-4 w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-white rounded-lg shadow-lg">
            <p className="text-xl font-medium text-gray-800">{back}</p>
            <RotateCw className="absolute bottom-4 right-4 w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}