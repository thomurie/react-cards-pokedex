import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = ({ initalVal = true }) => {
  const [isFacingUp, setIsFacingUp] = useState(initalVal);

  const flipCard = () => {
    setIsFacingUp((faceup) => !faceup);
  };
  return [isFacingUp, flipCard];
};

const useAxios = () => {
  const [urlData, setUrlData] = useState([]);

  const addData = async (url) => {
    const response = await axios.get(url);
    const newData = [...urlData, { ...response.data, id: uuid() }];
    setUrlData(newData);
  };
  return [urlData, addData];
};

export { useFlip, useAxios };

// const [cards, setCards] = useState([]);
// const addCard = async () => {
//   const response = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   );
//   setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
// };

// const [pokemon, setPokemon] = useState([]);
// const addPokemon = async (name) => {
//   const response = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${name}/`
//   );
//   setPokemon((pokemon) => [...pokemon, { ...response.data, id: uuid() }]);
// };
