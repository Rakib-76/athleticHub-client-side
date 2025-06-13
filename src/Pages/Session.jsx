import React from 'react';


const Session = () => {
    return (
        <div className='max-w-8xl max-auto grid lg:grid-cols-2 mt-10 bg-gradient-to-r from-[#8e2d32] to-[#232459]'>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 ">
                <img
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                    src="https://i.postimg.cc/3RRKDQp1/confident-sportsman-with-headphones-jumping-rope.jpg"
                    alt="Jumping Rope"
                />
                <img
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                    src="https://i.postimg.cc/Z5sZtDXy/man-standing-by-water-guy-sports-clothes-male-summer-park-with-backpack.jpg"
                    alt="Standing by Water"
                />
                <img
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                    src="https://i.postimg.cc/NMpkpmKY/swimming-equipments-sportsmen-male-coach-standing-by-pool-guide-how-use-swimming-hand-paddles.jpg"
                    alt="Swimming Equipment"
                />
                <img
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                    src="https://i.postimg.cc/mDmX50PP/spencer-davis-0-Sh-Ts8i-PY28-unsplash.jpg"
                    alt="Outdoor Sportsman"
                />
            </div>


            <div className='mt-30 p-5'>
                <h1 className='text-6xl font bold text-white'>Training Sessions </h1>
                <p className='text-gray-400 max-w-xl mt-10'>Join our high-intensity, coach-led training sessions designed to boost your strength, endurance, and overall fitness. Whether you're a beginner or an experienced athlete, our programs are tailored to help you meet your goals faster and safer.</p>

                <h1 className='text-4xl text-white mt-10  border-b-2' > Discount up to 50% for merch</h1>
                <p className='text-gray-400 max-w-xl mt-2'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>

                <h1 className='text-4xl text-white mt-10  border-b-2' >24/7 Premium Support</h1>
                <p className='text-gray-400 max-w-xl mt-2'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>

                <h1 className='text-4xl text-white mt-10  border-b-2' > Free weekly course</h1>
                <p className='text-gray-400 max-w-xl mt-2'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>
            </div>
        </div>
    );
};

export default Session;

