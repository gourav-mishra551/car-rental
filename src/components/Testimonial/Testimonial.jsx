import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-main">
      <h1 className="testimonial-heading">Reviews from our Customers</h1>
      <div className="testimonial centre">
        
        <div className="snip1139">
          <blockquote>
            Sometimes I think the surest sign that intelligent life exists
            elsewhere in the universe is that none of it has tried to contact
            us.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/439/191/large_2x/casual-young-indian-man-in-sunglasses-posed-against-suv-car-photo.jpg"
            alt="sample3"
          />
          <div className="author">
            <h5>
              Pelican Steve <span>- LittleThemes</span>
            </h5>
          </div>
        </div>
        <div className="snip1139 hover">
          <blockquote>
            I don't need to compromise on my principles, because they don't have
            the slightest bearing on what happens to me anyway.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/590/947/large_2x/coronavirus-covid-19-concept-south-asian-indian-man-wearing-mask-for-protect-from-corona-virus-posed-against-business-car-photo.jpg"
            alt="sample47"
          />
          <div className="author">
            <h5>
              Max <span>- LittleThemes</span>
            </h5>
          </div>
        </div>
        <div className="snip1139">
          <blockquote>
            That's the problem with nature, something's always stinging you or
            oozing mucous all over you. Let's go and watch TV.
            <div className="arrow"></div>
          </blockquote>
          <img
            src="https://image1.masterfile.com/getImage/NjMwLTA2NzI0ODg4ZW4uMDAwMDAwMDA=AB9V5p/630-06724888en_Masterfile.jpg"
            alt="sample17"
          />
          <div className="author">
            <h5>
              Eleanor Faint<span>- LittleThemes</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
