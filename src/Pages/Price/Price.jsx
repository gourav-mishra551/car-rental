import NavBar from "../../components/Navbar/Navbar";
import "./price.css"

const Price = () => {
  return (
    <div>
      <NavBar />
      <div className="price-main">
        <div className="price-head">

        <h1>
          We offer a competitive price among other's car services in Bihar ,
          Jharkhand , Bengal and odisha{" "}
        </h1>
        <p>
          {" "}
          CabBazar is committed to keep the pricing as simple and clear as
          possible. So, we provide one price for your Patna taxi which covers a
          specified maximum kilometer and maximum days. So, you know upfront how
          much taxi is going to cost you and plan your budget well.
          <br /> The prices
          are dynamic and transparent and give a win-win deal for both you and
          our partnered taxi services providers. You can choose car as per your
          preference
        </p>
        </div>
      </div>

      <div className="background">
  <div className="container">
    <div className="panel pricing-table">
      
      <div className="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Personal</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Custom domains</li>
          <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span className="pricing-price">Free</span>
        <a href="#/" className="pricing-button">Sign up</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Small team</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Never sleeps</li>
          <li className="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span className="pricing-price">$150</span>
        <a href="#/" className="pricing-button is-featured">Free trial</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Enterprise</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Dedicated</li>
          <li className="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span className="pricing-price">$400</span>
        <a href="#/" className="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
};

export default Price;
