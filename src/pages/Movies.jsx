import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

/* const movies = [
  {
    id: 933131,
    posterPath: "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
    title: "Badland Hunters",
    releaseDate: "2024-01-26",
  },
]; */

function Movies() {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

export default Movies;
