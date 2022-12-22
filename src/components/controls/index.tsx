import { useStore } from '../../store';

export default function Controls() {
  const seconds = useStore((state) => state.seconds);
  const isTimerRunning = useStore((state) => state.isTimerRunning);
  const startTimer = useStore((state) => state.startTimer);
  const stopTimer = useStore((state) => state.stopTimer);
  const resetTimer = useStore((state) => state.resetTimer);

  return (
    <section className="flex items-center justify-between gap-x-16">
      <button
        className={`w-32 flex items-center justify-center px-12 py-3 ${
          !isTimerRunning && seconds === 0 && 'opacity-50 cursor-not-allowed'
        } bg-neutral-500 text-white font-medium rounded-3xl cursor-pointer`}
        onClick={resetTimer}
        disabled={!isTimerRunning && seconds === 0}
      >
        Reset
      </button>
      <button
        className={`w-32 flex items-center justify-center px-12 py-3 ${
          !isTimerRunning ? 'bg-purple-700' : 'bg-red-800'
        } text-white font-medium rounded-3xl cursor-pointer`}
        onClick={!isTimerRunning ? startTimer : stopTimer}
      >
        {!isTimerRunning && seconds === 0
          ? 'Start'
          : !isTimerRunning && seconds > 0
          ? 'Restart'
          : 'Stop'}
      </button>
    </section>
  );
}
