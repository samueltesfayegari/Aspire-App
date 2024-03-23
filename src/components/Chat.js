import React from 'react';

const Chat = () => {
  return (
    <div className="bg-gray-900 text-white h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 p-6 overflow-y-auto">
          <div className="text-gray-400 text-xs">New chat</div>
          <div className="mt-6">
            <div className="text-gray-300 text-sm mb-2">2023</div>
            <ul>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">OpenCV Images Manipulation</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              <li className="mb-1 text-gray-200 hover:text-white cursor-pointer">Advices</li>
              {/* Add other list items here */}
            </ul>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center text-blue-500 cursor-pointer">
              <span className="material-icons text-base mr-2">add_circle_outline</span>
              <span className="text-sm">Upgrade plan</span>
            </div>
            <div className="flex items-center text-blue-500 cursor-pointer mt-4">
              <span className="material-icons text-base mr-2">add_circle_outline</span>
              <span className="text-sm">Get GPT-4, DALL·E, and more</span>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-10">
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-semibold">ChatGPT 3.5</div>
            <div className="text-gray-500 cursor-pointer">?</div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <img
              alt="Logo placeholder image"
              className="mb-8"
              height="100"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-5ID7TPUM9uKGIlqr0RUye2px.png?st=2024-01-20T22%3A42%3A45Z&amp;se=2024-01-21T00%3A42%3A45Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T20%3A33%3A40Z&amp;ske=2024-01-21T20%3A33%3A40Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=LaKZqAYHG/swKCA%2BMliUSvpY1SqUb86GsQmPeAvMhBM%3D"
              width="100"
            />
            <div className="text-3xl text-center mb-10">How can I help you today?</div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl">
            <button className="bg-gray-700 py-4 px-6 rounded text-sm">Tell me a fun fact about the Roman Empire</button>
            <button className="bg-blue-500 py-4 px-6 rounded text-sm">Tell me about Roman architecture</button>
            <button className="bg-green-500 py-4 px-6 rounded text-sm">Tell me about Roman culture</button>
            <button className="bg-yellow-500 py-4 px-6 rounded text-sm">Tell me about Roman economy</button>
            </div>

            <div className="flex items-center bg-gray-800 rounded-full mt-10 px-4 py-2 w-full max-w-4xl">
              <input className="bg-transparent flex-1 outline-none text-sm placeholder-gray-500" placeholder="Message ChatGPT..." type="text" />
              <button className="text-green-500">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="text-gray-500 text-xs mt-6">ChatGPT can make mistakes. Consider checking important information.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
