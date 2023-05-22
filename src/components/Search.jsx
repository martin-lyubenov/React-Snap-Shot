import { useRef } from "react";

import classes from "./Search.module.css";

function Search({ onQuerySumbit }) {
  // context - loading, change search button to Searching.. and disable all buttons

  const searchRef = useRef();

  function themeSearch(event) {
    const theme = event.target.value;

    onSubmitHandler(event, theme);
  }

  function onSubmitHandler(event, theme) {
    event.preventDefault();

    if (theme) {
      onQuerySumbit(theme);
      return;
    }

    const query = searchRef.current.value;

    if (query === "") {
      return;
    }

    onQuerySumbit(query);

    searchRef.current.value = "";
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <input
          className={classes["search-input"]}
          ref={searchRef}
          type="text"
          placeholder="Search..."
        />
        <input className={classes['search-button']} type="submit" value={"Search"} />
      </form>
      <div className={classes.themes}>
        <input onClick={themeSearch} type="button" value={"Mountain"} />
        <input onClick={themeSearch} type="button" value={"Beeches"} />
        <input onClick={themeSearch} type="button" value={"Birds"} />
        <input onClick={themeSearch} type="button" value={"Food"} />
      </div>
    </div>
  );
}

export default Search;
