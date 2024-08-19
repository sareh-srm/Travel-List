import { useState } from "react";

//the goal of the form component: to add new items to the array containing the items, but not to render it.
export default function Form({ onAddItem }) {
  // here we desrtucture the props

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //the function that should be called after submitting the form
  function handleSubmit(e) {
    e.preventDefault();

    console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem); //the function is called whenever the form is submitted

    //resetting the form after submitting
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
