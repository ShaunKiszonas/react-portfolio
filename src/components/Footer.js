import github from '../assets/images/github.jpg';
import linkedin from '../assets/images/linkedin.jpg';
import mail from '../assets/images/mail.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="/">
        <img src={github} alt="github"></img>
      </a>
      <a href="/">
        <img src={linkedin} alt="linkdin"></img>
      </a>
      <a href="/">
        <img src={mail} alt="mail"></img>
      </a>
    </footer>
  );
}
