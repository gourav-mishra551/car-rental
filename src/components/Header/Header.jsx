import "./header.css"
import "./header.scss"

const Header = () => {
  return (
    <div>
    <div  className="main" >
        {/* <div className="left">
            <h1 >Your Ride, Your Rules: Instant Car Rentals</h1>
            <ul>
                <li className="head">Clear Pricing and <d className="underlined underline-clip head"> Payment Options</d></li>
                <li className="head" >Real-Time Availability and Booking</li>
                <li className="underlined underline-overflow head">GPS and Navigation Integration</li>
            </ul>
            <div className="button"><button className="button-73" role="button">Book Now</button></div>
        </div> */}
        {/* <!-- about --> */}
<div className="about">
   <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" rel="noreferrer">
      <span className="icon"></span>
   </a>
   <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank" rel="noreferrer">
      <span className="icon"></span>
   </a>
   <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" rel="noreferrer">
      <span className="icon"></span>
   </a>
   <a className="bg_links logo"></a>
</div>
{/* <!-- end about --> */}

<div className="mainHeading">
   <div className="mainHeading__content">
      <article className="mainHeading__text">
         <p className="mainHeading__preTitle">nature</p>
         <h2 className="mainHeading__title">behind the mountains</h2>
         <p className="mainHeading__description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
         </p>
         <button className="cta">know more</button>
      </article>

      <figure className="mainHeading__image">
         <img
            src="./pngegg (3).png"
            alt=""
         />
      </figure>
   </div>
    </div>

    </div>
    </div>
  )
}

export default Header