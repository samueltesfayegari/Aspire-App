import React from 'react';

const Analytics = () => {
    return (
        <>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
            </style>
            <div className="bg-gray-100">
                <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <img alt="Instagram logo" className="mr-2" height="32" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-Kyg51ZzINJSUlr5tDy8la8LN.png?st=2024-01-21T15%3A53%3A02Z&amp;se=2024-01-21T17%3A53%3A02Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A49%3A44Z&amp;ske=2024-01-21T19%3A49%3A44Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=6zZyZhKrlyl4KkD2POoa84zevL/3ps43y2Q6NeH4LaM%3D" width="32" />
                            <span className="text-lg font-semibold">
                                @closetaddictttt
                            </span>
                        </div>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">
                            ADD
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                Gender & Age
                            </h2>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">
                                    MALE
                                </span>
                                <div className="w-2/3">
                                    <div className="bg-green-200 h-2 rounded-full">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                                    </div>
                                </div>
                                <span className="text-sm">
                                    48%
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm">
                                    FEMALE
                                </span>
                                <div className="w-2/3">
                                    <div className="bg-purple-200 h-2 rounded-full">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                                    </div>
                                </div>
                                <span className="text-sm">
                                    48%
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm mt-4">
                                <div>AGE</div>
                                <div>GENDER</div>
                                <div></div>
                                <div>18 – 24</div>
                                <div>43%</div>
                                <div>43%</div>
                                <div>25 – 34</div>
                                <div>5%</div>
                                <div>-- %</div>
                                <div>35 – 44</div>
                                <div>4%</div>
                                <div>-- %</div>
                                <div>45 – 54</div>
                                <div>2%</div>
                                <div>-- %</div>
                                <div>55 – 64</div>
                                <div>0.5%</div>
                                <div>-- %</div>
                                <div>64 +</div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold mb-2">
                                    Audience Interests
                                </h2>
                                <div className="text-sm">
                                    <div>Cute Pets</div>
                                    <div>Red Wine</div>
                                    <div>Home Decor</div>
                                    <div>Channing Tatum</div>
                                    <div>Pug Health</div>
                                    <div className="text-blue-500">See more</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                Country
                            </h2>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                        UNITED STATES
                                    </span>
                                    <div className="w-2/3">
                                        <div className="bg-green-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm">
                                        72%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                        UNITED KINGDOM
                                    </span>
                                    <div className="w-2/3">
                                        <div className="bg-green-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '18%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm">
                                        18%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                        SPAIN
                                    </span>
                                    <div className="w-2/3">
                                        <div className="bg-green-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '7%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm">
                                        7%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                        KOREA
                                    </span>
                                    <div className="w-2/3">
                                        <div className="bg-green-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '2%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm">
                                        2%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">
                                        MEXICO
                                    </span>
                                    <div className="w-2/3">
                                        <div className="bg-green-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '0.1%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm">
                                        0.1%
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold mb-4">
                                    City
                                </h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">
                                            BARCELONA
                                        </span>
                                        <div className="w-2/3">
                                            <div className="bg-green-200 h-2 rounded-full">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm">
                                            50%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">
                                            NEW YORK
                                        </span>
                                        <div className="w-2/3">
                                            <div className="bg-green-200 h-2 rounded-full">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '17%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm">
                                            17%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">
                                            LONDON
                                        </span>
                                        <div className="w-2/3">
                                            <div className="bg-green-200 h-2 rounded-full">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '7%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm">
                                            7%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">
                                            PARIS
                                        </span>
                                        <div className="w-2/3">
                                            <div className="bg-green-200 h-2 rounded-full">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '2%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm">
                                            2%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">
                                            MEXICO CITY
                                        </span>
                                        <div className="w-2/3">
                                            <div className="bg-green-200 h-2 rounded-full">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '0.1%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-sm">
                                            0.1%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                Post Performance
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-eye text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            AVG. IMPRESSION / POST
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        30%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-chart-bar text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            POST IMPRESSION RATIO
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        50%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-comments text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            COMMENT SENTIMENT
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        54%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-book-open text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            STORIES IMPRESSION RATIO
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        86%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-save text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            AVG. SAVES PER POST
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        20
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-heart text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            AVG. LIKES PER POST
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        60
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-comment-dots text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            AVG. COMMENTS PER POST
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        50
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full mr-2">
                                            <i className="fas fa-exchange-alt text-blue-500"></i>
                                        </div>
                                        <span className="text-sm">
                                            LIKES TO COMMENT RATIO
                                        </span>
                                    </div>
                                    <span className="text-sm">
                                        2:1
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;
