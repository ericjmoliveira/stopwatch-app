import Timer from './components/timer';
import Controls from './components/controls';

export default function App() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between mx-auto">
      <Timer />
      <Controls />
    </main>
  );
}
