import BenefitsComponents from "./components/BenefitsComponents"
import ContactComponents from "./components/ContactComponents"
import HomeComponents from "./components/HomeComponents"
import HomeSwiperComponents from "./components/HomeSwiperComponents"
import NavbarComponents from "./components/NavbarComponents"
import PlantComponents from "./components/PlantComponents"
import PowerComponents from "./components/PowerComponents"
import ServiceComponents from "./components/ServiceComponents"


const App = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-5 bg-white-bg">
      <NavbarComponents/>
      <HomeComponents/>
      <HomeSwiperComponents/>
      <ServiceComponents/>
      <BenefitsComponents/>
      <PlantComponents/>
      <PowerComponents/>
      <ContactComponents/>
    </div>
  )
}

export default App
