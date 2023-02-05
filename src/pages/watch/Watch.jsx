import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="/[Dance] 라이언,춘식.mp4"/>
        </div>
    )
}
