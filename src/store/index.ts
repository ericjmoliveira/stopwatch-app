import create from 'zustand';

interface Store {
  seconds: number;
  milliseconds: number;
  isTimerRunning: boolean;
  intervalRef: number | undefined;
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
  resetTimer: () => void;
}

const timerInterval = (handler: () => void) => {
  const id = setInterval(handler, 10);

  return id;
};

export const useStore = create<Store>((set, get) => ({
  seconds: 0,
  milliseconds: 0,
  isTimerRunning: false,
  intervalRef: undefined,
  startTimer: () => {
    set({
      intervalRef: timerInterval(() =>
        set((state) => ({
          seconds: state.milliseconds === 99 ? state.seconds + 1 : state.seconds,
          milliseconds: state.milliseconds < 99 ? state.milliseconds + 1 : 0
        }))
      ),
      isTimerRunning: true
    });
  },
  stopTimer: () => {
    clearInterval(get().intervalRef);
    set({ isTimerRunning: false });
  },
  restartTimer: () => {
    set({ seconds: 0, isTimerRunning: true });
  },
  resetTimer: () => {
    clearInterval(get().intervalRef);
    set({ seconds: 0, milliseconds: 0, isTimerRunning: false });
  }
}));
