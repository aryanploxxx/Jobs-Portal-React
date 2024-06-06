// import jobs from '../jobs'
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
// jobs is essentially an arrya so we can easily loop through it

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
    // console.log(jobs)
    // const jobListings = isHome ? jobs.slice(0,3) : jobs;

    const [jobs, setJobs] =  useState([]);
    const [loading, setLoading] =  useState(false);

    useEffect( () => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:8000/jobs');
                const data = await res.json();
                setJobs(data);
            } catch(err) {
                console.log(`Error: ${err}`)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, []);

    return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                { isHome ? 'Recent Jobs' : 'Browse Jobs' }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { loading? (<h1>Loading...</h1>) : 
                <>
                    {jobs.map((job) => (
                        <JobListing key={job.id} job={job}/>
                    ))}
                </> } 
            </div>
        </div>
    </section>
  )
}

export default JobListings