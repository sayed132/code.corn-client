import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleSubmit} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="name" className="text-sm">Full Name</label>
                            <input onChange={handleNameChange} defaultValue={name} id="name" name='name' type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="photoURL" className="text-sm">photoURL</label>
                            <input ref={photoURLRef} defaultValue={user?.photoURL} id="photoURL" name='photoURL' type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="text-sm">Email</label>
                            <input readOnly defaultValue={user?.email} id="email" type="email" name='email' placeholder="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"/>
                        </div>
                       
                        <div className="col-span-full">
                           
                            <div className="flex items-center space-x-2">
                                {/* <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" /> */}
                                <button type="submit" className="px-4 py-2 bg-indigo-800 text-white font-medium border rounded-md dark:border-gray-100">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Profile;