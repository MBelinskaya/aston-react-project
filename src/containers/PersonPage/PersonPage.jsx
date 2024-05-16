import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getApiResource, API_PEOPLE } from "../../utils/api.js";
import { getPeopleImage } from "../../services/getPeopleData.js";
import styles from "../PersonPage/PersonPage.module.css";

const PersonPage = () => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personId, setPersonId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      setPersonId(id);
      const res = await getApiResource(`${API_PEOPLE}/${id}/`);
      if (res) {
        setPersonInfo([
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.person__name}> {personName}</h1>
        <div className={styles.container}>
          <img src={personPhoto} alt={personName} />
          {personInfo && (
            <ul>
              {personInfo.map(
                ({ title, data }) =>
                  data && (
                    <li key={title}>
                      <span>
                        {" "}
                        {title}: {data}{" "}
                      </span>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonPage;
