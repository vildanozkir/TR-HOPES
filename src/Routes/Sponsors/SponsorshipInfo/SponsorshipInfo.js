const SponsorshipInfo = () => {
  const links = require("../links.json");
  return (
    <div className="section dark" id="sponsorship">
      <div className="jumbotron">
        <h1 className="display-4">Sponsorships: Become our sponsor!</h1>
        <br />
        <p className="lead">
          <div className="dropdown">
            <button
              className="btn center-align btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sponsorship Info
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href={links.sponsorInfo.TR}
                >
                  Sponsorship TR
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href={links.sponsorInfo.EN}
                >
                  Sponsorship EN
                </a>
              </li>
            </ul>
          </div>
        </p>
        <p className="lead">
          To become our sponsor, contact us on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/meister-robotics-team/"
            className="fa fa-linkedin"
          ></a>
          !
        </p>
      </div>
    </div>
  );
};

export default SponsorshipInfo;
