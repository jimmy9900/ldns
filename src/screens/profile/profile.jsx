import React from "react";
import { Style } from "./style.module.css";
const Profile = () => {
  return (
    <div className="container">
      <div className="row gutter-sm justify-content-between">
        <div className="col-md-4 mt-5 ms-4 mb-3">
          <div className="card">
            <div className="card-body">
              {/* card of Personal Data */}
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width="100"
                />
                <div className="mt-3">
                  <h4>Jack Danial</h4>
                  <p className="text-secondary mb-1 fs-5">
                    <b> Company: </b> Solar Robot
                  </p>
                  <p className="text-muted font-size-sm fs-6">
                    <b>Address</b> Bay Area, San Francisco, CA
                  </p>
                  <button className="btn btn-outline-info">Edit</button>
                  <button className="btn btn-primary ms-2">Book a Call</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            {/* Service linkes */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0 fs-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-globe mr-2 icon-inline me-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Service 1
                </h6>
                <span className="text-secondary fs-6">Customer Service</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0 fs-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-globe mr-2 icon-inline me-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Service 2
                </h6>
                <span className="text-secondary fs-6">Telesales</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-7 mt-5 ms-1 mb-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 fs-5 text-start">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary fs-6">
                  Jack Danial Kenneth Valdez
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 fs-5 text-start">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary fs-6">
                  Jack_Danial@mail.com
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 fs-5 text-start">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary fs-6">
                  (+239) 816-9029
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 fs-5 text-start">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary fs-6">
                  (+320) 380-4539
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 fs-5 text-start">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary fs-6">
                  Bay Area, San Francisco, CA
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12 text-start ms-3">
                  <a
                    className="btn btn-info"
                    target="__blank"
                    href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row gutters-sm">
            <div className="col-sm-12 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center justify-content-center mb-3">
                    <i className="material-icons text-info mr-2 me-1">
                      Service
                    </i>
                    Insight
                  </h6>
                  <p className="fs-6 justify-content-start text-start">
                    Web Design
                  </p>
                  <div className="progress mb-3 section-height">
                    <div
                      className="progress-bar bg-primary w-50"
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
