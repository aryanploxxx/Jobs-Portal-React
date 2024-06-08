import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const linkClass = ( {isActive} ) => (
    isActive ? 'text-white bg-[#416bf3] hover:bg-[#283547] hover:text-white rounded-md px-4 py-2' : 'text-[#283547] hover:bg-gray-900 hover:text-white rounded-md px-4 py-2'
  )

  return (
    <nav className="bg-transparent p-2 h-[15vh]">
      <div className="mx-auto max-w-7xl">
        <div className="flex my-4 mx-10 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={ logo } alt="React Jobs"/>
              <span className="hidden md:block text-[#283547] font-['Poppins'] text-2xl font-bold ml-2">JobsPool</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={ linkClass }>Home</NavLink>
                <NavLink to="/jobs" className={ linkClass }>Candidate Sign-up</NavLink>
                <NavLink to="/add-job" className={ linkClass }>Employee Sign-up</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar