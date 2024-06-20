import svg from '../assets/group.svg'

export type VideoProps = {
    display?: boolean
}

const Video = (props: VideoProps) => {
    return props.display ? (
        <div
            className="horizontal-center video"
            style={{ backgroundImage: `url(${svg})` }}
        ></div>
    ) : (
        <></>
    )
}

export default Video
