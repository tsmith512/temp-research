import './App.css';
import { VideoPlayer } from './VideoPlayer';

const props = {
  src: 'https://customer-8exl6ow6bzk0q8kb.cloudflarestream.com/83b79df3459a80e6fff695229b249b39/manifest/video.m3u8',
  type: 'application/x-mpegURL'
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <VideoPlayer sources={props.src} />
      </div>
    </div>
  );
}

export default App;
