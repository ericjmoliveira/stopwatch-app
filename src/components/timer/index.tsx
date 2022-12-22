import { useStore } from '../../store';

export default function Timer() {
  const seconds = useStore((state) => state.seconds);
  const milliseconds = useStore((state) => state.milliseconds);

  return (
    <section className="mb-60 flex items-center justify-center gap-x-2 text-white text-6xl">
      <span>{String(Math.floor(seconds / 60)).padStart(2, '0')}</span>:
      <span>{String(Math.floor(seconds % 60)).padStart(2, '0')}</span>.
      <span>{String(milliseconds).padStart(2, '0')}</span>
    </section>
  );
}
