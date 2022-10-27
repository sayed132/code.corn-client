import React from 'react';

const CourseFaq = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">এই কোর্স কাদের জন্য?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য। যারা প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কে তেমন কিছুই জানে না, তাদের জন্য। এমনকি যারা চার বছর CSE পড়েও কিভাবে কি করবে দিশা করতে পারতেছে না, গুছিয়ে তেমন কিছু শিখেনি, তারাও এই কোর্স থেকে কমপ্লিট ওয়েব ডেভেলপমেন্ট শিখে চাকরিতে এপ্লাই করতে পারবে। 😀</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">কোর্সের মধ্যে কি কি আছে?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">সেটা কোর্স কারিকুলাম দেখলেই বুঝতে পারবে। তবে ছোট করে বললে, বলা যায়: বর্তমান সময়োএকজন সিরিয়াস ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই আছে এই কোর্সে। একদম ছোট করে বললে ধরো HTML, CSS থেকে শুরু করে bootstrap, JavaScript, Git, ES6, REST API, server, JSON তো আছেই। তার সাথে সাথে আছে বর্তমান সময়ে সবচেয়ে বেশি চাকরি যে ফ্রেমওয়ার্ক সেই React, advanced React দিয়ে কমপ্লিট ওয়েবসাইট বানানোর সিস্টেম আছে। বাড়তি হিসেবে আছে node, database (mongodb), debug, problem solving, interview questions সহ আরো অনেক জিনিস। আর পুরা কোর্সে তোমাকে ১১টা ওয়েবসাইট করে দেখানো হবে। আরো ১১টা ওয়েবসাইট থাকবে তোমার হোমওয়ার্ক হিসেবে। এই পুরা জিনিস কোন রকমে শেষ করতে পারলে, একজন উন্নতমানের জুনিয়র ওয়েব ডেভেলপার না হয়ে উপায় থাকবে না। </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">কোর্সটি করতে সিক্ষাগত যোগ্যতা কেমন থাকা লাগবে?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক, পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে। তবে অবশ্যই সময় দিতে হবে ৬-৮ ঘন্টা। মিনিমাম ৪-৫ ঘন্টা। </p>
                    </details>
                    
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">আমার কি কি জিনিস লাগবে?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">প্রথমত লাগবে ডেডিকেটেড সময়। প্রতিদিন মাস্ট ৬-৮ ঘন্টা। সম্ভব হলে ৮-১০ঘন্টা( সময় না দিতে পারলে। হার্ডওয়ার্ক করার ইচ্ছা না থাকলে কোর্সে এনরোল করে কোন লাভ হবে না।) দ্বিতীয়ত লাগবে একটা ল্যাপটপ বা একটা কম্পিউটার (যেখানে node, Visual Studio Code টাইপের সফটওয়্যার ইনস্টল করা যায়) আর তৃতীয়ত লাগবে মিনিমাম ২-১০ এমবিপিএস এর ইন্টারনেট। ব্রডব্যান্ড হলেই ভালো যাতে কোর্সের ভিডিও ভালোভাবে দেখা যায়। প্রফেশনাল ওয়েব ডেভেলপার হতে হলে মিনিমাম ৪ মাস সিরিয়াস হার্ডওয়ার্ক এর কথা মাথায় রেখে নামতে হবে।</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">এগুলো ছাড়াও আমার আর কিছু প্রশ্ন আছে</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">কোন টেনশন নাই। তোমার যত প্রশ্ন আছে সেগুলা মনের মাধুরী মিশিয়ে web@programming-hero.com এ পাঠিয়ে দাও। আমরা যত দ্রুত সম্ভব রিপ্লাই দিয়ে দিবো।</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default CourseFaq;