import React from 'react';

const DashBoard2 = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Welcome Back, Carlton.
                    </h1>
                    <div className="flex items-center">
                        <div className="relative">
                            <input className="pl-10 pr-4 py-2 border rounded-lg text-sm" placeholder="Search" type="search" />
                            <div className="absolute left-3 top-2">
                                <i className="fas fa-search text-gray-400"></i>
                            </div>
                        </div>
                        <div className="ml-4">
                            <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 22.3l-2.9-2.9c1.5-2.1 2.4-4.9 2.4-7.8 0-7.2-5.8-13-13-13S0 4.8 0 12s5.8 13 13 13c2.9 0 5.6-1 7.8-2.4L22.3 24 24 22.3zM4 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </header>
                <section className="mt-8">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Performance Impact
                    </h2>
                    <p className="text-sm text-gray-600">
                        The impact from all projects and posts we found via social listening tags and mentions from May 6, 2022 to Aug 11, 2022.
                    </p>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Impact Value */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        10.3x
                                    </p>
                                    <p className="ml-2 text-sm font-semibold text-green-600">
                                        6%
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-600">
                                        Impact Value
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900">
                                        Total Value $68,254
                                    </span>
                                    |
                                    <span className="font-medium text-gray-600">
                                        Investment $6,621
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        10.3x
                                    </p>
                                    <p className="ml-2 text-sm font-semibold text-green-600">
                                        6%
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-600">
                                        Impact Value
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900">
                                        Total Value $68,254
                                    </span>
                                    |
                                    <span className="font-medium text-gray-600">
                                        Investment $6,621
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        10.3x
                                    </p>
                                    <p className="ml-2 text-sm font-semibold text-green-600">
                                        6%
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-600">
                                        Impact Value
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900">
                                        Total Value $68,254
                                    </span>
                                    |
                                    <span className="font-medium text-gray-600">
                                        Investment $6,621
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        10.3x
                                    </p>
                                    <p className="ml-2 text-sm font-semibold text-green-600">
                                        6%
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-600">
                                        Impact Value
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900">
                                        Total Value $68,254
                                    </span>
                                    |
                                    <span className="font-medium text-gray-600">
                                        Investment $6,621
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">
                                        10.3x
                                    </p>
                                    <p className="ml-2 text-sm font-semibold text-green-600">
                                        6%
                                    </p>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-600">
                                        Impact Value
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900">
                                        Total Value $68,254
                                    </span>
                                    |
                                    <span className="font-medium text-gray-600">
                                        Investment $6,621
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Projects
                        </h2>
                        <button className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            + New Project
                        </button>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Project 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <img alt="Placeholder image of a woman lying down with pink background" className="w-full h-32 object-cover" src="https://placehold.co/300x200" />
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Project Title
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Description of the project goes here.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <img alt="Placeholder image of a child in a field" className="w-full h-32 object-cover" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-ag41vFCjNwogXaIsn6e8Z8Xu.png?st=2024-01-21T16%3A06%3A36Z&amp;se=2024-01-21T18%3A06%3A36Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A45%3A09Z&amp;ske=2024-01-21T19%3A45%3A09Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=ZN9YmLPU6cDCIsxpfEEsT3R%2Bg3zw6B0dpvMcKDRA/DY%3D" width="300" />
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Project Title
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Description of the project goes here.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <img alt="Placeholder image of a person with a camera" className="w-full h-32 object-cover" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-OXmYQCxOGzsR1iZa6QcVLLz8.png?st=2024-01-21T16%3A06%3A34Z&amp;se=2024-01-21T18%3A06%3A34Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A37%3A26Z&amp;ske=2024-01-21T19%3A37%3A26Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=%2BGGOK7zI5RiMey%2Bpo/r6npAcgD2NKaMIXZ609nM8KSM%3D" width="300" />
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Project Title
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Description of the project goes here.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Project 4 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <img alt="Placeholder image of a person working on a laptop" className="w-full h-32 object-cover" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-iCGSHNtALDN60PcmrkaVXgUo.png?st=2024-01-21T16%3A06%3A32Z&amp;se=2024-01-21T18%3A06%3A32Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A44%3A49Z&amp;ske=2024-01-21T19%3A44%3A49Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=i%2B8xaFOQpHoO5RdQbu2Xi9Hl2Wz/Sc3QCpbPUgrh2Vo%3D" width="300" />
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        Project Title
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Description of the project goes here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DashBoard2;
