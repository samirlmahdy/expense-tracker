import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const totalAmount = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const sign = totalAmount < 0 ? "-" : "+";
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${totalAmount}
      </h1>
    </>
  );
}
