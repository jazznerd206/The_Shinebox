import Banner from '../components/Banner'

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>THE SHINEBOX</h1>
        <Banner
        imageUrl="./assets/Cruella.png"
        text="Your Car Deserves the Royal Treatment"
        textAlignment="left"
      />
        <Banner imageUrl="./assets/MsParker.png" text="Inside and Out" textAlignment="right" />
      </div>
    </section>
  );
}

export default LandingPage;
