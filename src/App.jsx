import { useState } from "react";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

function App() {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([card, ...cards]);
  }

  return (
    <div>
      <h1 className="text-center text-blue-400">Search a Github username</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App