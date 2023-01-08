import { useEffect } from "react";
import Header from "../Components/Header/Header";
import "./Home.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useState } from "react";
import flyingShoes from "../imgs/flying_shoes.png";
import { useRef } from "react";
import runningShoes from "../imgs/sport_shoes.png";
import runningShoesBg from "../imgs/sport_shoes_bg.png";
import shoes3 from "../imgs/shoes3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCoins, faLeaf } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    const [pageLoaded, setPageLoaded] = useState(false);
    const partOneRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => setPageLoaded(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (!partOneRef?.current?.scrollHeight) return;
            if (window.scrollY > partOneRef?.current?.getBoundingClientRect().top) {
                contentRef?.current?.classList?.add("scrolled");
            } else if (window.scrollY <= 100) {
                contentRef?.current?.classList?.remove("scrolled");
            }
        });
    }, []);

    return pageLoaded ? (
        <div className="content" ref={contentRef}>
            <Header />

            <div className="part part-one" ref={partOneRef}>
                <div className="part-container">
                    <h2 className="title">ONE SIZE FITS <span>ALL.</span></h2>
                    <p>The shoe that you order directly on our website will mold to your foot, no matter how big, small, wide or thin it is. Therefore, the care you had in the past for the size of your shoes becomes history.​</p>
                </div>
                
                <div className="part-container">
                    <img src={flyingShoes} alt="" />

                    <div className="line">
                        <div className="line-element" />

                    </div>
                </div>
            </div>
           
            <h2 className="title" id="what-is">What's AdaptFit?</h2>

            <div className="part adaptfit">
                <div className="part-container">
                    <p>AdaptFit is the solution for everyone that is buying shoes online and might have the "size syndrome". <br /> They have a lot of questions about the shoes:
                        <ul>
                            <li>"What if the size is too small / big?"</li> 
                            <li>"If they don't fit me I need to return them back"</li>
                        </ul>
                        <br />
                        We make this thoughts fade away. 
                    </p>
                    
                </div>

                <div className="part-container">
                    <img src={runningShoes} className="running-img" />
                </div>
            </div>

            <h2 className="title" id="advantages">Our advantages</h2>

            <div className="part part-advantages">
                <div className="part-container">
                    <FontAwesomeIcon icon={faChartSimple} className="advantage-icon" />
                    <h3>No more "size syndrome"</h3>
                    <p>We are sure that at least once in your life you happened to buy a new pair of sneakers, and after that you find that the size is not the right one. The concern about shoe's size dissapears and easy to adapt.</p>
                </div>

                <div className="part-container">
                    <FontAwesomeIcon icon={faCoins} className="advantage-icon"/>
                    <h3>Saving money</h3>
                    <p>
                        With this technology you can share your pair of AdaptFit with your family members without worrying about the size.
                        <br />
                        Also, for example, if your child buys this pair of shoes, they don't have to exchange them for the reason of the size being too small.
                    </p>
                </div>


                <div className="part-container">
                    <FontAwesomeIcon icon={faLeaf} className="advantage-icon" />
                    <h3>Being eco friendly</h3>
                    <p>
                        As we said, kids don't have to buy multiple pairs of these shoes once they grow and the shoes get too smaller for them, so material isn't wasted. <br />
                        Also we are recycling every pair of shoes by offering money for shoes that were already used.
                    </p>
                </div>

              
            </div>

            <h2 className="title" id="models">Models</h2>
            
            <div className="models">
                <div className="model-container">
                    <div className="text">
                        <h3>Adaptfit Classic</h3>
                        <p>This are the casual model.</p>
                    </div>
                
                    <div className="container-img">
                        <img src={shoes3} alt="shoes" />
                    </div>



                </div>

                <div className="model-container">
                    <div className="text">
                        <h3>AdaptFit Zoom</h3>

                        <p>AdaptFit has a sport collection too. For people who loves adrenaline and sport, our shoes will be their best friends.</p>

                    </div>

                    <div className="container-img">
                        <img src={runningShoesBg} alt="sport-imgs" />
                    </div>
                </div>

          
            </div>
           

            {/* <div className="part" id="testimonials"></div> */}

            <div className="part last-part">
                <h2 className="title">Don't let size spoil your <span>experience</span> <br /> with <span>AdaptFit.</span></h2>
            
            </div>
        </div>
    ) : (
        <div className="loading-content">
            <LoadingScreen />
        </div>
    );
};

export default Home;