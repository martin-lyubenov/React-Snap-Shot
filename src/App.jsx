import { useState } from "react";
import Content from "./components/Content";
import Search from "./components/search";
import useApi from "./hooks/api";

import classes from './App.module.css';

function App() {
  const { get } = useApi();
  const [imgArray, setImgArray] = useState([]);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('');

  async function onQueryHandler(query) {

    setTheme(query);

    const searchQuery = query.toLowerCase();
    let images;

    try {
      images = await get(
        `/services/rest/?method=flickr.photos.search&api_key=d46cbaccec2e435eab0187c81b62adbf&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`
      );
    } catch (error) {
      setError('Ooops! Something went wrong')
    }

    setImgArray([...images.photos.photo]);

  }


  return (
    <div className={classes.container}>
      <h1 className={classes['main-heading']}>SnapShot</h1>
      <Search onQuerySumbit={onQueryHandler}></Search>
      <Content theme={theme} images={imgArray} error={error}></Content>
    </div>
  );
}

export default App;
