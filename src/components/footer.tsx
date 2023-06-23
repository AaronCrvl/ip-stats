import React from 'react';
import logo from '../img/ipStatlogo.png'
import gitHubLogo from '../img/github-mark-white.png';

export default function Footer(){
    return(
        <footer className="bg-rose-700 w-full h-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='flex p-2 ml-5 hover:animate-bounce'>
                        <a href='https://github.com/AaronCrvl/'>
                            <img className='w-24 h-24 mr-0 p-1' src={gitHubLogo} /> 
                        </a>
                    </div>                
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/AaronCrvl/" className="hover:underline">DirStat™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
