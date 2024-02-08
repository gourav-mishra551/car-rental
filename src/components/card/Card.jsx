import './card.css'
const Card = () => {
  return (
    <div className="card-container">
      <div className="first">
        <img src="./shopping.png" alt="buy" />
        <h2>Select Car</h2>
        <p>we offers a big range of vechicles for all your driving needs, We have the perfect car to meet your needs</p>
      </div>
      <div className="second">
        <img src="./support.png" alt="support" />
        <h2>Contact operator</h2>
        <p>Our knowledgebale and friendly operators are always ready to help with any questions or concerns</p>
        </div>
      <div className="third">
        <img src="./camping-van.png" alt="" />
        <h2>Let's Drive</h2>
        <p>Whether you are hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
    </div>
  );
};

export default Card;
