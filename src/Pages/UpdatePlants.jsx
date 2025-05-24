import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
    const { user } = useContext(AuthContext)
    const { _id, name, image, nextWatering, lastWatered, healthStatus, wateringFrequency, description, category, careLevel } = useLoaderData()
    const handleUpdatePlants = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatePlantData = Object.fromEntries(formData.entries());
        console.log(updatePlantData);

        fetch(`https://assignment-10-server-sifats-projects-538560cb.vercel.app/plants/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePlantData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='p-20'>
            <div className='p-12 '>
                <h1 className='font-semibold text-4xl text-center '>Update Your Plants Information</h1>
                {/* <p className='text-gray-500 textarea-sm'>The “Add Plant” page allows authenticated users to log a new houseplant into their personal collection. It features a comprehensive form where users can input important details such as the plant's name, image, care level, watering schedule, and current health status. Users also specify the plant's category and relevant dates like the last and next watering dates.All entries are tagged with the user's name and email, ensuring personalized tracking. After successfully submitting the form, users receive a confirmation toast message. This page is protected by authentication and only accessible to logged-in users.</p> */}
            </div>
            <form onSubmit={handleUpdatePlants}>
                <div className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                        <fieldset >
                            <label className="label">Plant Name</label>
                            <input name='name' type="text" className="input w-full" defaultValue={name} placeholder="Name of plant" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Image</label>
                            <input name='image' type="url" className="input w-full" defaultValue={image} placeholder="URL" />
                        </fieldset>


                        <textarea name='description' placeholder="Plant Description" defaultValue={description} className="textarea w-full md:col-span-2"></textarea>


                        <fieldset >
                            <label className="label">Water Frequency</label>
                            <input name="wateringFrequency" type="text" className="input w-full" defaultValue={wateringFrequency} placeholder="Watering" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Health Status</label>
                            <input name="healthStatus" type="text" className="input w-full" defaultValue={healthStatus} placeholder="Health status" />
                        </fieldset>

                        <fieldset >
                            <label className="label">Last Watered</label>
                            <input name='lastWatered' type="date" defaultValue={lastWatered} className="input w-full" />
                        </fieldset>
                        <fieldset >
                            <label className="label">Next Watering</label>
                            <input name='nextWatering' type="date" defaultValue={nextWatering} className="input w-full" />
                        </fieldset>


                        <select name="category" defaultValue={category} className="w-full border-2 p-2" required>
                            <option value="">Select Category</option>
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                            <option value="medicinal">Medicinal</option>
                        </select>
                        <select name="careLevel" defaultValue={careLevel} className="w-full border p-2" required>
                            <option value="">Select Care Level</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="difficult">Difficult</option>
                        </select>


                        <fieldset>
                            <label className="label">User Name</label>
                            <input readOnly value={user?.displayName || ""} name='userName' type="text" className="input w-full" placeholder="Name" />
                        </fieldset>
                        <fieldset >
                            <label className="label">User Email</label>
                            <input readOnly value={user?.email || ""} name='userEmail' type="email" className="input w-full" placeholder="Email" />
                        </fieldset>
                    </div>
                    <button type="submit" className="mt-2 w-full bg-green-600 text-white py-2 rounded">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePlants;