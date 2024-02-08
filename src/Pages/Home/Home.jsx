import NavBar from "../../components/Navbar/Navbar"
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';
import Faq from '../../components/Faq/Faq';
import Cars from '../../components/Cars/Cars';



const Home = () => {
  return (
    <div>
         <div className='home'>
      <NavBar/>
      <Header/>
      </div>
      <Menu/>
      <WhyChooseUs/>
      <Cars/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home