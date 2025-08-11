import React from 'react';


const Session = () => {
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-4xl font-medium text-center pt-10 dark:text-black'>Training Sessions </h1>            
                <p className='text-gray-600  max-w-9/12 mx-auto mb-5 mt-5 text-center'>Join our high-intensity, coach-led training sessions designed to boost your strength, endurance, and overall fitness. Whether you're a beginner or an experienced athlete, our programs are tailored to help you meet your goals faster and safer.</p>

            </div>

            <div className='max-w-8xl max-auto grid lg:grid-cols-2 '>

                <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 p-10">
                    <img
                        className=" object-cover rounded-xl shadow-md"
                        src="https://i.postimg.cc/65CWsJhG/group-people-working-out-together-outdoors.jpg"
                        alt="Jumping Rope"
                    />
                    <img
                        className="  object-cover rounded-xl shadow-md"
                        src="https://i.postimg.cc/J7bvM19m/full-shot-fit-people-outdoors.jpg"
                        alt="Standing by Water"
                    />
                    <img
                        className=" object-cover rounded-xl shadow-md"
                        src="https://i.postimg.cc/cHf9xmkT/woman-trainer-showing-swimmer-his-results-she-is-holding-clipboard-talking-man.jpg"
                        alt="Swimming Equipment"
                    />
                    <img
                        className=" object-cover rounded-xl shadow-md"
                        src="https://i.postimg.cc/qqh8BM7r/side-view-couple-doing-workout-exercises.jpg"
                        alt="Outdoor Sportsman"
                    />
                </div>


                <div className=' p-5'>
                    <h1 className='text-4xl mt-5 dark:text-black'> Discount up to 50% for merch</h1>
                    <p className='text-gray-400 max-w-xl mt-5'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>

                    <h1 className='text-4xl  mt-5 dark:text-black ' >24/7 Premium Support</h1>
                    <p className='text-gray-400 max-w-xl mt-5'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>

                    <h1 className='text-4xl  mt-5  dark:text-black' > Free weekly course</h1>
                    <p className='text-gray-400 max-w-xl mt-2'>Level up your life—one week at a time. Our free weekly course gives you access to curated content, hands-on training, and community support that helps you stay focused and consistent. Learn something new. Grow every week. And best of all—it’s 100% free.</p>
                </div>
            </div>
        </div>
    );
};

export default Session;
