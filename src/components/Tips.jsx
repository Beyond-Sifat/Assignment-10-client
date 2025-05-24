import React from 'react';

const Tips = () => {
    const tips = [
        "Water your plants early in the morning or late in the evening",
        "use pots with proper drainage to avoid root rot",
        "Wipe plant leaves with a damp cloth to keep them clean and breathing",
        "Rotate your plants occasionally to ensure even growth",
        "use natural fertilizers like compost or banana peels etc.",
        "Keep your indoor plants near natural sunlight",
        "Avoid over watering, most plants prefer dry soil",
        "Use mulch to retain soil moisture in outdoor plants",
        "Report your plants annually to refresh the soil"
    ];
    return (
        <div className='my-16 px-6'>
            <h2 className="text-3xl font-bold text-center mb-8">Plant Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {
                    tips.map((tip, index) => (
                        <div
                            key={index}
                            className="bg-green-50 p-4 rounded-2xl shadow hover:shadow-md transition">
                              <p className='text-lg text-gray-700'>🌿{tip}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Tips;