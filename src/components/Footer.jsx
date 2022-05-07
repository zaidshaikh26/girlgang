import { Link } from "react-router-dom";

export default function Footer() {
    
    return (
        <footer class="Footer">
            <div class="Container Container--lg">
                <div class="Footer-primary">
                    <div class="Footer-nav">
                        <ul class="Footer-nav-items">
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Activity</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer-nav">
                        <ul class="Footer-nav-items">
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Activity</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer-nav">
                        <ul class="Footer-nav-items">
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Activity</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer-primary-dapperLabs">
                        <div>
                            <span>Pick of the litter at 
                                <Link to="/privacy-policy"> Dapper Labs</Link>
                                <img src="assets/post/4.jpg" alt="" />
                            </span>
                        </div>
                        <div class="Footer-career">
                            <span>View our 
                                <Link to="/privacy-policy"> job openings</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="Footer-secondary">
                    <Link to="/terms-of-use" class="Footer-secondary-link">Terms of use</Link>
                    <Link to="/privacy-policy" class="Footer-secondary-link">Privacy policy</Link>
                </div>
            </div>
        </footer>
    )

}