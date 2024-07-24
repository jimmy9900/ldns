import { AlignCenterOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './style.module.css'
import convert from 'color-convert'; // Import color-convert

export default function OverviewCard({ label, value, bgColor, className, }) {
    console.log(bgColor);
    const color = convert.hex.rgb(bgColor.replace('#', ''));
    console.log(color);

    return (
        <div className="card w-100 m-2 rounded-3" style={{
            margin: 'auto', borderTop: `12px solid ${bgColor}`,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}>
            <div className="card-body text-center">
                <div className='col-12 d-flex justify-content-between'>
                    <h5 className="fs-4 fw-medium fst-italic">{label}</h5>
                    <div className='col-4 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <TeamOutlined className='fs-4 p-0 m-0' />
                            <p className='fs-4 p-0 m-0 px-2'>Team</p>
                        </div>
                        <AlignCenterOutlined className='fs-4' />
                    </div>
                </div>
                <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                        width: `200px`,
                        height: `200px`,
                        margin: 'auto',
                        borderRadius: "50%",
                        border: `25px solid rgba(${color.join(",")}, 0.20)`, //                     
                    }}
                >
                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: `150px`,
                            height: `150px`,
                            borderRadius: "50%",
                            backgroundColor: `rgb(${color.join(",")})`,
                            // backgroundColor:"transparent"// `rgba(${color[0]}, ${color[1]}, ${color[2], 1})`,
                            // backgroundColor:{bgColor}// color[0] + ', ' + color[1] + ', ' + color[2],
                            // margin: 'auto',
                        }}
                    >
                        <h3 style={{ color: "#fdffef" }}>{value}</h3>
                    </div>
                </div>
            </div>
        </div >
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

