// frontend/components/Appbar.jsx
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Appbar = () => {
    const navigate = useNavigate();

    return <div className="shadow h-14 flex justify-between bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-3xl text-gray-800 dark:text-white">
            Cashify
        </div>
        <div className="flex items-center">
            <ThemeToggle />
            <button 
                onClick={() => navigate("/signup")}
                className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
                Sign Up
            </button>
            <button 
                onClick={() => navigate("/signin")}
                className="mx-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
                Sign In
            </button>
        </div>
    </div>
};
