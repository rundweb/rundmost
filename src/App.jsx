import BenefitsComponents from "./components/BenefitsComponents"
import ContactComponents from "./components/ContactComponents"
import FooterComponents from "./components/FooterComponents"
import HomeComponents from "./components/HomeComponents"
import HomeSwiperComponents from "./components/HomeSwiperComponents"
import NavbarComponents from "./components/NavbarComponents"
import PlantComponents from "./components/PlantComponents"
import PowerComponents from "./components/PowerComponents"
import ServiceComponents from "./components/ServiceComponents"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div className="overflow-hidden flex flex-col bg-white-bg">
      <NavbarComponents/>
      <HomeComponents/>
      <HomeSwiperComponents/>
      <ServiceComponents/>
      <BenefitsComponents/>
      <PlantComponents/>
      <PowerComponents/>
      <ContactComponents/>
      <FooterComponents/>
    </div>
  )
}

export default App
