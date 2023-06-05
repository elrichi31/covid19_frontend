import styles from '../styles/navbar.module.css'
import Cookies from 'universal-cookie'
import {useRouter}from 'next/router'
import Router from 'next/router'
import Link from 'next/link'
const cookie = new Cookies()


export default function Navbar(){
    const closeSession = () => {
        cookie.remove('id', {path: '/'})
        cookie.remove('name', {path: '/'})
        Router.push('/home')
    }
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.container}`}>
            <div className="container-fluid">
                <a className="navbar-brand text-reset" href="#">The covid-19 API</a>
                <div className=" d-flex justify-content-end">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/data'><a className="nav-link text-reset">Data</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/info-api'><a className="nav-link text-reset">API</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <Link href='/'><a className="nav-link text-reset">Contacto</a></Link>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <a className="nav-link text-reset" href='' onClick={closeSession}>Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}