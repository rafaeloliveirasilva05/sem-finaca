import { Header } from './components/Header/index';

import { ModalAddTransaction } from './components/ ModalAddTransaction';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      {/* <ModalAddTransaction /> */}
    </div>
  );
}
