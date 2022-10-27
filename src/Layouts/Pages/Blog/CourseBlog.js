import React from 'react';

const CourseBlog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">CORS ORIGIN</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">What is cors? </pa>
                    <p className="mt-2">CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

                        The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                   
                    <div>
                        <p  className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">USING FIREBASE</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">Why we using firebase? </pa>
                    <p className="mt-2">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">What other options do you have to implement authentication? </pa>
                    <ul className="mt-2">Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                   
                    <div>
                        <p  className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">PRIVATE ROUTES</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">How does the private route work? </pa>
                    <p className="mt-2">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                   
                    <div>
                        <p  className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Node.js</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">What is Node?</pa>
                    <p className="mt-2">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">How does Node work?</pa>
                    <p className="mt-2">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                   
                    <div>
                        <p  className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBlog;