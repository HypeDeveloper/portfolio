import { Outlet } from "react-router-dom";
import Home from "./home";

export function Layout (){
    return(
        <>
            <Outlet/>
        </>
    )
}