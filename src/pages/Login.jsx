import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className=" min-h-screen bg-neutral-800 flex justify-center mt-60">
            <div className="mt-14">
                <div className="text-white flex flex-wrap justify-center items-start">
                    <div className="flex flex-col min-w-96 sm:w-1/2 lg:w-1/3 p-5 m-2 bg-neutral-700 rounded-lg">
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className='text-yellow-600 text-3xl text-center'>Login</h1>
                                <h2 className='text-gray-400 text-center mb-2'>Create an account</h2>
                                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-400 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-400 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-center text-yellow-900 text-sm mt-4">
                  You do not have an account?{' '}
                  <Link to="/signup" className="text-yellow-600 hover:text-yellow-800">
                    Sign Up
                    </Link>
                  </p>
                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;