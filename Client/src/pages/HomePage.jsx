import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        {/* Notice how we are not using navbar anymore, this is because of the react layouts, every page will use the layout imported inside them and every page can have different layouts */}
        <Hero />
        <HomeCards />
        <JobListings isHome="true"/>
        {/* <ViewAllJobs /> */}
    </>
  )
}

export default HomePage