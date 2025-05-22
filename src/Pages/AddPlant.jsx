import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const AddPlant = () => {
    const { user } = use(AuthContext)


    const handleAddPlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPlantData = Object.fromEntries(formData.entries());
        console.log(newPlantData);

        fetch('http://localhost:3000/plants',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlantData)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('plant added successfully')
            } 
            console.log('after add', data);
        })



        
        fetch('http://localhost:3000/userPlants',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlantData)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('plant added successfully')
            } 
            console.log('after add', data);
        })



    }
    return (
        <div className='p-20'>
            <div className='p-12 '>
                <h1 className='font-semibold text-4xl text-center '>Add Your Plants</h1>
                <p className='text-gray-500 textarea-sm'>The “Add Plant” page allows authenticated users to log a new houseplant into their personal collection. It features a comprehensive form where users can input important details such as the plant's name, image, care level, watering schedule, and current health status. Users also specify the plant's category and relevant dates like the last and next watering dates.All entries are tagged with the user's name and email, ensuring personalized tracking. After successfully submitting the form, users receive a confirmation toast message. This page is protected by authentication and only accessible to logged-in users.</p>
            </div>
            <form onSubmit={handleAddPlant}>
                <div className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                        <fieldset >
                            <label className="label">Plant Name</label>
                            <input name='name' type="text" className="input w-full" placeholder="Name of plant" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Image</label>
                            <input name='image' type="url" className="input w-full" placeholder="URL" />
                        </fieldset>


                        <textarea name='description' placeholder="Plant Description" className="textarea w-full md:col-span-2"></textarea>


                        <fieldset >
                            <label className="label">Water Frequency</label>
                            <input name="wateringFrequency" type="text" className="input w-full" placeholder="Watering" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Health Status</label>
                            <input name="healthStatus" type="text" className="input w-full" placeholder="Health status" />
                        </fieldset>

                        <fieldset >
                            <label className="label">Last Watered</label>
                            <input name='lastWatered' type="date" className="input w-full" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Next Watering</label>
                            <input name='nextWatering' type="date" className="input w-full" />
                        </fieldset>


                        <select name="category" className="w-full border-2 p-2" required>
                            <option value="">Select Category</option>
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                            <option value="medicinal">Medicinal</option>
                        </select>
                        <select name="careLevel" className="w-full border p-2" required>
                            <option value="">Select Care Level</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="difficult">Difficult</option>
                        </select>


                        <fieldset>
                            <label className="label">User Name</label>
                            <input readOnly value={user?.displayName || ""}  name='userName' type="text" className="input w-full" placeholder="Name" />
                        </fieldset>
                        <fieldset >
                            <label className="label">User Email</label>
                            <input readOnly value={user?.email || ""} name='userEmail' type="email" className="input w-full" placeholder="Email" />
                        </fieldset>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Submit Plant</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlant;