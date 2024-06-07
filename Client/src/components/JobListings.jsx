// import jobs from '../jobs'
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner'
// jobs is essentially an arrya so we can easily loop through it

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
    // console.log(jobs)
    // const jobListings = isHome ? jobs.slice(0,3) : jobs;

    const [jobs, setJobs] =  useState([]);
    const [loading, setLoading] =  useState(true);

    useEffect( () => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            // will have to changes this code
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                // console.log(data.allJobs)
                setJobs(data.allJobs);
            } catch(err) {
                console.log(`Error: ${err}`)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                { isHome ? 'Recent Jobs' : 'Browse Jobs' }
            </h2>
                { loading? 
                <Spinner loading={loading} /> : 
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job._id} job={job}/>
                        ))}
                    </div>
                </> } 
        </div>
    </section>
  )
}

export default JobListings