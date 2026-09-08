import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Organizers from './components/Organizers';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-temple">
      <Hero />
      <Invitation />
      <Organizers />
      <Timeline />
      <Location />
      <Gallery />
      <Contact />
      <Footer />
      <MusicPlayer />
    </div>
  );
}
