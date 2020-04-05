import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "popz-bg-wood.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32">
          <div className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Bad to the Bone
                <br className="xl:hidden" />
                <span className="text-orange-600"> South Georgia BBQ</span>
              </h2>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We provide South Georgia style BBQ that people love, day after
                day, event after event. It is not a big secret. People just want
                more of it.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/book-event"
                    className="btn btn-orange w-full flex items-center justify-center px-8 py-3 text-base leading-6 md:py-4 md:text-lg md:px-10"
                  >
                    Book an Event
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/menu"
                    className="btn btn-orange-alt w-full flex items-center justify-center px-8 py-3 text-base leading-6 md:py-4 md:text-lg md:px-10"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-40 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
