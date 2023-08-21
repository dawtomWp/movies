import React, { useEffect, useState } from "react";



const Header = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    getData();
  }, [query]);


  console.log(data)

  const getData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1`);
      // if (!response.ok) {
        console.log(response);
        const result = await response.json();
        setData(result.results);

    } catch (error) {
      setError("Nie udało się pobrać danych");
      // } finally {
      //   setLoading(false);
    }

  };

  console.log(data);
  console.log(query);
  return (
    <div>

      <div >

      </div>
      <input placeholder="szukaj" onChange={(e) => setQuery(e.target.value)} value={query} /> <p ></p>
    </div>
  );
};

export default Header;