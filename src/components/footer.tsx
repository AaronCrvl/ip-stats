import React from 'react';
import logo from '../img/dirstatlg.png'

export default function Footer(){
    return(
        <footer className="bg-cyan-950 w-full h-42 md:bg-white red:bg-cyan-800 md:dark:bg-cyan-900 red:border-cyan-700">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='flex p-2 ml-5 hover:animate-bounce'>
                    <img className='h-24 w-24 p-1 mt-2' src={logo}></img> 
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href='https://github.com/AaronCrvl/toy-land-web.git'>
                                {/* <img className='w-10 h-10 mr-0 p-1' src={gitHubLogo} /> */}
                            </a>
                        </li>                        
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/AaronCrvl/" className="hover:underline">DirStat™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
