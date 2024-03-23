import React from 'react';

const EventOrganizer = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Column */}
        <div className="md:w-1/2 bg-white p-8">
          <div className="flex items-center mb-6">
            <img alt="Profile picture of Essa B." className="rounded-full w-12 h-12" height="50" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-egzg8RfTGNX8PZqg4B8wWWfS.png?st=2024-01-21T15%3A45%3A53Z&amp;se=2024-01-21T17%3A45%3A53Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-21T06%3A03%3A16Z&amp;ske=2024-01-22T06%3A03%3A16Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=1Y/l8Huj/wAkVircoTzq6gPYlHrnFlFxIUtUQHz%2BPBQ%3D" width="50" />
            <div className="ml-4">
              <h2 className="font-semibold text-lg">
                @closetaddicttt (Essa B.)
              </h2>
              <p className="text-gray-500">
                Seattle, WA, United States
              </p>
              <div className="flex items-center mt-1">
                <p className="text-blue-500 font-semibold">
                  20.3k Followers
                </p>
                <span className="mx-2">
                  •
                </span>
                <p className="text-yellow-400 font-semibold">
                  1
                  <i className="fas fa-star">
                  </i>
                </p>
                <span className="mx-2">
                  •
                </span>
                <p>
                  4.5
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Repeat this block for each image */}
            <img alt="Person in a blue outfit posing" className="rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-aKArXcxZFl6atR2LUWx4HmHR.png?st=2024-01-21T15%3A45%3A57Z&amp;se=2024-01-21T17%3A45%3A57Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A39%3A16Z&amp;ske=2024-01-21T19%3A39%3A16Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=Izw234XMnP52JCmnmtnAiGKDCjWv7wDykiEQiGxQgU0%3D" width="100" />
            <img alt="Person in a yellow dress smiling" className="rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-hQE6iX4CoAqpwEnXIJ9nnQIb.png?st=2024-01-21T15%3A45%3A54Z&amp;se=2024-01-21T17%3A45%3A54Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A39%3A27Z&amp;ske=2024-01-21T19%3A39%3A27Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=rXSYrE91RlpJHOIMXSRNREB/VycT%2Br2Nk18h9g4SSSM%3D" width="100" />
            <img alt="Close-up of a person's face" className="rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-MlZymHEloVz0HpIPAVz4Vnuz.png?st=2024-01-21T15%3A43%3A36Z&amp;se=2024-01-21T17%3A43%3A36Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A40%3A25Z&amp;ske=2024-01-21T19%3A40%3A25Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=kvBYl2VsnzqEk2sGXuUBBrY4p9eKLxdFHg6imUmaj5k%3D" width="100" />
            {/* Add more images here */}
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 bg-white p-8">
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">
              Engagement Rate Comparison
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                BETA
              </span>
            </h3>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img alt="Profile picture of @closetaddict" className="rounded-full w-8 h-8" height="50" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RbAgKwedOl1mP2uS3sfNVjv5/user-QlWjTqmmHdoAF32gOMi1ckoA/img-yLXCc5uJvcVjegiD3MgL1EWx.png?st=2024-01-21T15%3A45%3A54Z&amp;se=2024-01-21T17%3A45%3A54Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-20T19%3A42%3A21Z&amp;ske=2024-01-21T19%3A42%3A21Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=K9%2BLF8Lz4QRai87EiInmwwv3LGPHjQxwfnxyHo9P8Bs%3D" width="50" />
                <p className="font-semibold ml-2">
                  @closetaddict
                </p>
              </div>
              <p className="text-green-500 font-semibold">
                8.29% (7.5x Higher)
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Creator organic engagement rate is 7.5x higher than the average of the Mega segment (&gt;600,000 followers)
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">
              Audience Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">
                  Avg. Engagement
                </p>
                <p>
                  10,394
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Aud. Authenticity
                </p>
                <p>
                  80% Healthy
                </p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chart-line mr-2">
                </i>
                <div>
                  <p className="font-semibold">
                    Impression/Story
                  </p>
                  <p>
                    60%
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-venus-mars mr-2">
                </i>
                <div>
                  <p className="font-semibold">
                    Gender
                  </p>
                  <p>
                    Female 75%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventOrganizer;
