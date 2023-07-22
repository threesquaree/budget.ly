'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useSession, signOut} from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const router = useRouter();
  const { data: session } = useSession(); // Fetch the user session information


  const handleBoxClick = () => {
    router.push('/budget');
  };

  const DATA = [{
    title: "Budget",
    icon: (<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
      </svg>),
    description: "Manage and track your monthly budget"
  },{
    title: "Compare",
    icon: (<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 17 18">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"/>
    </svg>),
    description: "Compare and analyze your budget"
  },{
    title: "Set Your Goal",
    icon: (<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
  </svg>),
    description: "Set a goal budget"
  }]

  return (
    <div class="bg-off-white">
  <header className="bg-white">
    <div class="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg p-12 p-30 mx-4 my-4">
      <div className="flex items-center justify-between"> {/* Wrap both headings in a flex container */}
        <h1 className="text-white text-2xl flex items-center"> {/* Add 'flex' and 'items-center' here */}
        <img class="w-6 h-6 mr-2" src="https://img.icons8.com/cotton/100/money--v2.png" color='white' alt="logo"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          budget.ly
        </h1>
        <div className="flex items-center"> {/* Wrap 'Login' and 'Signup' in a flex container */}
          <h3 className="text-white mr-8"> {/* Add some right margin */}
          <button onClick={() => { window.location.href = '/login'; }}>Login</button>
          </h3>
          <h3 className="text-white"> {/* No need for style or class for 'Signup' */}
            <button>Signup</button>
          </h3>
        </div>
      </div>
      <div class="border-t border-white h-1 my-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-lg"></div>
      <div class="absolute top-40" >
      {session?.user ? (
            <>
              <h1 className="text-white text-2xl">Welcome, {session.user.name}</h1>
              {/* You can also display the user's image */}
              {session.user.image && <img src={session.user.image} alt="User Avatar" />}
            </>
          ) : (
            <h1 className="text-white text-2xl">Hey there!</h1>
          )}
          <p className="text-silver text-m mt-2">We're here to help manage your money!</p>
        </div>
      <div className='flex flex-col lg:flex-row gap-3 justify-between'>
      
        {DATA?.map((d, index) => (
          <div onClick={d.title === 'Budget' ? handleBoxClick : undefined} key={index} class="relative w-1/3 h-60 shadow-md bg-white rounded-lg border border-gray-300 top-40 float-left transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-lg p-4">
            <div class="m-6 font-semibold text-2xl">
              {d.icon}
              <div className="flex items-center mt-4">
                <h2>{d?.title}</h2>
              </div>
            </div>
            <div className="flex items-center mt-6 ml-6">
                <span>{d?.description}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
    
  </header>
  <main>
  <div className='flex flex-col lg:flex-row gap-40 justify-between'>
    <div class="relative w-4/5 h-96 shadow-md bg-white rounded-lg border border-gray-300 top-40 left-20 float-left transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-4 mx-6"></div>
    <div class="relative w-3/5 h-96 shadow-md bg-white rounded-lg border border-gray-300 top-40 right-20 float-left transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-4 mx-6"></div>
  </div>
</main>

</div>


  )
}
