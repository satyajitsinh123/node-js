import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import BidDetails from "./Components/Dashboard/BidDetails";
import { AuthProvider } from "./context/AuthContext";


const PrivateRoute = ({ children }) => {  
    const user = localStorage.getItem("user");
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <AuthProvider>
     
                <Routes>
                    {/* Redirect "/" to Signup instead of Login */}
                    <Route path="/" element={<Navigate to="/signup" />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/bid/:id" element={<PrivateRoute><BidDetails /></PrivateRoute>} />
                </Routes>
        
        </AuthProvider>
    );
}

export default App;
