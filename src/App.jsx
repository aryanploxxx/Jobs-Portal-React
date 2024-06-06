import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
// All these imports are required for navigation in single page routers

/*
  -> These routes are no longer required in App.jsx
  import Navbar from './components/Navbar'
  import Hero from './components/Hero'
  import HomeCards from './components/HomeCards'
  import JobListings from './components/JobListings'
  import ViewAllJobs from './components/ViewAllJobs'
*/

import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
// this jobloader can be passed to other components as well ans we can get a job by it's id 
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    // We have used this wrapper element to wrap around the layout for a certain set of pages
    <Route path='/' element = { <MainLayout /> }>
      <Route index element = { <HomePage /> } />
      <Route path='/jobs' element = { <JobsPage /> } />
      <Route path='/jobs/:id' element = { <JobPage /> } loader={ jobLoader } />
      <Route path='*' element = { <NotFoundPage /> } />
    </Route>
  )
)

const App = () => {
    return <RouterProvider router = { router } />;
}

export default App