import React from 'react';

const PossibleHomePartner = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          body {
            font-family: 'Open+Sans', sans-serif;
          }
        `}
      </style>
      <div className="bg-gray-100">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-white p-4 flex flex-col">
            <div className="flex items-center space-x-4 p-2 mb-5">
              <img
                alt="Company logo"
                className="rounded-full h-12 w-12"
                height="50"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-YHljOy4kRoYYOZJkDUFOsEUg.png?st=2024-01-21T16%3A01%3A38Z&amp;se=2024-01-21T18%3A01%3A38Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A34%3A54Z&amp;ske=2024-01-21T19%3A34%3A54Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=Wl5OECz6K52dbvsPGfARUJhC/ok3o0X6P5dRfpmH/G0%3D"
                width="50"
              />
              <span className="text-gray-500 font-bold">Aspire</span>
            </div>
            <div className="flex flex-col space-y-1">
              <a className="flex items-center space-x-2 px-4 py-3 bg-gray-200 text-gray-700 rounded-md" href="#">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
              <a className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-md" href="#">
                <i className="fas fa-archive"></i>
                <span>Projects</span>
              </a>
              <a className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-md" href="#">
                <i className="fas fa-users"></i>
                <span>Members</span>
              </a>
              <a className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-md" href="#">
                <i className="fas fa-chart-line"></i>
                <span>Recruit</span>
              </a>
              <a className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-md" href="#">
                <i className="fas fa-envelope"></i>
                <span>Inbox</span>
              </a>
              <a className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-700 rounded-md" href="#">
                <i className="fas fa-flag"></i>
                <span>Reporting</span>
              </a>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-white border-b-4 border-indigo-600">
              <div className="flex items-center">
                <button className="text-gray-500 focus:outline-none lg:hidden">
                  <i className="fas fa-bars"></i>
                </button>
                <div className="relative mx-4 lg:mx-0">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <i className="fas fa-search text-gray-500"></i>
                  </span>
                  <input className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-300" placeholder="Search" type="text" />
                </div>
              </div>
              <div className="flex items-center">
                <button className="flex mx-4 text-gray-600 focus:outline-none">
                  <i className="fas fa-bell"></i>
                </button>
                <div className="relative">
                  <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                    <img
                      alt="Your avatar"
                      className="h-full w-full object-cover"
                      height="32"
                      src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-nq8U7VUkB30i499brwfNPqAp.png?st=2024-01-21T15%3A59%3A19Z&amp;se=2024-01-21T17%3A59%3A19Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A39%3A00Z&amp;ske=2024-01-21T19%3A39%3A00Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=dHYZS%2BsZv3Xq%2BEf8ZZM5UfnmLLFqZl6kcEZUiamGspg%3D"
                      width="32"
                    />
                  </button>
                </div>
              </div>
            </header>
            {/* Main */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="container mx-auto px-6 py-8">
                <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
                <div className="mt-4">
                  {/* Content here */}
                  <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center justify-between pb-6">
                      <div>
                        <h2 className="text-gray-600 font-semibold">Create Sales Tracking Promo Codes</h2>
                        <span className="text-xs">4 people</span>
                      </div>
                      <div className="flex items-center justify-end">
                        <div className="flex bg-gray-200 items-center p-2 rounded-md">
                          <button className="text-gray-600 focus:outline-none mx-1 bg-white shadow p-2">
                            <i className="fas fa-th"></i>
                          </button>
                          <button className="text-gray-600 focus:outline-none mx-1">
                            <i className="fas fa-list"></i>
                          </button>
                        </div>
                        <div className="ml-4">
                          <button className="text-gray-600 focus:outline-none mx-1 p-2">
                            <i className="fas fa-chevron-left"></i>
                          </button>
                          <button className="text-gray-600 focus:outline-none mx-1 p-2">
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </div>
                        <div className="ml-4">
                          <button className="text-gray-600 focus:outline-none mx-1 p-2">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">IG username</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Added to Offer</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Existing Offer Codes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    alt="Glen Yeh avatar"
                                    className="w-full h-full rounded-full"
                                    height="40"
                                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-Nz6xjhlZdOjoGpkzvUSjgCr5.png?st=2024-01-21T16%3A01%3A36Z&amp;se=2024-01-21T18%3A01%3A36Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A36%3A08Z&amp;ske=2024-01-21T19%3A36%3A08Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=%2B1cLCVvjdydHtG4vnkIImEo6zG6PckAl%2BvtsjA6wMmQ%3D"
                                    width="40"
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">Glen Yeh</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">glenyeh@email.com</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">@glenyeah</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">No</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">-</p>
                            </td>
                          </tr>
                          {/* Repeat for each person */}
                          {/* ... */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PossibleHomePartner;
