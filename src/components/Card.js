import React from 'react';
import './card.css'
import {FiPlay} from 'react-icons/fi'

export default function Card(){


	return (
		<div className="card-cont">
			<div className="card-cont__img" ><a href="/" style={{fontSize:"50px",color:"white",textDecoration:"none"}}><FiPlay/></a></div>
			<div className="card-cont__info-cont">
				<span className="card-cont__tite"><h4>Eternals</h4><p><i className="rating">8.5</i>/10</p></span>
				<span className="card-cont__key"><p>LAST UPDATE</p><p>RUNNING TIME</p></span>
				<span className="card-cont__value"><h4>SEPT 8 - 10PM</h4><h4>2HR 30MIN</h4></span>
			</div>
		</div>
		)
}