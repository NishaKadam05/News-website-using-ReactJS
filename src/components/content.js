import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';
import news from './images/news.mp4';
import inflation from './images/inflation.jpg'
import protest from './images/protest.jpg'
import olympics from './images/olyympics.avif'
import independ from './images/independ.jpg'
import corporate from './images/corporate.avif'


const Content=()=>{
    return(
        <div>
            <div className='sections'>
                <div className='one-sec'>
                    <video src={news} controls></video>
                    <div  className='news'>
                        <div>
                            <h1>5 takeaways from PM Modi’s I-Day speech: Framing UCC as ‘secular civil code’ to message on women’s safety</h1>
                            <p>Narendra Modi’s first Independence Day speech of his third term touched on some core ideological issues and had some strong criticism of the Opposition as well</p>
                            <p> Can feel outrage over atrocities against women, says PM Modi</p>
                        </div>
                        <div>
                            <img className='independ' src={independ}></img>
                        </div>
                    </div>
                    <div className='news'>
                        <div>
                            <h1>The end of high inflation may finally be in sight. But other risks are appearing.</h1>
                            <p>Three-year inflation outlook hits record low in New York Fed consumer survey</p>
                            <p>An interest rate cut is coming. Here's what to do with your money beforehand.</p>
                        </div>
                        <div>
                            <img className='inflation' src={inflation}></img>
                        </div>
                    </div>
                    <div  className='news'>
                        <div>
                            <h1>Protests at Kolkata hospital, day after miscreants wreak havoc, disrupt midnight stir</h1>
                            <p>Night after miscreants vandalised parts of R G Kar Medical College Hospital, nurses have taken to protest the "hooliganism".</p>
                            <p>Kolkata rape-murder protest: 'Not feeling safe, insisted my male colleagues to accompany'</p>
                        </div>
                        <div>
                            <img className='protest' src={protest}></img>
                        </div>
                    </div>
                    <div  className='news'>
                        <div>
                            <h1>Vinesh Phogat's Appeal For Silver Medal At Paris Olympics 2024 Dismissed by CAS</h1>
                            <p>Wrestler Vinesh Phogat's plea for a silver medal, after getting disqualified from the Women’s 50kg freestyle wrestling final at the Paris Olympics 2024, was dismissed by the ad-hoc division of the Court of Arbitration for Sport (CAS) on Wednesday.</p>
                        </div>
                        <div>
                            <img className='olympics' src={olympics}></img>
                        </div>
                    </div>
                    <div  className='news'>
                        <div>
                            <h1>After Rs 2.5 lakh per annum offer to freshers, Cognizant reportedly gives just 1% pay hike to staff</h1>
                            <p>The timing of these modest raises coincides with widespread criticism of Cognizant's off-campus hiring program, where the starting salary for fresh graduates was set at Rs 2.5 lakh per annum.</p>
                        </div>
                        <div>
                            <img className='corporate' src={corporate}></img>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='sidenews-head'>Latest News</h2>
                        <div className='written-news'>
                            <p>Man shares a screenshot and the video of "the new UPI Scam" people are losing money to</p>
                            <p>Google's ex-CEO blames 'work from home' for Google "falling" behind in AI race.</p>
                            <p>Russian forces burn Ukranian fuel base: Putin orders fiery revenge as bombs rain on Kursk</p>
                            <p>As cybersecurity threats rise, ISB Executive Eductaions's Cybersecurity for Leader's programme equips leaders with AI-integrated solutions</p>
                            <p>IMD issues rain alert for Kerala's Wayanad, says floods likeky</p>
                            <p>'Neeraj Chopra vs Arshad Nadeem is bigger than India vs Australia': Former Pakistan cricketer on 'hype' around Border-Gavaskat Trophy</p>
                            <p>Apple's next 'big thing' could be a home robot with iPad-like screen, this is how much it may cost</p>
                            <p>Khel Khel Mein: Akshay Kumar exhibits flair in no-holds-barred comedy</p>
                            <p>IISc Bengaluru remains India’s best research institute, check top 10 list here: NIRF Rankings 2024</p>
                            <p>Stree 2 box office collection day 1 early report: Shraddha Kapoor, Rajkummar Rao break Shah Rukh’s 11-year record, grosses 7 times more than Akshay Kumar’s Khel Khel Mein</p>
                            <p>How school children from Kerala’s Kozhikode are using class breaks to help their peers in Wayanad</p>
                            <p>Govt's plan to control vegetable prices: New urban farming clusters to boost supply</p>
                            <p>‘Heartbroken by verdict, but Vinesh will remain a champion in our hearts’</p>
                            <p>PR Sreejesh shares memory of Paris Olympics: 'Crowd was cheering ‘Sreejesh-Sreejesh’ and I heard ‘Sachin-Sachin’!'</p>
                            <p>Complaint filed at International Crime Tribunal accuses Hasina & others of committing genocide, crimes against humanity</p>
                            <p>WHO declares mpox a public health emergency again: Could it become a pandemic?</p>
                            <p>Cisco Systems to cut about 7% of staff in second round of layoffs</p>
                            <p>Mahindra Launches Thar Roxx: The 5-door SUV starts at Rs 12.99 lakh with enhanced features and practicality</p>
                            <p>Kerala Chief Minister Pinarayi Vijayan highlights challenges in disaster prediction and scientific awareness during Independence Day address</p>
                            <p>Bangladeshi lawyer recounts Sheikh Hasina’s ‘secret jail’ where he spent eight years</p>
                            <p>Supreme Court refuses to restrict States’ power to tax mines only prospectively</p>
                            <p>Tendencies that stoke discord on perceived social hierarchies have to be rejected: President Murmu</p>
                            <p>PM Modi meets India's Paris Olympians LIVE: Athletes arrive at PM's residence</p>
                            <p>SRK on not going to Hollywood: Didn't get offer worthy of status fans have given me</p>
                            <p>With Pixel screenshots, Google will use AI to help you organise and search through your screenshots</p>
                            <p>India's dream to host Olympics in 2036: PM Modi in Independence Day speech</p>
                            <p>Will Sunita Williams return from space in 2025? Final decision soon</p>
                            <p>SBI raises lending rate by 10 basis points. Will loans get costlier?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;