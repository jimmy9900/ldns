import { AlignCenterOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './style.module.css'

export default function OverviewCard({ bgColor }) {

    return (
        <div>
            <div className={styles.card} style={{ backgroundColor: bgColor }}>
                <div className='d-flex justify-content-between p-3'>
                    <h3>Deal Count</h3>
                    <div className='d-flex col-3 justify-content-between'>
                        <div>
                            <TeamOutlined />
                            <label>Team</label>
                        </div>
                        <AlignCenterOutlined />                    </div>
                </div>
            </div>
        </div>
    );
}

