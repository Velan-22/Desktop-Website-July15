const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          earum ducimus repudiandae illo. Nostrum saepe, qui eum quasi quas
          placeat ea rerum labore culpa est sunt! Dolores enim inventore animi?
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="" />
          <img src="/images/flipkart.png" alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
