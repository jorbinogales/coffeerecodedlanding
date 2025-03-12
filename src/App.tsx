import { useEffect, useState } from 'react';
import './App.css';
import HeaderComponent from './sections/header/header';
import TeamComponent from './sections/team/team';
import LoaderComponent from './components/LoaderComponent';
import ProjectsComponent from './sections/projects/projects';
import "bulma/css/bulma.min.css";
import FooterComponent from './sections/footer/footer';

function App() {
	const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("has-background-dark", theme === "dark");
    document.documentElement.classList.toggle("has-background-light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {loading ? (
        <LoaderComponent /> 
      ) : (
        <div style={{background: 'white'}}>
          <HeaderComponent></HeaderComponent>
          <TeamComponent></TeamComponent>
          <ProjectsComponent></ProjectsComponent>
          <FooterComponent></FooterComponent>
        </div>
      )}
    </div>
  );
}

export default App;
