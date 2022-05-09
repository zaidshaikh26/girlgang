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
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Search</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">KittyVerse</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">FAQs</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Player's Guide</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Email us</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer-nav">
                        <ul class="Footer-nav-items">
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">About</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Press</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Tech details</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">White Pa-purr</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Our Newsletter</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Cheeze Wizards</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">NBA Top Shot</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--my-profile">Flow Blockchain</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer-nav">
                        <ul class="Footer-nav-items">
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--facebook">Facebook</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--reddit">Reddit</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--twitter">Twitter</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--youtube">YouTube</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--instagram">Instagram</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--discord">Discord</Link>
                            </li>
                            <li class="Footer-nav-item">
                                <Link to="/my-kitties" class="Footer-nav-link Footer-nav-link--twitch">Twitch</Link>
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