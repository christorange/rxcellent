import '../welcome/welcome.css';
import doctor from '../../assets/doctor.png';

const Welcome = () => {
    return (
        <div className="welcome">
            <div>
                Get your medication <br />
                delivered to you <br />
                <a className="link" href="">
                    See all of our products {'\u2192'}
                </a>
            </div>
            <div>
                <img src={doctor} className="happy-doctor"></img>
            </div>
        </div>
    );
};

export default Welcome;
