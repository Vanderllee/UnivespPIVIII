/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { 
    faFacebookSquare, 
    faInstagramSquare, 
    faPinterestSquare, 
    faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Topbar from '../styles/Topbar.module.css';

export default function TopBar() {



    return (
        <div className={Topbar.top}>

            <div className= {Topbar.topLeft} >
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className={`${Topbar.topIcon}`}>

                        <FontAwesomeIcon icon={faFacebookSquare}/>    
                    
                    </i>  
                </a>

                <i className= {`${Topbar.topIcon}`} >
                    <FontAwesomeIcon icon={faTwitterSquare}/> 
                </i>
                <i className={`${Topbar.topIcon} `} >

                    <FontAwesomeIcon icon={faPinterestSquare}/> 
                </i>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className= {`${Topbar.topIcon} `} >
                        <FontAwesomeIcon icon={faInstagramSquare}/> 
                    </i>
                </a>
            </div>



            <div className={Topbar.topCenter}>
                <ul className={Topbar.topList} >

                    <Link href="/" >
                        <a className={Topbar.topIcon}> HOME</a>
                    </Link>
                    <Link href="/escola" >
                        <a className={Topbar.topIcon}>UNIVESP</a>
                    </Link>

                    <Link href="/alunos" >
                        <a className={Topbar.topIcon}>PROJETO INTEGRADOR -VIII</a>
                    </Link>

    
                    </ul>

            </div>
                
        
            <div className={Topbar.topImg}>
                <img 
                    src="/assets/desastres.jpg" 
                    alt="Imagem da turma"               
                />
            </div>
               
        </div>
    )
}