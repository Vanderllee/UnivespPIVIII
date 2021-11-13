
import Sidebar from '../components/SideBar'
import Header from './Header'
import Posts from './Posts'
import styles from '../styles/Main.module.css'

export default function Main() {
    return (
        <div>
                <Header />

            <div className={styles.main}>
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}