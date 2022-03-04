import React from 'react';
import './section.css'

export default function Section(props){
	return(
		<div className="section-cont">
			<h1>{props.name}</h1>
			<div  className="section-cont__children">
				{props.children}
			</div>
		</div>
		)
}