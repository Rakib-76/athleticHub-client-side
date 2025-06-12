import React from 'react';

const Trainer = () => {
    return (
        <div className='mt-10'>
                <h1 className='text-blue-800 text-center text-6xl font-medium'>Our top Trainers</h1>

            <div className='grid grid-cols-4'>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.postimg.cc/3RRKDQp1/confident-sportsman-with-headphones-jumping-rope.jpg"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ben Nebert</h2>
                        <p>Professional Trainer</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.postimg.cc/Z5sZtDXy/man-standing-by-water-guy-sports-clothes-male-summer-park-with-backpack.jpg"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pieter Noël</h2>
                        <p>Professional gym trainer</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.postimg.cc/NMpkpmKY/swimming-equipments-sportsmen-male-coach-standing-by-pool-guide-how-use-swimming-hand-paddles.jpg"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Thomas Stanley</h2>
                        <p>Swimming Trainer</p>
                       
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.postimg.cc/mDmX50PP/spencer-davis-0-Sh-Ts8i-PY28-unsplash.jpg"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Raymond Little</h2>
                        <p>Profession Trainer</p>
                        
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Trainer;