// @ts-nocheck
import approachnode from "./../../assets/approachnode.png";
import approach from "./../../assets/approach.png";
import approach2 from "./../../assets/approach2.png";
import profile from "./../../assets/profile.png";
import personpoly from "./../../assets/personpoly.png";
import polygon from "./../../assets/polygon.png";
import polygongroup from "./../../assets/polygongroup.png";
import about from "./../../assets/about.png";
import williamjohnson from "./../../assets/williamjohnson.png";
import logo from "./../../assets/logo.png";
import person from "./../../assets/person.png"; // Adjust the path based on your folder structure
import styles from "./style.module.css";
const AboutScreen = () => {
  return (
    <div className="col-12 position-static text-white ">
      <section>
        <h2 className="text-white">About us</h2>
        <p className={styles.content}>
          LeadX Bull stays current with the market trends aiming not only to
          thrive but also to enhance in such a rapidly evolving digital age, and
          to keep up its telemarketing services with the client’s expectations
          worldwide.
        </p>
      </section>

      <section className="my-5">
        <h2 className="text-white">History</h2>
        <p className="fs-4 text-wrap">
          As the leading company in the telemarketing industry with a passion
          for innovation and excellence, LeadX Bull has become a household name
          in the tele sales world, known for its groundbreaking lead generation
          and digital sales services.
        </p>
      </section>

      <section className="d-flex justify-content-between my-5 ">
        <div className="col-8">
          <h2 className="text-white">Profile</h2>
          <p className="fs-4 text-wrap">
            LeadX Bull Global Online leads and sales orders account for over 65%
            of the total announced digital sales volume in Canada, Directly and
            in affiliation and partnership contracts. Total $4 Million Gross
            Sales Revenue Globally - 2023
          </p>

          <div className="d-flex my-4">
            <h4 className={styles.title}>Mission</h4>
            <p className={styles.content}>
              Our mission is to be the leading innovator in the telemarketing
              industry through our cloud based Lead-Gen solutions
            </p>
          </div>

          <div className="d-flex">
            <h4 className={styles.title}>Vission</h4>
            <p className={styles.content}>
              We enhance our data centers to personalize the contractor clients
              experience through telemarketing
            </p>
          </div>

          <div className="d-flex my-4">
            <h4 className={styles.title}>Value</h4>
            <p className={styles.content}>
              Our core values include elimination of privacy concerns, and
              adherence to global marketing regulations
            </p>
          </div>
        </div>
        <div className="col-4">
          <img src={person} alt="person" width={"85%"} />
        </div>
      </section>

      <section className="col-8 d-flex flex-column align-items-center my-5 ">
        <h3 className="text-white">Key Service</h3>
        <h2 className="text-white">Benefits</h2>
        <div className="d-flex justify-content-between flex-wrap">
          <div
            className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}
          >
            <h4 className="text-white">asaSasAS</h4>
            <progress className="w-100" value="50" max="100" />
            <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
          </div>
          <div
            className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}
          >
            <h4 className="text-white">asaSasAS</h4>
            <progress className="w-100" value="50" max="100" />
            <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
          </div>
          <div
            className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}
          >
            <h4 className="text-white">asaSasAS</h4>
            <progress className="w-100" value="50" max="100" />
            <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
          </div>
          <div
            className={`${styles.benefits} d-flex flex-column justify-content-center align-items-center`}
          >
            <h4 className="text-white">asaSasAS</h4>
            <progress className="w-100" value="50" max="100" />
            <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
          </div>
        </div>
      </section>

      <section className="col-12 d-flex flex-column align-items-center my-5 bg-danger">
        <h2 className="text-white">Benefits</h2>
        <h5 className="text-white">Benefits</h5>
        <p>aadsjklkjadsfklajfdkasjdkjask;dj</p>
        <div className="col-12 p-3 d-flex justify-content-center align-content-center bg-success text-center">
          <p className="col-3 align-center">75</p>
          <p className="col-3 align-center">25</p>
          <p className="col-3 align-center">15</p>
          <p className="col-3 align-center">15</p>
        </div>
      </section>

      <section className="col-12 align-items-center mb-5">
        <h1 className={`${styles.titleblue} text-center fw-bold`}>
          Huge Updates On-The-Way: 
        </h1>
        <div className={` ${styles.ulcontent} col-7 mt-5`}>
          <ul>
            <li className="fw-200">
              Expanding in existing markets: Canada, UK, and US and promoting
              our upgraded leads services there
            </li>
            <li>Entering new targeted markets: China</li>
          </ul>
        </div>
      </section>

      <section className="col-12 mt-5 d-flex mb-5">
        <div className="col-7 pe-3">
          <h1 className={`${styles.sidetitleblue} fw-bold mb-5`}>About Us</h1>
          <p className="fs-2 mt-5 text-break" style={{ textAlign: "justify" }}>
            LeadX Bull stays current with the market trends aiming not only to
            thrive but also to enhance in such a rapidly evolving digital age,
            and to keep up its telemarketing services with the client’s
            expectations worldwide.
          </p>
        </div>
        <div className="col-5 d-flex">
          <img src={about} alt="About" className={`${styles.grayscale}`} />
        </div>
      </section>

      {/* History component need to move to new component */}
      {/* <section className="col-12 mt-5 mb-5 d-flex">
        <div className="col-7 pe-3">
          <h1 className={`${styles.sidetitleblue} fw-bold mb-5`}>History</h1>
          <p className="fs-2 mt-5 text-break" style={{ textAlign: "justify" }}>
            LeadX Bull stays current with the market trends aiming not only to
            thrive but also to enhance in such a rapidly evolving digital age,
            and to keep up its telemarketing services with the client’s
            expectations worldwide.
          </p>
        </div>
        <div className="col-5 position-relative">
          <img
            src={polygon}
            alt="Polygon"
            className={`${styles.polygonpos} img-fluid stacked-image position-absolute`}
          />
          <img
            src={polygongroup}
            alt="Polygon Group"
            className={`${styles.polyshapepos} img-fluid stacked-image position-absolute z-1`}
          />
          <img
            src={personpoly}
            alt="Person Poly"
            className={`${styles.personpos} img-fluid stacked-image position-absolute z-2`}
          />
        </div>
      </section> */}

      <section
        className={` ${styles.profilebg} row row-cols-1 row-cols-md-3 row-cols-sm-1 mt-5 d-flex flex-sm-column-reverse flex-md-column-reverse flex-lg-row align-items-center`}
      >
        {/* <h1 className={`${styles.sidetitleblue} text-center fw-bold mb-5`}>
          Profile
        </h1> */}
        <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
          <div className={`${styles.profilecard} card text-bg-dark`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-1 fw-600">Vision</h5>
              <p
                className="card-text text-center fs-3 fw-500"
                style={{ textAlign: "justify" }}
              >
                We enhance our data centers to personalize the contractor
                clients experience through telemarketing
              </p>
            </div>
          </div>
          <div className={`${styles.profilecard} card text-bg-dark mt-3`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-1 fw-600">Vision</h5>
              <p
                className="card-text text-center fs-3 fw-500"
                style={{ textAlign: "justify" }}
              >
                We enhance our data centers to personalize the contractor
                clients experience through telemarketing
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-3 col-sm-12 col-md-4 col-lg-4">
          <div className={`${styles.profilecard} card text-bg-dark`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-1 fw-600">Mission</h5>
              <p
                className="card-text text-center fs-3 fw-500"
                style={{ textAlign: "justify" }}
              >
                Our mission is to be the leading innovator in the telemarketing
                industry through our cloud based Lead-Gen solutions
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-3 text-center col-sm-12 col-md-4 col-lg-4">
          <img
            src={profile}
            alt="Person Poly"
            className={`${styles.grayscale}`}
          />
        </div>
      </section>

      <section className="align-items-center mt-5">
        <div className="row">
          <div className="col-12 text-center position-relative ms-5">
            <div>
              <h1 className={`${styles.titleblue} text-center fw-bold`}>
                OUR SOLUTION APPROACH 
              </h1>
              <p
                className={`${styles.approachtext} text-center align-items-center mt-4`}
              >
                By offering tailored telemarketing solutions that are designed
                to meet the unique needs of each client, LeadX Bull Technologies
                is able to provide unparalleled value pushing its clients to
                handle increased estimates.
              </p>
              <img src={approach} alt="" className="mt-5" />
              <div className="text-center">
                <img
                  src={approachnode}
                  alt="Consistent Sales"
                  className={`${styles.righttop}`}
                />
                <p className="text-center">Consistent Sales</p>
              </div>

              <img
                src={approachnode}
                alt="24/7 Support Channels"
                className={`${styles.rightcenter}`}
              />
              <img
                src={approachnode}
                alt="Compliance
                (Privacy & Regulations)"
                className={`${styles.rightbottom}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center mt-5">
        <div className="row d-flex">
          <h1 className={`${styles.gridbluetext} text-center`}>
            CANADA HVAC LEADS KEY INDICATOR
          </h1>
          <h1 className={`${styles.gridbluetext} text-center`}>
            (TOP SELLING)
          </h1>
          <div className="col-12 text-center align-items-center d-flex">
            <div className={`${styles.ulapprouch} col-2`}>
              {/* First Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                Timing
              </h6>
              <ul className={`ps-4`}>
                <li className={` fs-5 pb-1 text-start`}>
                  FLEXIBLE LEADS SCHEDULES
                </li>
                <li className={` fs-5 pb-1 text-start`}>
                  YOU CHOOSE THE DATE & TIME
                </li>
                <li className={` fs-5 pb-1 text-start`}>
                  UNLIMITED LEADS-WHATEVER QUANTITY
                </li>
              </ul>
              {/* Secound Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                QUALITY
              </h6>
              <ul className={`ps-4`}>
                <li className={`fs-6 pb-1 text-start`}>
                  EXCELLENT QUALITY (A+ CLIENTS SSATISFACTION)
                </li>
                <li
                  className={` fs-6 pb-1 text-start`}
                  style={{ whiteSpace: "normal" }}
                >
                  MULTIPLE QUALITY CHOICES & TIERS
                </li>
                <li
                  className={` fs-6 pb-1 text-start`}
                  style={{ whiteSpace: "wrap", width: 300 }}
                >
                  30-50% GUARANTEED MORE ESTIMATES IN THE FIRST 30 DAYS
                </li>
              </ul>
              {/* Last Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                SCOPE
              </h6>
              <ul className={`ps-4`}>
                <li className={` fs-6 pb-1 text-start`}>
                  FLEXIBLE LEADS SCHEDULES
                </li>
                <li className={` fs-6 pb-1 text-start`}>
                  YOU CHOOSE THE DATE & TIME
                </li>
                <li className={` fs-6 pb-1 text-start`}>
                  UNLIMITED LEADS-WHATEVER QUANTITY
                </li>
              </ul>
            </div>

            <div className="col-8">
              <img
                src={approach2}
                alt=""
                className="w-100"
                style={{ marginTop: 50, transform: "scale(1.3)" }}
              />
            </div>
            <div
              className={`${styles.ulapprouch} col-2`}
              style={{ marginLeft: -160 }}
            >
              {/* First Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                Timing
              </h6>
              <ul className={`ps-4`}>
                <li className={` fs-5 pb-1 text-start`}>
                  FLEXIBLE LEADS SCHEDULES
                </li>
                <li className={` fs-5 pb-1 text-start`}>
                  YOU CHOOSE THE DATE & TIME
                </li>
                <li className={` fs-5 pb-1 text-start`}>
                  UNLIMITED LEADS-WHATEVER QUANTITY
                </li>
              </ul>
              {/* Secound Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                QUALITY
              </h6>
              <ul className={`ps-4`}>
                <li className={`fs-6 pb-1 text-start`}>
                  EXCELLENT QUALITY (A+ CLIENTS SSATISFACTION)
                </li>
                <li
                  className={` fs-6 pb-1 text-start`}
                  style={{ whiteSpace: "normal" }}
                >
                  MULTIPLE QUALITY CHOICES & TIERS
                </li>
                <li
                  className={` fs-6 pb-1 text-start`}
                  style={{ whiteSpace: "wrap", width: 300 }}
                >
                  30-50% GUARANTEED MORE ESTIMATES IN THE FIRST 30 DAYS
                </li>
              </ul>
              {/* Last Item */}
              <h6
                className={`${styles.titleblue} fs-5 text-start`}
                style={{ marginTop: 80 }}
              >
                SCOPE
              </h6>
              <ul className={`ps-4`}>
                <li className={` fs-6 pb-1 text-start`}>
                  FLEXIBLE LEADS SCHEDULES
                </li>
                <li className={` fs-6 pb-1 text-start`}>
                  YOU CHOOSE THE DATE & TIME
                </li>
                <li className={` fs-6 pb-1 text-start`}>
                  UNLIMITED LEADS-WHATEVER QUANTITY
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="align-items-center mt-5 mb-5">
        <div className="col-12">
          <h1 className={`${styles.titleblue} text-center fw-bold`}>
            OVER $9 MILLION
          </h1>
          <h2 className={`fs-3 text-center my-3 fw-200`}>
            In combined revenue generated for our contractor clients
          </h2>

          <p className={`text-center`}>
            Our services allow clients to gain a better chance of fulfilling
            customers needs and catching their interest, Leading to higher net
            revenue and sustained customer satisfaction and loyalty. Many top
            global contractors <span>Read more</span>
          </p>
          <div
            className={`${styles.approachcont} d-flex align-items-center justify-content-around rounded p-4 mt-5 mx-sm-2 mx-md-4 mx-lg-5`}
          >
            <div className={`text-center text-light`}>
              <h2 className={`fs-6 fw-normal`}>75+</h2>
              <p className={`fs-6 fw-normal`}>Independent Member Firms</p>
            </div>
            <div className={`${styles.separator}`}></div>
            <div className={`text-center text-light`}>
              <h2 className={`fs-6 fw-normal`}>35+</h2>
              <p className={`fs-6 fw-normal`}>Contracting LLCs</p>
            </div>
            <div className={`${styles.separator}`}></div>

            <div className={`text-center text-light`}>
              <h2 className={`fs-6 fw-normal`}>75+</h2>
              <p className={`fs-6 fw-normal`}>Affiliate Network</p>
            </div>
            <div className={`${styles.separator}`}></div>

            <div className={`text-center text-light`}>
              <h2 className={`fs-6 fw-normal`}>75+</h2>
              <p className={`fs-6 fw-normal`}>Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 d-flex mt-5">
        <div className="row d-flex flex-sm-column flex-md-row">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h1 className="fs-1 fw-normal">
              2024 UPDATES –
              <span className={`${styles.titleblue} fs-1 fw-normal`}>
                NewYear
              </span>
            </h1>
            <p className="fs-6">
              To increase our clients sales revenue and push their average
              workflow estimates, Our company is developing،And will launch a
              wider variety of Lead-Gen models,
              <br />
              <br /> Digital sales opportunities, & and ultra targeted
              Telemarketing services in the near future. Here’s a sneak peek at
              what’s in the works.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className={`${styles.proogressbar}`}>
              <h4 className={`${styles.titleblue} fs-5 fw-light`}>
                Inbound – Lead Generation
              </h4>
              <h6 className="fs-6 fw-light">
                Leads | Location Ontario, Canada - HVAC
              </h6>
              <div class="progress" role="proogressbar" style={{ height: 6 }}>
                <div class="progress-bar w-25"></div>
              </div>
            </div>
            <div className={styles.proogressbar}>
              <h4 className={`${styles.titleblue} fs-5 fw-light`}>
                Game-Changing Virtual Deals
              </h4>
              <h6 className="fs-6 fw-light">
                Pre Closed | Location Ontario, Canada - HVAC, Solar
              </h6>
              <div class="progress" role="proogressbar" style={{ height: 6 }}>
                <div class="progress-bar w-25"></div>
              </div>
            </div>
            <div className={`${styles.proogressbar}`}>
              <h4 className={`${styles.titleblue} fs-5 fw-light`}>
                Highest Conversion – Money Making
              </h4>
              <h6 className="fs-6 fw-light">
                Hot Leads | Location United States - Solar
              </h6>
              <div class="progress" role="progressbar" style={{ height: 6 }}>
                <div class="progress-bar w-25"></div>
              </div>
            </div>
            <div className={`${styles.proogressbar}`}>
              <h4 className={`${styles.titleblue} fs-5 fw-light`}>
                Expanding – New Market
              </h4>
              <h6 className="fs-6 fw-light">
                Hot Leads | Location Quebec, Canada - HVAC
              </h6>
              <div class="progress" role="proogressbar" style={{ height: 6 }}>
                <div class="progress-bar w-25"></div>
              </div>
            </div>
            <div className={`${styles.proogressbar}`}>
              <h4 className={`${styles.titleblue} fs-5 fw-light`}>
                Top Selling – Various Prices
              </h4>
              <h6 className="fs-6 fw-light">
                New Tier “A”,”B”,”C” Leads | Location Ontario, Canada - HVAC
              </h6>
              <div class="progress" role="proogressbar" style={{ height: 6 }}>
                <div class="progress-bar w-25"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 d-flex">
        <div class="row flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row flex-xlg-row py-5 my-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 pe-3 align-content-center">
            <img src={williamjohnson} alt="Polygon" className="img-fluid" />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <h1 className={`fs-1 fw-bold mb-5`}>WILLIAM JOHNSON</h1>
            <p className="fs-4 mt-5 text-break">
              Regional Sales Director, Effective HVAC 
            </p>
            <p className="fs-4 mt-5 text-break">
              In the end, LeadX Bull made sustainable improvements to our
              business lead gen strategy. We no longer conduct any door-knocking
              for prospecting, which frees up time for higher-value tasks. 
              <br />
              <br />
              LeadX Bull all-inclusive telemarketing solution also provided us a
              reliable source of high-quality leads, which allowed our sales
              reps to accelerate their goals.
            </p>
          </div>
        </div>
      </section>

      <section class="mt-5 ">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5">
          <div class="col-sm-12 col-md-4 mb-3 text-center">
            <img src={logo} alt="" />
            <p class="text-light fs-6 fw-light mt-4">
              LeadX Bull stays current with the market trends aiming not only to
              thrive But also to enhance in such a rapidly evolving digital age,
              and to keep up its telemarketing services with the client’s
              expectations worldwide.
            </p>
          </div>

          <div class="col-md-2 mb-3">
            <h5 className="mb-5">Quick Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light fs-6 fw-light">
                  Home
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light fs-6 fw-light">
                  About Us
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light fs-6 fw-light">
                  Services
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light fs-6 fw-light">
                  Support
                </a>
              </li>
              <li class="nav-item mb-3">
                <a href="#" class="nav-link p-0 text-light fs-6 fw-light">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-5 mb-3">
            <h5 className="mb-5">Contact Info</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-3 fs-6 fw-light">
                <a href="#" class="nav-link p-0 text-light">
                  6D – 7398 Yonge St PMB 810 Thornhill, ON L4J8J2
                </a>
              </li>
              <li class="nav-item mb-3 fs-6 fw-light">
                <a href="#" class="nav-link p-0 text-light">
                  Sales@Leadbull.net
                </a>
              </li>
              <li class="nav-item mb-3 fs-6 fw-light">
                <a href="#" class="nav-link p-0 text-light">
                  +1 484 857 2782
                </a>
              </li>
              <li class="nav-item mb-3 fs-6 fw-light">
                <a href="#" class="nav-link p-0 text-light">
                  www.Leadbull.net
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default AboutScreen;
