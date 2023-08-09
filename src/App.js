import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { History } from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./components/context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
