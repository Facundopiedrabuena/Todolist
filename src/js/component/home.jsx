import React, { useState } from "react";
import TareaForm from "./tareaForm.jsx";
import Tarea from "./tarea.jsx";
//create your first component

function Home (){
	const [listaTareas, setListaTareas]= useState ([])

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e,index)=> index !== id);
		setListaTareas(listaFiltrada);
	}


	const nuevaTarea = (tarea) =>{
		setListaTareas([tarea, ...listaTareas])
	}
	return(
		<div>
		<TareaForm nuevaTarea={nuevaTarea}/>
		<div className="lista">
		{
			listaTareas.map((e, index) => <Tarea tarea={e}
			borrar={borrar}
			id={index}/>)
		}
		</div>
	
		</div>
	)
   
	
}

export default Home;
