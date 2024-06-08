/* eslint-disable react/prop-types */
import background from '../assets/images/background.png'
import ViewAllJobs from './ViewAllJobs'
const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job'}) => {
    /*  
        We can call this anything props or whatever, but this is the place where props go
        Either call props this way or destructure it in the beginning itself.
        ({title, subtitle}) and then use them like {title} instead of {props.title} everytime.
        -> We can also define default props - const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job'}) => {return ()}
    */
  return (
    <section className="h-[85vh] mb-4 ">
      <div className="max-w-7xl bg-left-top bg-contain mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
        <div>
          <h1 className="mb-2 text-4xl text-left font-bold text-[#283547] sm:text-5xl md:text-6xl">
            {/* {title} */}
            The <span className="text-[#416bf3]">Easiest Way to</span><br/> Get Your New Job
          </h1>
          <p className="my-5 leading-tight text-xl text-left text-slate-500">
            {/* {subtitle} */}
            Each month more than 3 million job seekers tum to <br/>
            website in their search for work. Making over<br/>
            140,000 applications every single day.
          </p>
          <ViewAllJobs />
        </div>
        <img className="w-[53vh]" src={ background } alt="React Jobs"/>
      </div>
    </section>
  )
}

export default Hero