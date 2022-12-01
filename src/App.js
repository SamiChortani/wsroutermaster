import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Data";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetail from "./pages/MoviesDetail";
import MoviesAdd from "./pages/MoviesAdd";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";

function App() {
  const [searchrat, setSearchRat] = useState(0)
  const [searchname, setSearchName] = useState("")
  const [movies, setMovies] = useState(data)
  const filterByName = (srn) => { setSearchName(srn) }
  const filterByRating = (srr) => { setSearchRat(srr) }
  const handelAdd = (M) => { setMovies([{ ...M, _id: movies.length }, ...movies]) }

  return (
    <div>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={
        <>
        <NavBar />
      <Filter filterByName={filterByName} filterByRating={filterByRating} />
        <MoviesPage filterByName={filterByName} filterByRating={filterByRating} data={movies.filter((el) => el.Title.toLowerCase().includes(searchname.toLowerCase()) && el.Rating >= searchrat)}/>
        </>
      } />
        <Route path="/movies/:id"  element={<MoviesDetail movies={movies} />} />
        <Route path="/add" element={<MoviesAdd handelAdd={handelAdd}/>
        } />
      </Routes>
      {/* <NavBar/>
      <Filter filterByName={filterByName} filterByRating={filterByRating} />
      <Add handelAdd={handelAdd} />
      <MoviesPage data={movies.filter((el) => el.Title.toLowerCase().includes(searchname.toLowerCase()) && el.Rating >= searchrat)}></MoviesPage>
     */}
    </div>
  );
}

export default App;
