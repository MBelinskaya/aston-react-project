import { getApiResource, API_PEOPLE } from "../../utils/api.js";
import { useState, useEffect } from "react";
// import styles from "./CharacterPage.module.css";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData.js";
import CharacterList from "../../components/CharacterPage/CharacterList.jsx";

const CharacterPage = () => {
  const [people, setCharacter] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const imgId = parseInt(id.replace(/[^\d]/g, ""));
      const img = getPeopleImage(imgId);
      return { id, name, img };
    });
    setCharacter(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <>{people && <CharacterList people={people} />}</>;
};

export default CharacterPage;
