import style from "../styles/footer.module.scss"
import { Link } from "react-router-dom";

export default function Footer() {
    
    return (
        <footer className={style.Footer}>
            <div className={`${style.Container} ${style.Container__lg}`}>
                <div className={style.Footer_primary}>
                    <div className={style.Footer_nav}>
                        <ul className={style.Footer_nav_items}>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>Activity</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.Footer_nav}>
                        <ul className={style.Footer_nav_items}>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>Activity</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.Footer_nav}>
                        <ul className={style.Footer_nav_items}>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>Activity</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                            <li className={style.Footer_nav_item}>
                                <Link to="/my-kitties" className={`${style.Footer_nav_link} ${style.Footer_nav_link__my_profile}`}>My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.Footer_primary_dapperLabs}>
                        <div>
                            <span>Pick of the litter at 
                                <Link to="/privacy-policy"> Dapper Labs</Link>
                                <img src="assets/post/4.jpg" className={style.profileCoverImg} alt="" />
                            </span>
                        </div>
                        <div className={style.Footer_career}>
                            <span>View our 
                                <Link to="/privacy-policy"> job openings</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.Footer_secondary}>
                    <Link to="/terms-of-use" className={style.Footer_secondary_link}>Terms of use</Link>
                    <Link to="/privacy-policy" className={style.Footer_secondary_link}>Privacy policy</Link>
                </div>
            </div>
        </footer>
    )

}