/* eslint-disable @next/next/no-img-element */
import {
    faFacebookSquare,
    faInstagramSquare,
    faPinterestSquare,
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Sidebar from '../styles/Sidebar.module.css';


export default function SideBar() {
    
    return (
        <div className={Sidebar.sidebar}>
            <div className={Sidebar.sidebarItem}>
                <span className={Sidebar.sidebarTitle}>
                    Grupo de Engenharia da Computação
                </span>

                <div className={Sidebar.sidebarItem}>
                    <img
                        src="/assets/imagem.jpeg"
                        alt="Imagem da turma"
                    />
                <p>
                    Somos um grupo de engenharia da computação, <br/>
                    formandos pela Universidade Virtual do Estado <br/>
                    de São Paulo (UNIVESP),
                    polo 3 Lagos.

                </p>
                </div>

            </div>



            <div className={Sidebar.sidebarItem} >
                <span className={Sidebar.sidebarTitle}>
                    SIGA A GENTE
                </span>
                <div className={Sidebar.sidebarSocial}>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <i className={`${Sidebar.sidebarIcon}`} >

                            <FontAwesomeIcon icon={faFacebookSquare} />

                        </i>
                    </a>

                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`}  >
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </i>
                    </a>


                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`} >

                            <FontAwesomeIcon icon={faPinterestSquare} />
                        </i>
                    </a>

                    <a href="#">

                        <i className={`${Sidebar.sidebarIcon}`} >
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    )
}