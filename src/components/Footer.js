import github from '../assets/images/github.jpg';
import linkedin from '../assets/images/linkedin.jpg';
import email from '../assets/images/email.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/ShaunKiszonas">
        <img src={github} alt="github"></img>
      </a>
      <a href="https://www.linkedin.com/in/shaun-kiszonas-064802228/">
        <img src={linkedin} alt="linkdin"></img>
      </a>
      <a href="/">
        <img src={email} alt="email"></img>
      </a>
    </footer>
  );
}
