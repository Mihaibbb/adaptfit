import "./LoadingScreen.css";
import logoWhite from "../imgs/logo_white.svg";

const LoadingScreen = () => {
    return (
        <div className="loading-logo">
            <img src={logoWhite} alt="logo-white" />
        </div>
    );
};

export default LoadingScreen;