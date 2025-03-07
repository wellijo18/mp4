import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.tsx"
import Education from "./pages/education.tsx"
import Employment from "./pages/employment.tsx"
import Contact from "./pages/contact.tsx"
import Projects from "./pages/projects.tsx"
import Activities from "./pages/activities.tsx"
import Header from "./components/header.tsx"



function Root() {
    return (
        <Routes>
            <Route path="/" element={<><Header utitle="Welcome to my Online Resume" /><Home /></>} />
            <Route path="/education" element={<><Header utitle="My Educational Background" /><Education /></>} />
            <Route path="/employment" element={<><Header utitle="My Work Experience" /><Employment /></>} />
            <Route path="/contact" element={<><Header utitle="Where to Contact me!" /><Contact /></>} />
            <Route path="/projects" element={<><Header utitle="My Projects and Languages" /><Projects /></>} />
            <Route path="/activities" element={<><Header utitle="My Activities" /><Activities /></>} />
        </Routes>
    );
}
const router = createBrowserRouter(
    [{path:"*", Component:Root},]
);

export default function App() {
  return <RouterProvider router={router}/>
}
