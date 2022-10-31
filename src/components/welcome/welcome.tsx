import '../welcome/welcome.css';
import doctor from '../../assets/doctor.png';

const Welcome = () => {
    return (
        <div className="welcome">
            Get your medications <br />
            delivered to you <br />
            <a className="link" href="shopping-page">
                See all of our products
            </a>
            <div>
                <img src={doctor} className="happy-doctor"></img>
            </div>
        </div>
    );
};

export default Welcome;
