import { useEffect, useState } from "react";
import axios from "axios";
// import DropDown from "../DropDown/DropDown";
import { WrapperSelect } from "./Cards.styled";

const Cards = () => {
  const [articles, setArticles] = useState([]);
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get("/tweets");
      console.log(response);
      setArticles(response.data);
    }

    fetchArticles();
  }, []);
  return (
    <div>
      Cards
      {articles.length > 0 && (
        <ul>
          {articles.map(({ id, user }) => (
            <li key={id}>{user}</li>
          ))}
        </ul>
      )}
      <WrapperSelect>
        {" "}
        {/* <DropDown
          options={options}
          filter={filter}
          onFilterChange={handleFilterChange}
        /> */}
      </WrapperSelect>
    </div>
  );
};

export default Cards;
