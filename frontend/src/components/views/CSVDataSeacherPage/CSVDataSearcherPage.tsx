import { ChangeEvent, useState } from "react";
import axios from "axios";
import Card from "../../molecule/Card";
import CSVInput from "../../atoms/CSVInput";
import Input from "../../atoms/Input";
import CardList from "../../organisms/CardList";

export default function CSVDataSeacherPage() {
    const [cards, setCards] = useState([]);
    const [filter, setFilter] = useState('');

  const handleInputFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const formData = new FormData();

    if (file) {               
      formData.append("file", file);
    }

    const response = await axios.post("http://localhost:3000/api/files", formData);
    setCards(response.data)
  };

  const handleFilter = async (q: string) => {
    setFilter(q);
    const response = await axios.get(`http://localhost:3000/api/users?q=${q}`);
    setCards(response.data)
  }

  return (
    <div className="csv-data-searcher-container">
      <h1>CSV Data Searcher</h1>
      <CSVInput onChangeCSV={(e) => handleInputFile(e)} />      
      <div className="csv-data-searcher-input">
      <label>search: </label><Input onChange={(e) => handleFilter(e.target.value)} value={filter} type="text" data-testid="filter-input" />
      </div> 
      <CardList cards={cards} />
    </div>
  );
}
