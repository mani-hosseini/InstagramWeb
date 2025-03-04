import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {client} from "../../lib/axios.js";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().min(6, 'Password must be at least 6 characters').required("Password is required"),
});

function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setError('');
        try {
            const response = await client.post("/api/user/login", data);
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/home");
        } catch (error) {
            const message = error?.response?.data?.message || "Something went wrong";
            setError(message);

            if (message === "User not found") {
                alert("No account found, please sign up!");
                navigate("/signup");
            }
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen gap-x-8">
            <div><img src="../../src/assets/signup/Group%2091.png" className={'w-[90%]'} alt=""/></div>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg max-w-[400px] w-full">
                <div className="mb-4 flex justify-center">
                    <img src="../../src/assets/signup/insta%20logo.png" alt=""/>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        {...register("username")}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
