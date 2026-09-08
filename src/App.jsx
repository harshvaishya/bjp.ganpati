import { useState } from 'react';
import IntroGate from './components/IntroGate';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Organizers from './components/Organizers';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Blessings from './components/Blessings';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full min-h-screen bg-cream">
      {!opened && <IntroGate onOpen={() => setOpened(true)} />}

      {opened && (
        <div className="animate-fadeUp">
          <Hero />
          <Invitation />
          <Organizers />
          <Timeline />
          <Location />
          <Blessings />
          <Gallery />
          <Contact />
          <Footer />
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}
