import PropTypes from "prop-types";
import { Container, Tooltip, Typography } from "@mui/material";
import { Column, DemoAppBar, ResponsiveContainer } from "@components";

import {
  HTML5Logo, CSS3Logo, JSLogo,
  ViteLogo, ReactLogo, MUILogo,
  PythonLogo, DjangoLogo
} from "@assets";

import "@styles/index.css";

function TechLogo({ logo, link, hint }) {
  return (
    <Tooltip title={hint} slotProps={{
        popper: {
            modifiers: [{
                name: "offset",
                options: { offset: [0, -12] }
            }]
        }
    }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={hint} style={{ height: 100 }}/>
      </a>
    </Tooltip>
  );
};

TechLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,         
  hint: PropTypes.string.isRequired
};

export default function Home() {
  return (
    <>
      <DemoAppBar/>
      <Container sx={{ padding: 4 }}>
        <Column gap={3}>
          <Typography variant="h2">
            Tango with Django Demo Project
          </Typography>

          <Typography variant="body1">
            Just a small demo project made by Kaito Sekiya for SparkHacks 2025 Tango with Django workshop.
          </Typography>
          <Typography variant="body1">
            The goal of this workshop is to integrate Django as the backend for a React-based TODO application. This will enable creating, editing, and deleting tasks with a persistent database, so changes remain even if the page is refreshed. Participants will learn how to set up models, views, and REST APIs, and how to connect it to a React frontend, and implement CRUD functionalaty with it. By the end of the session, attendees will hopefully have a fully functional TODO app.
          </Typography>

          <Typography variant="h4">Frontend</Typography>
          <ResponsiveContainer gap={4}>
            <TechLogo logo={HTML5Logo} link="https://html.spec.whatwg.org/multipage/" hint="HTML5" />
            <TechLogo logo={CSS3Logo} link="https://www.w3.org/Style/CSS/Overview.en.html" hint="CSS3" />
            <TechLogo logo={JSLogo} link="https://www.javascript.com" hint="JavaScript" />

            <TechLogo logo={ViteLogo} link="https://vite.dev" hint="Vite" />
            <TechLogo logo={ReactLogo} link="https://react.dev" hint="React" />
            <TechLogo logo={MUILogo} link="https://mui.com/material-ui/" hint="MUI" />
          </ResponsiveContainer>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            For frontend, this demo project primarily uses React as well as utilizes a variety of components from the MUI (Material UI) library to simplify and speed up the development. Since React is a JavaScript-based web framework, HTML, CSS, and JavaScript are also extensively used throughout the project. Additionally, Vite was used to set up the project template and to handle the build process and rendering of the frontend.
          </Typography>

          <Typography variant="h4">Backend</Typography>
          <ResponsiveContainer gap={4}>
            <TechLogo logo={PythonLogo} link="https://www.python.org" hint="Python" />
            <TechLogo logo={DjangoLogo} link="https://www.djangoproject.com" hint="Django" />
          </ResponsiveContainer>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            For backend, this demo project uses Django, a Python framework to build web applications.
          </Typography>
        </Column>
      </Container>
    </>
  );
}