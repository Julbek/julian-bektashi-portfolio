import React from "react";
import { projects } from "./data";
import "./globalstyles.css";
import About from "./about";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import { useMemo, useTransition } from "react";
import { lazy, Suspense } from "react";




const ProjectBox = lazy(() => import("./project-box.js"));



export default function Main ({categoriesFilter, allButton, count, ViewProject, darkModeOn}) {
    const [isPending, startTransition] = useTransition();

 
    function BoxHandler() {

        let checkedCategoriesArr = []
            
        categoriesFilter.forEach((el)=>{
            
            if(allButton.checked===true) {
                checkedCategoriesArr.push(el.catName)
            } else if (allButton.checked===false && el.checked===true){
                    checkedCategoriesArr.push(el.catName)
                }
                
            
        })

        
        return (projects.map((project)=>{
            for(let i =0; i< checkedCategoriesArr.length; i++) {
                if(project.cat.includes(checkedCategoriesArr[i])) {

                    return <ProjectBox
                    key={project.name}
                    cover= {project.cover} 
                    name = {project.name} 
                    color = {project.color} 
                    visible={false} 
                    count={count}
                    ViewProject = {ViewProject}
                    darkModeOn = {darkModeOn}
                    href={project.link}
                    />
                     

                }

                
               
            }

            return <ProjectBox 
            key={project.name}
            cover= {project.cover} 
            name = {project.name} 
            color = {project.color} 
            visible={true} 
            count={count}
            ViewProject = {ViewProject}
            darkModeOn = {darkModeOn}
            href={project.link}

            />

        }))
     }
            








    return (
        
        <div className="main">

            
            <div className="box--wrap" >
                
           
                    
               <Suspense fallback={<div>Loading...</div>}>
                   <BoxHandler />
               </Suspense>
                    
         

            </div>
    

            <About darkModeOn={darkModeOn} ViewProject={ViewProject}/>

            
        </div>
    
    )
    
} 