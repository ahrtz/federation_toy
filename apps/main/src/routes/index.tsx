import { lazy,  useMemo } from "react"

import {  useRoutes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const BoardListPage = lazy(() => import("board/BoardListPage").catch(()=>{
    return <div>loading Error BoardListPage</div>
}));
const RenderRoutes = () => {
    const routes = useMemo(
        ()=>
        [
            {path:"*" , element:<MainPage/> },        
            {path:"/board" , element:<BoardListPage /> }
        ]
    ,[BoardListPage])

    return ( 
        useRoutes(routes)
    )
}
export default RenderRoutes;