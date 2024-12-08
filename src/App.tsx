import React from 'react';
import { FlashCardDeck } from './components/FlashCard/FlashCardDeck';
import { PomodoroTimer } from './components/Pomodoro/PomodoroTimer';
import { TodoList } from './components/Todo/TodoList';
import { BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Study Buddy</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <PomodoroTimer />
            <TodoList />
          </div>
          <div>
            <FlashCardDeck />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;