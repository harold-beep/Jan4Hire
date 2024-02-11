import SectionLayout from "./components/SectionLayout";
import "./style.scss";

function App() {
  return (
    <>
      <SectionLayout>
        <div className="left-content">
          <h1>brudda</h1>
        </div>
        <div className="right-content">
          <h1>brudda 2</h1>
        </div>
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
