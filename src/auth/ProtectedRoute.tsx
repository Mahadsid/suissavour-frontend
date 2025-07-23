import LoadingButton from "@/components/LoadingButton";
import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0();
    
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <LoadingButton />
            </div>
        )
    }

    if (isAuthenticated) {
        return <Outlet />
    }

    return <Navigate to="/" replace />
    
    // return isAuthenticated ? (<Outlet />) : (<Navigate to="/" replace />)
};
