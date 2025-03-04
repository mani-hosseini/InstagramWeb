import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {client} from "../../lib/axios.js";
import {toast} from "react-toastify";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
});

function Signup() {
    const navigate = useNavigate();

    const {
        register, handleSubmit, formState: {errors},
    } = useForm({
        resolver: yupResolver(schema), mode: "onChange",
    });

    async function submitForm(user) {
        console.log("Submitting user data:", user);
        try {
            const response = await client.post("/user/signup", user);
            console.log("Response:", response.data);
            localStorage.setItem("token", response.data.jwt);
            toast.success("User added successfully!");
            navigate("/");
        } catch (err) {
            console.error("Error response:", err.response);
            toast.error("Error creating user");
        }
    }


    return (<section className="flex items-center justify-center min-h-screen gap-x-8">
        <div>
            <img src="../../src/assets/signup/Group%2091.png" className="w-[90%]" alt=""/>
        </div>
        <form
            onSubmit={handleSubmit(submitForm)}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg max-w-[400px] w-full"
        >
            <div className="mb-4 flex justify-center">
                <img src="../../src/assets/signup/insta%20logo.png" alt=""/>
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                    Signup
                </button>
            </div>
            <div className="mt-32 text-center">
                <p className="text-gray-600">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-500 hover:text-blue-600">
                        Login
                    </a>
                </p>
            </div>
        </form>
    </section>);
}

export default Signup;
