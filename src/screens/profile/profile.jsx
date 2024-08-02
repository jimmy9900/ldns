// @ts-nocheck
import React from "react";
import styles from "./style.module.css";
import profile from "./../../assets/profilepic.png";
import logo from "./../../assets/logo.png";
import { Form, Input } from "antd";

const Profile = () => {
  return (
    <div className="containere p-3 bg-dark vh-100 overflow-auto">
      <div className="row justify-content-between">
        <div className="col-md-6 mt-5 px-4 mb-3">
          <div className={`card ${styles.bgsection} `}>
            <div className="card-body">
              {/* card of Personal Data */}
              <div className="d-flex flex-column ">
                <h3 className="fs-2 text-white mb-4">Clients Information</h3>
                <div className="align-items-center text-center">
                  <img
                    src={profile}
                    alt="Admin"
                    className="rounded-circle img-fluid"
                    width="100"
                  />
                </div>

                <div className="mt-3 text-white">
                  <form action="">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="Jack Danial"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="JackDanial@leadbull.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="66786855"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.bgsection} card mt-3`}>
            {/* Service linkes */}
            <div class="card-body">
              <h5 class="card-title text-white mb-4">Services</h5>
              <div className="row d-flex justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-4 mb-2">
                  <div className={`${styles.bgservicesection} card text-white`}>
                    <div className="card-header text-start">
                      <h6 className="fs-5 text-center">Service Name</h6>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Leads</h5>
                      <h5 className="">5+</h5>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Sales</h5>
                      <h5 className="">7+</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mb-2">
                  <div className={`${styles.bgservicesection} card text-white`}>
                    <div className="card-header text-start">
                      <h6 className="fs-5 text-center">Service Name</h6>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Leads</h5>
                      <h5 className="">5+</h5>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Sales</h5>
                      <h5 className="">7+</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 mb-2">
                  <div className={`${styles.bgservicesection} card text-white`}>
                    <div className="card-header text-start">
                      <h6 className="fs-5 text-center">Service Name</h6>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Leads</h5>
                      <h5 className="">5+</h5>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="fw-medium text-start">Sales</h5>
                      <h5 className="">7+</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 px-4 mb-3">
          <div className={`card ${styles.bgsection} `}>
            <div className="card-body mb-4">
              <div className="row">
                <div className="col">
                  <h6 className="fs-5 text-start text-white mb-5">
                    Company Information
                  </h6>
                </div>
                <div className="col-12 text-center">
                  <img src={logo} alt="" className="img-fluid w-50" />
                  <h6 className="fs-5 my-5 fw-light text-center text-white mb-5">
                    Edit company profile
                  </h6>
                </div>
                <div className="mt-3 text-white pb-5">
                  <form action="">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Company Name:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="Jack Danial"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="JackDanial@leadbull.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.transbginput}`}
                        id="exampleFormControlInput1"
                        value="66786855"
                      />
                    </div>
                    <div className="justify-content-between d-flex">
                      <button
                        className="btn btn-outline-primary px-sm-4 px-md-5 text-white fw-bold"
                        type="reset"
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary px-sm-4 px-md-5 fw-bold"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
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
