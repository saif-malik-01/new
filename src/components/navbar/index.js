import React from 'react';
import Section from './Section';
import SectionLink from './SectionLink';
import {HiHome} from 'react-icons/hi'
import {FaCompass} from 'react-icons/fa';
import {IoMdContact} from 'react-icons/io';
import {RiSlideshow3Fill,RiLogoutBoxRFill} from 'react-icons/ri';
import {MdWatchLater,MdFavorite,MdMovie,MdSmartToy,MdSettings} from 'react-icons/md';

export default function Navbar(){

    const [selectedLink,setSelectedLink] = React.useState("Home");

    function onSelect(name){
    	setSelectedLink(name);
    }

	return(
		<div>
		    <h1 className="nav-logo">Flex</h1>
		    <Section title="MENU" >
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<HiHome/>} name="Home" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<FaCompass/>} name="Discover" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<IoMdContact/>} name="Celebs" />
		    </Section>
		    <Section title="LIBRARY" >
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<MdWatchLater/>} name="Recent" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<MdFavorite/>} name="Top Rated" />
		    </Section>
		    <Section title="CATEGORY" >
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<RiSlideshow3Fill/>} name="TV Shows" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<MdMovie/>} name="Movies" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<MdSmartToy/>} name="Animes" />
		    </Section>
		    <Section title="GENERAL" >
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<MdSettings/>} name="Settings" />
				<SectionLink selectedLink={selectedLink} onSelect={onSelect} Icon={<RiLogoutBoxRFill/>} name="Log out" />
		    </Section>
		</div>
		)
}