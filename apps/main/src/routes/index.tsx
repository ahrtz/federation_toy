import { useMemo } from "react"
import BoardListPage from "board/BoardListPage";
import {  useRoutes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const RenderRoutes = () => {
    const routes = useMemo(
        ()=>
        [
            {path:"*" , element:<MainPage/> },        
            {path:"/board" , element:<BoardListPage /> }
        ]
    ,[])

    return useRoutes(routes)
}

export default RenderRoutes