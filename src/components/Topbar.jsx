import style from "../styles/topbar.module.scss"
import { Link } from "react-router-dom";

export default function Topbar() {
    
    return (
        <header className={style.header}>
            <Link to="/"  className={style.header} >
                <span className={style.header_logo}></span>
                <h1 className={style.header_logotitle}>CryptoKitties</h1>
            </Link>
        </header>
    )

}