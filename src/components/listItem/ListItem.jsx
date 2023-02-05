
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import './listItem.scss';
// import YouTube from 'react-youtube';

import { useState } from 'react';

export default function ListItem({ index }) {
    const [isHoverd, setIsHovered] = useState(false);
    const trailer = "/[Dance] 라이언,춘식.mp4";

    console.log("호버", isHoverd);

    return (
        <div className="listItem"
            style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <img src="data:image/png;base64,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" alt="" />

            {isHoverd && (
                <>
                    <video type="html" src={trailer} autoPlay={true} loop />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+15</span>
                            <span>2018</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus ullam sit architecto, necessitatibus asperiores itaque.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
