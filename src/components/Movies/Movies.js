/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Loader from "../GlobalComponents/Loader";

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContext);
  const cont={
    display:"flex",
    justifyContent:"space-between",
    color:"black",
    backgroundColor:"#87CEEB",
    marginBottom:"20px",
    marginTop:"opx",
    paddingLeft:"10px",
    paddingRight:"10px"
  }
  const cont2={
    color:"green"
  }
  const image1={
    width:"100%"
  }
  
  return (
    <div css={styles} className="movies">
      <Container>
        {movies.results && movies.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          movies.results &&
          movies.results.map((movieItem, index) => (
           
            <div >
            <img
              key={index}
              style={image1}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
            />
            <h4 style={cont2}><b>{movieItem.title}</b></h4>
            <div style={cont}>
            <h5 className="">{movieItem.vote_average}</h5>
            <p>{movieItem.release_date}</p>
            </div>
            
            </div>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 68vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: Yellow;
        height: 32px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default Movies;
