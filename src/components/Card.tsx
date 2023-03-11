import { Song } from "../hooks/api-types";
import playIcon from "../images/play.png";
import heartEmpty from "../images/heart-empty.svg";
import heartFilled from "../images/heart-filled.svg";

import "./Card.scss";

interface CardProp {
  song: Song;
  isLiked: boolean;
  onLike: () => void;
}

const Card = ({ song, isLiked, onLike }: CardProp) => {
  return (
    <div className="card">
      <div className="card__heading">
        <p>{song.title}</p>
        <p>Artist: {song.artist}</p>
        <p>Year: {song.year}</p>
      </div>
      <div className="card__like-button-wrapper">
        <button className="card__icon-button" onClick={onLike}>
          {!isLiked && <img src={heartEmpty} alt="like-button" />}
          {isLiked && <img src={heartFilled} alt="like-button" />}
        </button>
      </div>
      <div className="card__play-icon-wrapper">
        <button className="card__icon-button">
          <img src={playIcon} alt="play-button" />
        </button>
      </div>
    </div>
  );
};

export default Card;
