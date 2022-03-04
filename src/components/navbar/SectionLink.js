import React from 'react';

export default function SectionLink({name,selectedLink,Icon,onSelect}){
   
    const isActive = (selectedLink === name);

	return(
		<div onClick={()=>onSelect(name)} className={`d-flex mb-4 link ${isActive && 'active-link'}`}>
		    {Icon}
			<h1 className="mb-0 link-text">{name}</h1>
		</div>
		)
}