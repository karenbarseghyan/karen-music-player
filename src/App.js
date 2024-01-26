import MusicPlayer from "./musicPlayer/MusicPlayer";
import MusicUploadForm from "./musicUpload/MusicUploadForm";
import SongPlayer from "./songPlayer/SongPlayer";

const App = () => {
  return (
    <div>
      <h1>React Music Player</h1>
      <MusicPlayer />
      <SongPlayer />
      <MusicUploadForm />
    </div>
  );
}

export default App;
