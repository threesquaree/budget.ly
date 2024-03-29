'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useSession, signOut} from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const router = useRouter();
  const { data: session, status } = useSession(); // Fetch the user session information


  const handleBoxClick = (title) => {
    switch (title) {
      case 'Budget':
        router.push('/budget');
        break;
      case 'Compare':
        router.push('/compare');
        break;
        case 'Set Your Goal':
        router.push('/goal');
        break;
      // Add more cases for other titles as needed
      default:
        // Handle default case or do nothing
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login'); // Redirect the user to the login page after logout
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
    icon: (<svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
  </svg>),
    description: "Set a goal budget"
  }]

  return (
    <div className="bg-off-white">
      <header className="bg-white">
        <div className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg p-12 p-30 mx-4 my-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src="https://img.icons8.com/cotton/100/money--v2.png"
                alt="logo"
              />
              budget.ly
            </h1>
            <div className="flex items-center">
              {status === 'loading' ? (
                <p className="text-white mr-8">Loading...</p>
              ) : session?.user ? (
                <>
                  {session.user.image && (
                    <img
                      className="w-8 h-8 rounded-full"
                      src={session.user.image}
                      alt="User Avatar"
                    />
                  )}

                  <button onClick={handleLogout} className=" text-white ml-4">
                     Logout
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-white mr-8">
                    <button onClick={() => (window.location.href = '/login')}>
                      Login
                    </button>
                  </h3>
                  <h3 className="text-white">
                    <button onClick={() => (window.location.href = '/signup')}>
                      Signup
                    </button>
                  </h3>
                </>
              )}
            </div>
          </div>
          <div className="border-t border-white h-1 my-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-lg"></div>
          <div className="absolute top-40">
            {status === 'loading' ? (
              <p className="text-white text-2xl">Loading...</p>
            ) : session?.user ? (
              <>
                <h1 className="text-white text-2xl">Welcome, {session.user.name}</h1>
              </>
            ) : (
              <h1 className="text-white text-2xl">Hey there!</h1>
            )}  
            <p className="text-silver text-m mt-2">We're here to help manage your money!</p>
          </div>

      <div className='flex flex-col lg:flex-row gap-3 justify-between'>
      
        {DATA?.map((d, index) => (
          <div onClick={() => handleBoxClick(d.title)} key={index} class="relative w-1/3 h-60 shadow-md bg-white rounded-lg border border-gray-300 top-40 float-left transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-lg p-4">
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
