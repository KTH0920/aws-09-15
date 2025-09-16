import "./App.css";
import FileList from "./components/FileList";
import UploadForam from "./components/UploadForm";

function App() {
  return (
    <div className="container">
      <UploadForam />
      <FileList />
    </div>
  );
}

export default App;
