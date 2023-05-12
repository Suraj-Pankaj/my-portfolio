import React from 'react'
import foodLensp from '../assets/portfolio/foodLensp.png'
import carRentalp from '../assets/portfolio/carRentalp.png'
import textUtilsp from '../assets/portfolio/textUtilsp.png'
import eiAppp from '../assets/portfolio/eiAppp.jpeg'
import portfoliop from '../assets/portfolio/portfoliop.png'
const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        name: "Food Recipe App",
        src: foodLensp,
        link: 'https://github.com/Suraj-Pankaj/FoodRecipeApp.git',
        
      },
      {
        id: 2,
        name: "Car Rental Website",
        src: carRentalp,
        link: 'https://github.com/Suraj-Pankaj/Car-Rental-Website.git',
      },
      {
        id: 3,
        name: "TextUtils React App",
        src: textUtilsp,
        link: 'https://github.com/Suraj-Pankaj/textutils-React.git',
      },
      {
        id: 4,
        name: "Emotional Intelligence App",
        src: eiAppp,
        link: 'https://github.com/Suraj-Pankaj/Emotional-Intelligence-App.git',

      },
      {
        id: 5,
        name: "My Portfolio",
        src: portfoliop,
        link: 'https://github.com/Suraj-Pankaj/my-portfolio.git',


      },
      
      
    ];

    const handleClick = (link) => {
      window.open(link, '_blank');
    };
  
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            {/* <p className="py-6">Check out some of my work right here</p> */}
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 sm:px-0">
            {portfolios.map(({ id, src, link, name }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <div className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                    {name}
                  </div>
                  <button onClick={() => handleClick(link)} className=" px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };



export default Portfolio

