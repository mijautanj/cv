import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { AboutPage } from "../../pages/about"
import { ExperiencePage } from "../../pages/experience";
import { Link } from "../../atoms/link"
import "./styles.css"
import { SkillsPage } from "../../pages/skills";
import { EducationPage } from "../../pages/education";
import { PortfolioPage } from "../../pages/portfolio";


export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="list">
          <li className="list-item">
            <Link to="/">About</Link>
          </li>
          
          <li className="list-item">
            <Link to="/skills">Skills</Link>
          </li>

          <li className="list-item">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="list-item">
            <Link to="/education">Education</Link>
          </li>
          <li className="list-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>

      <Switch>

      <Route path="/skills">
          <SkillsPage/>
        </Route>

        <Route path="/experience">
          <ExperiencePage/>
        </Route>

v        <Route path="/education">
          <EducationPage/>
        </Route>
        

        <Route path="/portfolio">
          <PortfolioPage/>
        </Route>

        <Route path="/">
          <AboutPage/>
        </Route>

      </Switch>
    </>
  );
};