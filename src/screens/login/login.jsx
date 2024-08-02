// @ts-nocheck
import React from "react";
import styles from "./style.module.css";
import logo from "./../../assets/logo.png";
import { DatePicker } from "antd";

export default function LoginScreen() {
  return (
    <div className={`${styles.bglog}`}>
      <section className="container">
        <div className={`py-5`}>
          <div
            className={`${styles.transbg} justify-content-start text-center border border-secondary rounded mx-5 p-5`}
          >
            <img src={logo} alt="" />
            <h1 className="fs-3 fw-bold text-white pt-5">Log in</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
