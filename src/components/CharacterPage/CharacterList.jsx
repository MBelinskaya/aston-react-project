import PropTypes from "prop-types";
import styles from "../CharacterPage/CharacterList.module.css";
import { Link } from "react-router-dom";

const CharacterList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ imgId, name, img }) => (
        <li className={styles.list__item} key={imgId}>
          <Link to={`/people/${imgId}`}>
            <img className={styles.person__photo} src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  people: PropTypes.array,
};
export default CharacterList;
