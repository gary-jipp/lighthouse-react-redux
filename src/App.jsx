import './App.css';
import {PersistGate} from "redux-persist/integration/react"; // PersistGate for rehydration
import useCounter from './hooks/useCounter';
import {persistor} from './store/store';

export default function() {

  const {count, increment, decrement, clear} = useCounter();

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <div>Hello React World</div>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
        <button onClick={increment}>+</button>
        {count}
      </div>
    </PersistGate>
  );
};
