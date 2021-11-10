/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";

const PopularMovies = () => {
  const { popularMovies } = useContext(MovieContext);
  const cont={
    display:"flex",
    justifyContent:"space-between",
    color:"black",
    backgroundColor:"#87CEEB",
    marginBottom:"20px",
    paddingLeft:"10px",
    paddingRight:"10px"
  }
  const cont2={
    color:"green"
  }
  return (
    <div css={styles} className="popularMovies">
      <Container>
        {popularMovies.results &&
          popularMovies.results.map((popularMovieItem, index) => (
            <div>
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
              alt="poster"
            />
            <h4 style={cont2}>{popularMovieItem.title}</h4>
            <div style={cont}>
            <h5 className="">{popularMovieItem.vote_average}</h5>
            <p>{popularMovieItem.release_date}</p>
            </div>
            
            </div>
          ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 81vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
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

export default PopularMovies;
