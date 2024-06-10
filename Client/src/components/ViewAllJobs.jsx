import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className="m-auto my-10">
      <Link to="/jobs" className="block bg-[#416bf3] hover:bg-[#698af6] w-1/2 text-white text-center py-3 px-2 rounded-md">View All Jobs</Link>
    </section>
  )
}

export default ViewAllJobs