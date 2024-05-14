import HomePage from "../containers/HomePage/HomePage.jsx";
import CharacterPage from "../containers/filmPage/CharacterPage.jsx";
import PersonPage from "../containers/PersonPage/PersonPage.jsx";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <CharacterPage /> },
  { path: "/people/:id", element: <PersonPage /> },
];

export default routesConfig;
