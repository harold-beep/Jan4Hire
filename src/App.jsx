import { Typography } from "@mui/material";
import SectionLayout from "./components/SectionLayout";
import "./style.scss";

function App() {
  return (
    <>
      <SectionLayout>
        <h1>About Me</h1>
        <Typography>animte me!</Typography>
      </SectionLayout>
      <SectionLayout>
        <h1>About Me</h1>
      </SectionLayout>
      <SectionLayout>
        <h1>About Me</h1>
      </SectionLayout>
    </>
  );
}

export default App;
