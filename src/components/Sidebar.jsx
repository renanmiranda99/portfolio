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
        <a href="https://docs.google.com/document/d/1_tLTQ5h671PQyQMT22-LAAH0kSwYpxaw_IkD8bwyo6M/edit?usp=sharing" target="_blank" className="btn">Download currículo</a>

    </aside>;
};

export default Sidebar;
