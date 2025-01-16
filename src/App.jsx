import BenefitsComponents from "./components/BenefitsComponents"
import HomeComponents from "./components/HomeComponents"
import HomeSwiperComponents from "./components/HomeSwiperComponents"
import NavbarComponents from "./components/NavbarComponents"
import ServiceComponents from "./components/ServiceComponents"


const App = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-5 bg-white-bg">
      <NavbarComponents/>
      <HomeComponents/>
      <HomeSwiperComponents/>
      <ServiceComponents/>
      <BenefitsComponents/>
    </div>
  )
}

export default App
