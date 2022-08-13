import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<HeroesApp />);

// ReactDOM.render(
//     <HeroesApp />,
//   document.getElementById('root')
// );