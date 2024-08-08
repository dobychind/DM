import Production from "../pages/Production"
import Distribution from "../pages/Distribution"
import Logistic from "../pages/Logistic"

import React from "react"
import MainPage from "../pages/MainPage";


interface RouteConfig {
    path: string;
    component: React.ReactNode;
  }

export const publicRoutes: RouteConfig[] =[ 
    {path: '/', component: <MainPage/> },
    {path: '/production/bread', component: <Production/>},
    {path: '/production/confectionery', component: <Production/>},
    {path: '/distribution', component: <Distribution/>},
    {path: '/logistic', component: <Logistic/>},
]