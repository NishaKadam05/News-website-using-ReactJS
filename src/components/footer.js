import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
import playstore from './images/playstore.png';
import appstore from './images/appstore.png';

const Footer=()=>{
    return(
        <div className='footer'>
            <div className='footer-head'>
                <ul>
                    <li className='text'>THE DAILY CHRONICLE</li>
                    <li className='playstore'><img src={playstore}></img></li>
                    <li className='appstore'><img src={appstore}></img></li>
                </ul>
            </div>
            <div className='footer-sections'>
                <div className='footer-sec'>
                    <h3>The Daily Chronicle</h3>
                    <p>About Us</p>
                    <p>Code of Editorial Values</p>
                    <p>News Archive</p>
                    <p>Sitemap</p>
                    <p>Print Subscription</p>
                    <p>Digital Subscription</p>
                    <p>Subscribe to Newsletters</p>
                    <p>Rss Feeds</p>
                    <p>Readers Editor-Terms of Reference</p>
                    <p>Authors and Contributors</p>
                    <h3 className='head'>Contact Us</h3>
                    <p>Contact Us</p>
                    <p>Social Media</p>
                    <p>Advertise With Us</p>
                    <h3 className='head'>Group News Sites</h3>
                    <p>Business Line</p>
                    <p>BL on Campus</p>
                    <p>Sportstar</p>
                    <p>Frontline</p>
                    <p>The Daily Chronicle Centre</p>
                    <p>Young World Club</p>
                    <p>ePaper</p>
                    <p>Business line ePaper</p>
                    <p>Crossword + Free Games</p>
                </div>
                <div className='footer-sec'>
                    <h3>Other Products</h3>
                    <p>RoofandFloor</p>
                    <p>STEP</p>
                    <p>Images</p>
                    <p>Classifieds - Print</p>
                    <p>Bookstore and Special publications</p>
                    <h3 className='head'>Popular Sections</h3>
                    <p>Elections</p>
                    <p>Israeli - Palestinian conflict 2023</p>
                    <p>Latest News</p>
                    <p>National News</p>
                    <p>International News</p>
                    <p>Videos</p>
                    <p>Life & style</p>
                    <p>Food</p>
                    <p>Podacst</p>
                    <p>Showcase</p>
                    <h3 className='head'>Opinion</h3>
                    <p>Editorial</p>
                    <p>Columns</p>
                    <p>Comment</p>
                    <p>Cartoon</p>
                    <p>Letters</p>
                    <p>Interview</p>
                    <p>Lead</p>
                </div>
                <div className='footer-sec'>
                    <h3>Business</h3>
                    <p>Agri-Business</p>
                    <p>Industry</p>
                    <p>Economy</p>
                    <p>Markets</p>
                    <p>Budgets</p>
                    <h3 className='head'>Sport</h3>
                    <p>Cricket</p>
                    <p>Football</p>
                    <p>Hockey</p>
                    <p>Tennis</p>
                    <p>Athletics</p>
                    <p>Motorsport</p>
                    <p>Races</p>
                    <p>Other Sports</p>
                    <h3 className='head'>Sci-Tech</h3>
                    <p>Science</p>
                    <p>Technology</p>
                    <p>Health</p>
                    <p>Agriculture</p>
                    <p>Environment</p>
                    <p>Gadgets</p>
                    <p>Internet</p>
                </div>
                <div className='footer-sec'>
                    <h3>States</h3>
                    <p>Andhra Pradesh</p>
                    <p>Karnataka</p>
                    <p>Kerala</p>
                    <p>Tamil Nadu</p>
                    <p>Telangana</p>
                    <h3 className='head'>Cities</h3>
                    <p>Bengaluru</p>
                    <p>Chennai</p>
                    <p>Coimbatore</p>
                    <p>Delhi</p>
                    <p>Hyderabad</p>
                    <p>Kochi</p>
                    <p>Kolkata</p>
                    <p>Kozhikode</p>
                    <p>Madurai</p>
                    <p>Mangaluru</p>
                    <p>Mumbai</p>
                    <p>Puducherry</p>
                    <p>Thiruvanathapuram</p>
                    <p>Tiruchirapalli</p>
                    <p>Vijayawada</p>
                    <p>Visakhapatanam</p>
                </div>
                <div className='footer-sec'>
                    <h3>Trending</h3>
                    <p>India News</p>
                    <p>Made by Google event 2024:When and Where to watch</p>
                    <p>Musk Trump interview DDOS attack</p>
                    <p>Kolkata rape and murder case</p>
                    <p>News</p>
                    <p>India News</p>
                    <p>What is a DDOS attack?</p>
                    <p>Tech News</p>
                    <p>Jio Data traffic share touches 60%</p>
                    <p>Bangladesh protests</p>
                </div>
                <div className='footer-sec'>
                    <h3>Trending on Group sites</h3>
                    <p>Stock Market Live Updates</p>
                    <p>IND vs SL, 1st ODI</p>
                    <p>Olympics</p>
                    <p>CrowdStrike Releases Root Cause Analysis of Falcon Sensor BSOD Crash</p>
                    <p>Gold Rate Today</p>
                    <p>Silver Rate Today</p>
                    <p>India's record heatwave vows to return</p>
                    <p>The Ambani wedding: A spectacle of excess in an age of inequality</p>
                    <p>Frontline Current Issue</p>
                </div>
            </div>
            <div className='footer-icons'>
                <ul>
                    <li><i class="fa-brands fa-whatsapp"></i></li>
                    <li><i class="fa-brands fa-x-twitter"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
                    <li><i class="fa-brands fa-spotify"></i></li>
                    <li><i class="fa-brands fa-telegram"></i></li>
                </ul>
            </div>
            <div className='terms'>
            <p>TERMS OF USE  /  PRIVACY POLICY  /</p>
            <p>Copyright&copy; 2024, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;