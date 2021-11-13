/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <div className= {styles.header} >
                <div className= {styles.headerTitles} >
                    <span className= {styles.headerTitleSm} >UNIVESP PI-VIII</span>
                    <span className= {styles.headerTitleLg} >Desastres Naturais</span>
                </div>

                
                    
                
            </div>

            <img 
                className={styles.headerImg}
                src="assets/desastres.jpg" 
                alt="foto do blog" 
            />
        </>
    )
}