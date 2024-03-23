import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBars, faEnvelope, faImage, faFilter } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Home = () => {
    const [hasSponsoredPosts, setHasSponsoredPosts] = useState(false);

    const handleToggle = () => {
      setHasSponsoredPosts(!hasSponsoredPosts);
    };

    const [reachAndEngagement, setReachAndEngagement] = useState(400);

    const handleRangeChange = (event) => {
      setReachAndEngagement(Number(event.target.value));
    };
  
    const calculatePercentage = () => {
      const maxRange = 5000;
      const percentage = (reachAndEngagement - 400) / (maxRange - 400) * 100;
      return `${Math.round(percentage)}%`;
    };
  

    const appliedFilters = ['Vegan influencers', 'Instagram'];

    const localCreators = [
      {
        id: 1,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 2,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 3,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 4,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 5,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 6,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 7,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 8,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
      {
        id: 9,
        username: 'bricelyliriano',
        date: 'Feb 27, 2020',
        imageSrc: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-lGIGTAiLPJpRyT3aO7jZRGpZ.png',
        followers: 96,
        likesPerPost: 626.3,
      },
    ];
  
    // State to store the creators
    const [creators, setCreators] = useState([]);
  
  // Simulate an API call with useEffect to set the local array as creators
  useEffect(() => {
  setCreators(localCreators);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <div className="bg-white shadow rounded-lg p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            {/* Left side of the header */}
            <div className="flex items-center">
                
                    <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-yellow-300 shadow-sm text-sm font-medium rounded-md text-black-500 bg-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="gmail-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    >
                    <div style={{marginRight: '125px'}}>
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{fontSize: '35px', marginTop: '5%'}} />
                            Sending invites from
                        </span>
                        <div className='ml-10'>joice@aspireiq.com</div>
                    </div>
                    <i class="fas fa-chevron-down ml-1"></i>
                    </button>

              {/* Other sidebar content here */}
            </div>
            {/* Center of the header */}
            <div className="text-lg font-semibold">
              329 creators found
            </div>
            {/* Right side of the header */}
            <div>
              {/* Top right icons */}
              <button className="text-gray-600 focus:outline-none mr-2">
                <FontAwesomeIcon icon={faThLarge} />
              </button>
              <button className="text-gray-600 focus:outline-none mr-2">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <button className="text-gray-600 focus:outline-none">
                <FontAwesomeIcon icon={faImage} />
              </button>
            </div>
          </div>
    
          {/* Filter and Creator Cards Section */}
          <div className="flex">
            {/* Left Section (1/4 width) */}
            <div className="w-1/4 pr-4">
                
                    <button
                        type="button"
                        className="inline-flex w-full items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="saveandload"
                        aria-expanded="true"
                        aria-haspopup="true"
                        style={{marginBottom: '5%'}}>
                    <div style={{marginRight: '100px'}}>
                        <span className="flex items-center">
                            Save and load searches
                        </span>
                    </div>
                    <i class="fas fa-chevron-down ml-1"></i>
                    </button>

                    <div className="w-full text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <FontAwesomeIcon icon={faFilter} />
                        <a
                        href="#"
                        className="w-full text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-yellow-600 mx-1.5"
                        style={{fontSize: '15px'}}> Text search
                        </a>

                       <a
                        href="#"
                        className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5"
                        style={{fontSize: '15px'}}> Image search
                        </a>
                        <FontAwesomeIcon icon={faImage} />
                    </div>

                <div className="relative" style={{marginTop: '5%', marginBottom: '5%'}}>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Vegan influencers" />
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-semibold block mb-2">
                        Channel
                    </label>
                    <div className="flex items-center">
                        <button className="text-gray-600 focus:outline-none bg-yellow-600 w-12 h-7 rounded-full mr-2">
                            <i className="fab fa-instagram"></i>
                        </button>
                        <button className="text-gray-600 focus:outline-none mr-2">
                        <i className="fab fa-tiktok"></i>
                        </button>
                        <button className="text-gray-600 focus:outline-none mr-2">
                        <i className="fab fa-youtube"></i>
                        </button>
                        <button className="text-gray-600 focus:outline-none mr-2">
                        <i className="fab fa-pinterest"></i>
                        </button>
                        <button className="text-gray-600 focus:outline-none">
                        <i className="fab fa-twitter"></i>
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-semibold block mb-2">
                        Has sponsored posts
                    </label>
                    <div className="flex items-center">
                        <span className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 ${hasSponsoredPosts ? 'bg-green-500' : 'bg-yellow-600'}`}>
                        <span className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out">
                        </span>
                        </span>
                        <button onClick={handleToggle} className="ml-2 focus:outline-none">
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-gray-700 font-semibold block mb-2">
                        Reach & engagement
                    </label>
                    <label>Followers</label>
                    <div className="flex items-center">
                        <input
                        className="w-full"
                        type="range"
                        min="400"
                        max="5000"
                        value={reachAndEngagement}
                        onChange={handleRangeChange}
                        />
                        <p className="ml-2">{calculatePercentage()}</p>
                    </div>
                </div>
            </div>
    
            {/* Right Section (3/4 width) */}
            <div className="w-3/4 pl-4">

                <div className="flex items-center space-x-2 flex-wrap nowrap mb-4">
                    <p className="text-black-500">Searching for:  </p>
                    {appliedFilters.map((filter, index) => (
                        <div key={index} className="bg-blue-700 flex items-center rounded p-1" style={{borderRadius: '25px'}}>
                            <button className="text-white hover:text-red-700 focus:outline-none mr-3">x</button>
                            <span className="text-white" style={{padding: "0px 4px"}}>{filter}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap">
      {/* Map through creators and render CreatorCard for each */}
      {creators.map((creator) => (
        <div key={creator.id} className="w-1/3 px-2 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              alt={`A woman standing in front of a red wall, wearing a white top and patterned skirt by ${creator.username}`}
              className="rounded-lg mb-4"
              height="200"
              src={creator.imageSrc}
              width="200"
            />
            <div className="text-sm">
              <div className="font-bold mb-1">{creator.username}</div>
              <div className="text-gray-600 mb-2">{creator.date}</div>
              <div className="flex items-center justify-between">
                <div className="text-gray-800 font-bold">{creator.followers}K</div>
                <div className="text-gray-500">{creator.likesPerPost} likes/post</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      );
    }
    
export default Home;