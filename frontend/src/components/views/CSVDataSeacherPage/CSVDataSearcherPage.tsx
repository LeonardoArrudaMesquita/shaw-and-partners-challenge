import { ChangeEvent, useState } from "react";
import axios from "axios";
import Card from "../../molecule/Card";

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
    <div>
      <p>CSV Data Seacher</p>
      <input type="file" accept=".csv" onChange={(e) => handleInputFile(e)} />
      search:<input onChange={(e) => handleFilter(e.target.value)} value={filter} />
      {
        cards.map((card) => <Card data={card} />)
      }
    </div>
  );
}
