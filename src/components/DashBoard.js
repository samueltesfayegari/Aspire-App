import React from 'react';
import DashBoard2 from './DashBoard2';

const DashBoard = () => {
    return (
        <>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
            </style>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <header className="flex justify-between items-center py-4">
                        <h1 className="text-3xl font-bold text-gray-900">Aspire</h1>
                        <div className="flex items-center">
                            <div className="mr-4">CW</div>
                            <input className="px-4 py-2 bg-white border rounded" placeholder="Search" type="search" />
                        </div>
                    </header>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Welcome Back, Carlton.</h2>
                            <p className="text-gray-600">Performance Impact</p>
                            <p className="text-sm text-gray-500">The impact from all projects and posts we found via social listening tags and mentions from May 6, 2022 to Aug 11, 2022.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                            <div className="bg-green-100 p-4 rounded-lg">
                                <div className="text-green-600 text-3xl font-semibold">10.3x</div>
                                <div className="text-green-600">↑6%</div>
                                <div className="text-gray-600">Total Value $68,254</div>
                                <div className="text-gray-600">Investment $6,621</div>
                                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">View Impact Dashboard</button>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <div className="text-blue-600 text-3xl font-semibold">33</div>
                                <div className="text-blue-600">↑3%</div>
                                <div className="text-gray-600">Content</div>
                            </div>
                            <div className="bg-purple-100 p-4 rounded-lg">
                                <div className="text-purple-600 text-3xl font-semibold">16.5K</div>
                                <div className="text-purple-600">↑3%</div>
                                <div className="text-gray-600">Impressions</div>
                            </div>
                            <div className="bg-orange-100 p-4 rounded-lg">
                                <div className="text-orange-600 text-3xl font-semibold">8.1K</div>
                                <div className="text-orange-600">↓6%</div>
                                <div className="text-gray-600">Engagements</div>
                            </div>
                            <div className="bg-teal-100 p-4 rounded-lg">
                                <div className="text-teal-600 text-3xl font-semibold">$12.2K</div>
                                <div className="text-teal-600">↑3%</div>
                                <div className="text-gray-600">Sales</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-sm">
                            <div className="text-gray-600">Reach 112.2K ↓</div>
                            <div className="text-gray-600">Views 64.2K ↑</div>
                            <div className="text-gray-600">Conversions 118 ↑</div>
                            <div className="text-gray-600">Creators 18 ↑</div>
                            <div className="text-gray-600">CPM $0.42 ↓</div>
                            <div className="text-gray-600">CPE $2.24 ↓</div>
                            <div className="text-gray-600">TMV $12.5K ↑</div>
                        </div>

                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Projects</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Project A */}
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <img alt="Placeholder image of a woman lying down with pink background" className="rounded-full mr-4" src="https://placehold.co/100x100" />
                                <div className="text-sm">
                                    <div className="text-gray-900 font-semibold">Project A</div>
                                    <div className="text-gray-500">5 tasks pending</div>
                                </div>
                            </div>
                            {/* Project B */}
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <img alt="Placeholder image of a child looking up" className="rounded-full mr-4" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-isdVSPsvwFwWUIh7xTnBx2yS.png?st=2024-01-21T16%3A06%3A36Z&amp;se=2024-01-21T18%3A06%3A36Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A40%3A58Z&amp;ske=2024-01-21T19%3A40%3A58Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=S14TMPc2rzPnBCncCvJU0CEfvwuahnIaprfkz7%2BUomg%3D" width="100" />
                                <div className="text-sm">
                                    <div className="text-gray-900 font-semibold">Project B</div>
                                    <div className="text-gray-500">3 tasks pending</div>
                                </div>
                            </div>
                            {/* Project C */}
                            <div className="bg-white shadow rounded-lg p-4 flex items-center">
                                <img alt="Placeholder image of a man with glasses looking at the camera" className="rounded-full mr-4" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-SMAjk6VDzt0ID4MYkKqZVzf6.png?st=2024-01-21T16%3A06%3A33Z&amp;se=2024-01-21T18%3A06%3A33Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A40%3A24Z&amp;ske=2024-01-21T19%3A40%3A24Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=vIZUy7tUTCSioUX2DWGKUwEMtWL23fY1L/eKNFGdslE%3D" width="100" />
                                <div className="text-sm">
                                    <div className="text-gray-900 font-semibold">Project C</div>
                                    <div className="text-gray-500">65 tasks pending</div>
                                </div>
                            </div>
                            {/* Add New Project */}
                            <div className="bg-white shadow rounded-lg p-4 flex justify-center items-center">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+ New Project</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
