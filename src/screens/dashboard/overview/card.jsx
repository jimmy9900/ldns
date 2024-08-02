// @ts-nocheck
import { AlignCenterOutlined, TeamOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import convert from "color-convert"; // Import color-convert

export default function OverviewCard({ label, value, bgColor, className }) {
  //   console.log(bgColor);
  const color = convert.hex.rgb(bgColor.replace("#", ""));
  //   console.log(color);

  return (
    <div
      className="card w-100 m-1 rounded-4 bg-dark"
      style={{
        margin: "auto",
        borderTop: `30px solid ${bgColor}`,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className={`${styles.bgcolorgrid} card-body text-center rounded-bottom-4`}
      >
        <div className="col-12 d-flex justify-content-between">
          <h5 className="fs-6 fw-medium fst-italic text-white">{label}</h5>
          <div className="col-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <TeamOutlined className="fs-5 p-0 m-0 text-white" />
              <p className="fs-6 p-0 m-0 px-2 text-white">Team</p>
            </div>
          </div>
        </div>
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: `150px`,
            height: `150px`,
            margin: "auto",
            borderRadius: "50%",
            border: `30px solid rgba(${color.join(",")}, 0.20)`,
          }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: `90px`,
              height: `90px`,
              borderRadius: "50%",
              backgroundColor: `rgb(${color.join(",")})`,
            }}
          >
            <h6 style={{ color: "#fdffef" }}>{value}</h6>
          </div>
        </div>
      </div>
    </div>
    // <div className={`${className} m-1`} style={{
    //     borderRadius: "24px",
    //     backgroundColor: bgColor,
    //     borderTop: "10px solid black",
    //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    // }}>
    //     <div className='d-flex justify-content-between p-3'>
    //         <div className='col-4'><h3>Deal Count</h3></div>
    //         <div className='d-flex  justify-content-between'>
    //             <div className='d-flex'>
    //                 <TeamOutlined />
    //                 <label>Team</label>
    //             </div>
    //             <AlignCenterOutlined />
    //         </div>
    //     </div>
    // </div >
  );
}
