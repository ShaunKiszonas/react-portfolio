export default function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="header">
      <h1>
        <a href="/">Shaun Kiszonas</a>
      </h1>
      <ul className="nav">
        <li className={`list ${aboutSelected && 'navActive'}`}>
          <span
            onClick={() => {
              setAboutSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}
          >
            About Me
          </span>
        </li>
        <li className={`list ${portfolioSelected && 'navActive'}`}>
          <span
            onClick={() => {
              setAboutSelected(false);
              setContactSelected(false);
              setPortfolioSelected(true);
              setResumeSelected(false);
            }}
          >
            Portfolio
          </span>
        </li>
        <li className={`list ${resumeSelected && 'navActive'}`}>
          <span
            onClick={() => {
              setAboutSelected(false);
              setContactSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(true);
            }}
          >
            Resume
          </span>
        </li>
        <li className={`list ${contactSelected && 'navActive'}`}>
          <span
            onClick={() => {
              setAboutSelected(false);
              setContactSelected(true);
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}
          >
            Contact
          </span>
        </li>
      </ul>
    </header>
  );
}
