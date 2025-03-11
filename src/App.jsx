import '@/App.css';
import useCounter from '@/hooks/useCounter';

export default function() {

  const {count, increment, decrement, clear} = useCounter();

  return (
    <div className="App">
      <div>Hello React World</div>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
      {count}
    </div>
  );
};
