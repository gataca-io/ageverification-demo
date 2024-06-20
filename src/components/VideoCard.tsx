import svg from '../assets/group.svg'

const Video = (props: any) => {
    return (
        <div
            className="horizontal-center video"
            style={{ backgroundImage: `url(${svg})` }}
        ></div>
    )
}

export default Video
