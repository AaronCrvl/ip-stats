import React from 'react';import './App.css';
import logo from '../src/img/ipStatlogo.png'
import gitLogo from '../src/img/github-mark-white.png'
import menulogo from '../src/img/menuBtn.png'
import search from '../src/img/searchBtn.png'
import globe from '../src/img/globe.png'
import Footer from './components/footer';
import MainGrid from './components/mainGrid';
import { useState } from 'react';

export default function App() {
  const [ip, setIp] = useState('')
  const [showSideBar, setShow] = useState(false)
  const [serachedIp, setSerachedIp] = useState(false)
  const [isMyIp, setIsMyIp] = useState(false)
  const handleShow = () => setShow(!showSideBar)

  const selectFeature = (opt : number) =>{
    switch (opt)
    {
      case 1:
        setIp('')
        setSerachedIp(false)
        setIsMyIp(false)
        break;
      case 2:
        setIp('')
        setIsMyIp(true)
        break;
      case 3:
        setIp('')
        if((document.getElementById('ip_adress') as HTMLInputElement).value === null
        || (document.getElementById('ip_adress') as HTMLInputElement).value === "")
        {
          alert("Fill filed with valid IP.")                 
        }
        else{
          console.log((document.getElementById('ip_adress') as HTMLInputElement).value)                    
          setIp((document.getElementById('ip_adress') as HTMLInputElement).value)          
          setSerachedIp(true)
          setIsMyIp(false)
        }
        break;
      default:
        break;        
    }
  }

  return (
    <div className=''>
      <nav className='p-1 h-32 flex bg-rose-700'>
          <div className='text-black w-64 bg-red'>
              <a className=''>
                <div 
                    className='rounded mt-3 ml-3 text-2xl text-white font-bold text-center ' 
                    onClick={handleShow}
                >
                  <img 
                    className='rounded p-3 h-24 h-24 hover:bg-rose-600 hover:mix-soft-light' 
                    src={menulogo}
                  >
                  </img>
                </div>            
              </a>
          </div>
          <div className='ml-auto'>
              <img className='h-24 w-24 p-1 mt-2' src={logo}></img>
          </div>
      </nav>
      <div className='flex h-full'>
        {
          showSideBar ?
          (
            <div className='container p-5 bg-rose-950 w-48 h-auto text-center'>  
              <div className='mt-5'>                
                <div>
                    <div className='rounded text-white text-lg font-bold w-full hover:bg-rose-700'> 
                      <a onClick={()=> selectFeature(1)}>
                        <img className='rounded ml-7 h-24 w-24 p-3' src={search}></img>
                        Search IP
                      </a>                    
                    </div>   
                </div>
                <div className='mt-20'>
                    <div className='rounded text-white text-lg font-bold w-full hover:bg-rose-700'>                      
                      <a onClick={()=> selectFeature(2)}>
                        <img className='rounded ml-7 h-24 w-24 p-3' src={globe}></img>
                        My IP Info
                      </a>
                    </div>   
                </div>
                <div className='mt-20'>
                    <div className='rounded text-white text-lg font-bold w-full hover:bg-rose-700'>                      
                      <img className='rounded ml-7 h-24 w-24 p-3' src={gitLogo}></img>
                      More Projects
                    </div> 
                </div>
              </div>                                     
            </div>
          )
          :
          ( 
            <div></div>            
          ) 
                        
        }
        {/* // */}
        {           
          serachedIp ?
            (
              <MainGrid
                service={ip}
              />   
            )
            :
            (              
              isMyIp ?
              (
                <MainGrid
                  service={ip}
                /> 
              )
              :
              (
                <div className='text-white w-full h-screen p-10 text-slate-200 bg-slate-700'>                                  
                  <div className='mb-auto w-full text-center items-center justify-center'>
                    <p className='text-white text-6xl font-bold mb-10'> Search Any Ip</p>
                    <div className='items-center justify-center'>                    
                      <input 
                        type="text" 
                        id="ip_adress" 
                        className="ml-auto mr-auto bg-gray-50 justify-center items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="174.158.164.190" 
                        required>                        
                      </input>
                      <a  onClick={()=> selectFeature(3)}>
                      <div className='btn  rounded ml-auto mr-auto w-24 bg-slate-600 mt-5 p-2 hover:bg-slate-500'>                        
                        Go!                        
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
              )                           
            )     
        }            
      </div>
      <Footer/>
    </div>
  );
}