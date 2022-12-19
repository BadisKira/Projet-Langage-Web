import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    if (true)
        return children;
    else
        return <Navigate to="/" />
};


export default ProtectedRoute; 