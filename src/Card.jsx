import profilePic from "./assets/profile.jpg";

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Hi Bro</h2>
            <p className="card-text">I learn from youtube video</p>
        </div>
    );
}