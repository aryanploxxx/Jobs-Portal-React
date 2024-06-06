import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        {/* All pages will include a Navbar by default, we don't have to include them now */}
        <Navbar />
        <Outlet />
        {/* Outlet refers to the remaining content */}
    </>
  )
}

export default MainLayout