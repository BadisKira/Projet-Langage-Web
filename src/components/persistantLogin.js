import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Refresh } from "@mui/icons-material";



const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    //const refresh = useRefreshToken() ;
    //const {auth} = useAuth() ;

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.log(err);
            } finally { setIsLoading(false) }
        }


        !auth?.acessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);


    useEffect(() => {
        console.log("isLoading", isLoading);
    }, [isLoading])
};