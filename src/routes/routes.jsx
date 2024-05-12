import HomePage from "../containers/HomePage/HomePage.jsx";
import CharacterPage from "../containers/filmPage/CharacterPage.jsx";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <CharacterPage /> },
];

export default routes;
