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
  // useState
  const [ip, setIp] = useState('')
  const [showSideBar, setShow] = useState(false)
  const [serachedIp, setSerachedIp] = useState(false)  

  // functions
  const handleShow = () => setShow(!showSideBar)

  const selectIpTab = () =>{    
    setSerachedIp(false)    
  }

  const selectMyIpTab = () =>{
    setIp('')
    setSerachedIp(true)
  }

  const searchIp = () =>{
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
    }
  }

  const selectFeature = (opt : number) =>{
    switch (opt)
    {
      case 1:
        selectIpTab()
        break;
      case 2:
        selectMyIpTab()
        break;
      case 3:
        searchIp()
        break;
      default:
        break;        
    }
  }

  // tsx
  return (
    <div className='w-full bg-slate-700'>
      <nav className='p-1 h-auto flex bg-rose-700'>
          <div className='text-black bg-red w-1/3'>                     
            <img 
              className='rounded mt-3 ml-3 p-3 h-24 h-24 hover:mix-blend-luminosity'
              onClick={handleShow}
              src={menulogo}
            >
            </img>                                     
          </div>
          <div className='w-1/3'>
            <p className='text-6xl text-white capitalize font-bold text-center mt-5'>iP stats</p>
          </div>
          <div className='w-1/3'>
              <img className='h-24 w-24 ml-auto p-1 mt-2' src={logo}></img>
          </div>
      </nav>
      <div className='flex w-full h-full bg-slate-700'>
        {/* Side Bar */}
        {
          showSideBar ?
          (
            <div className='container p-5 bg-rose-950 w-48 h-auto text-center'>                                     
              <div className='rounded h-1/4 text-white text-xl font-bold capitalize w-full' onClick={()=> selectFeature(1)}>
                <img className='rounded ml-7 h-24 w-24 p-3 hover:animate-pulse' src={search}></img>
                search ip
              </div>                                                                         
              <div className='rounded h-1/4 text-white text-xl font-bold capitalize w-full' onClick={()=> selectFeature(2)}>                                                    
                <img className='rounded ml-7 h-24 w-24 p-3 hover:animate-pulse' src={globe}></img>
                my ip info
              </div>                                                                      
            </div>
          )
          :
          ( 
            <div></div>            
          )                         
        }        
        {/* Main Content */}
        {           
          serachedIp ?
            (                                        
              <MainGrid
                service={ip}
              />                
            )
            :
            (                        
              <div className='text-white w-full h-screen p-10 text-slate-200 bg-slate-700'>                                  
                <div className='text-center mt-80 items-center justify-center'>
                  <p className='text-white text-8xl font-bold mb-10'>Find IP</p>
                  <div className='items-center justify-center'>                    
                    <input 
                      type="text" 
                      id="ip_adress" 
                      className="ml-auto mr-auto bg-gray-50 justify-center items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="174.158.164.190" 
                      required>                        
                    </input>
                    <a  onClick={()=> selectFeature(3)}>
                    <div className='btn  rounded ml-auto mr-auto w-96 bg-slate-600 mt-5 p-2 hover:bg-slate-500'>                        
                      Go!                        
                    </div>
                    </a>
                  </div>
                </div>
              </div>                                         
            )     
        }            
      </div>
      <Footer/>
    </div>
  );
}