import SocialNetworks from './SocialNetworks';
import Avatar from '../img/eu.jpeg';
import InformationContainer from "./InformationContainer";

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Renan Miranda"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/1IpK0vFYZmnsBS8M48Dv_j0r5Ezn8pIqz/view?usp=drive_link" target="_blank" className="btn">Download currículo</a>

    </aside>;
};

export default Sidebar;