import React, { useState } from 'react'
import Nav from './Partials/Nav'
import { Instance } from '../utils/Axios';
import { useNavigate } from 'react-router-dom';

const CompleteEmploye = () => {
    const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);
    const [orgName, setOrgName] = useState("");
    const navigate = useNavigate()
    const [isIndependentPractitioner, setIsIndependentPractitioner] = useState(false);
    const [orgDescription, setOrgDescription] = useState("");
    const [orgCity, setOrgCity] = useState("");
    const [logoPreview, setLogoPreview] = useState(null);
    const [file, setfile] = useState(null)

    const handleLogoChange = (event) => {
        setfile(event.target.files[0]);
        if (file) {
            const objectURL = URL.createObjectURL(file);
            setLogoPreview(objectURL);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await Instance.post('/employe/update',{
                organizationname : orgName,
                city: isIndependentPractitioner ? 'Self-Employed' : orgCity,
                description:orgDescription
            });
            navigate('/')
            
        } catch (error) {
            alert(error.response.data.error.message);
        }
        console.log(file);
    }

    return (
        <>
            <Nav isLoggedIn={isLoggedIn} />
            <div className="max-w-lg mx-auto bg-white p-8 mt-24 mb-16 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Organization details</h2>
                <form onSubmit={submitHandler}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="orgName">
                            Organization name
                        </label>
                        <input
                        disabled = {isIndependentPractitioner}
                            type="text"
                            id="orgName"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            placeholder="Organization Name"
                            className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="independentPractitioner"
                            checked={isIndependentPractitioner}
                            onChange={(e) => setIsIndependentPractitioner(e.target.checked)}
                            className="mr-2"
                        />
                        <label className="text-sm" htmlFor="independentPractitioner">
                            I am an independent practitioner (freelancer, architect, lawyer, etc.)
                            hiring for myself and I am NOT hiring on behalf of a company.
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="orgDescription">
                            Organization description
                        </label>
                        <textarea
                            id="orgDescription"
                            value={orgDescription}
                            onChange={(e) => setOrgDescription(e.target.value)}
                            placeholder="Description"
                            className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="orgCity">
                            Organization city
                        </label>
                        <input
                            type="text"
                            id="orgCity"
                            value={orgCity}
                            onChange={(e) => setOrgCity(e.target.value)}
                            placeholder="e.g. Mumbai"
                            className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="orgLogo">
                            Organization logo <span className="text-gray-500">(Recommended)</span>
                        </label>
                        <div className="w-full p-3 border outline-none border-dashed border-gray-300 rounded-lg text-center">
                            <input
                                type="file"
                                id="orgLogo"
                                onChange={handleLogoChange}
                                className="hidden"
                                accept="image/jpeg, image/png, image/gif, image/bmp"
                            />
                            <label
                                htmlFor="orgLogo"
                                className="cursor-pointer text-blue-500 hover:underline"
                            >
                                Upload logo
                            </label>
                            <p className="text-xs text-gray-500 mt-2">
                                Max file size: 1Mb and max resolution: 500px x 500px. File type: jpeg, jpg, png, gif, bmp
                            </p>
                            {logoPreview && (
                                <img
                                    src={logoPreview}
                                    alt="Logo Preview"
                                    className="mt-4 max-h-40 mx-auto"
                                />
                            )}
                        </div>
                    </div>

                    <button className='w-full bg-blue-500 text-white font-medium rounded-lg py-2 mt-3' >Upload</button>
                </form>

            </div>
        </>
    )
}

export default CompleteEmploye