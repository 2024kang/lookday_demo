import {Outlet} from "react-router-dom"
import TitleBar from "../components/TitleBar"
import VideoCarousel from "../components/VideoCarousel"
import MyCarousel from "../components/MyCarousel"
import FilterBar from "../components/FilterBar"
import ProductRanking from "../components/ProductRanking"

const RootLayout = () => {
  return (
    <>         <TitleBar />

    
    <Outlet/></>
   
  )
}

export default RootLayout