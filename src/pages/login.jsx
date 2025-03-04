function Login() {
    return (
        <section className="flex items-center justify-center min-h-screen gap-x-8">
            <div><img src="../../src/assets/signup/Group%2091.png" className={'w-[90%]'} alt=""/></div>
            <form className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg max-w-[400px] w-full">
                <div className="mb-4 flex justify-center">
                    <img src="../../src/assets/signup/insta%20logo.png" alt="" />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </div>
                <div className="mt-32 text-center">
                    <p className="text-gray-600">
                        Don’t have an account?{' '}
                        <a href="/signup" className="text-blue-500 hover:text-blue-600">
                            Signup
                        </a>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Login;
