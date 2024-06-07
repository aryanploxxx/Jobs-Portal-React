/* eslint-disable react/prop-types */
const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job'}) => {
    /*  
        We can call this anything props or whatever, but this is the place where props go
        Either call props this way or destructure it in the beginning itself.
        ({title, subtitle}) and then use them like {title} instead of {props.title} everytime.
        -> We can also define default props - const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job'}) => {return ()}
    */
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero