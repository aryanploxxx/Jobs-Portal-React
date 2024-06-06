import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
        {/* All pages will include a Navbar by default, we don't have to include them now */}
        <Navbar />
        <Outlet />
        {/* Outlet refers to the remaining content */}
        <ToastContainer />
        {/* ToastContainer can be put up anywhere, it is anyways positioned absolute and position can be changed via props */}
    </>
  )
}

export default MainLayout