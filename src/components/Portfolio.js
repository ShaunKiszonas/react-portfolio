import photo1 from '../assets/images/projects/AirPollution.jpg';
import photo2 from '../assets/images/projects/ParkPlace.jpg';

export default function Portfolio() {
  return (
    <div className="section">
      <h2 className="section-header">Portfolio</h2>
      <div className="section-images">
        <div className="card">
          <img className="card-img" src={photo1} alt="Air Pollution"></img>
        </div>
        <div className="card">
          <img className="card-img" src={photo2} alt="Air Pollution"></img>
        </div>
      </div>
    </div>
  );
}
