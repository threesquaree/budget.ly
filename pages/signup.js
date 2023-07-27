import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const router = useRouter();
  const { data, status } = useSession();
  if (status === 'loading') return <h1> Loading... please wait</h1>;
  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <section className="bg-blue-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <a href="#" className="flex items-center mb-6 text-3xl font-semibold text-blue-600 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://img.icons8.com/cotton/100/money--v2.png" alt="logo" />
          budget.ly
        </a>
        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">Create an account</h1>
        <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between">
                {data?.user ? (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    You are already signed in as {data.user.email}
                  </p>
                ) : (
                  <button
                    onClick={() => signIn('google')}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in with Google
                  </button>
                )}
              </div>
                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
      </div>
    </section>
  );
};

export default SignUpPage;