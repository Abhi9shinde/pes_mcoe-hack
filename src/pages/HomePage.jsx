import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Tracks from '../components/Tracks';
import Domains from '../components/Domains';
import Prizes from '../components/Prizes';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Tracks />
      <Domains />
      <Prizes />
      <Timeline />
      <Sponsors />
      <FAQ />
    </>
  );
}