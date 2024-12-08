import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);
  const [isRunning, setIsRunning] = React.useState(false);
  const [isBreak, setIsBreak] = React.useState(false);

  React.useEffect(() => {
    let interval: number;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isBreak]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsBreak(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pomodoro Timer</h2>
      <div className="text-6xl font-bold text-center mb-8 text-gray-800">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={toggleTimer}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reset
        </button>
      </div>
      <p className="text-center mt-4 text-gray-600">
        {isBreak ? 'Break Time!' : 'Focus Time'}
      </p>
    </div>
  );
}