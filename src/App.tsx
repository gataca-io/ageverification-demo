import { useNavigate } from 'react-router-dom'
const HomeScreen = (props: any) => {
    const navigate = useNavigate()
    return (
        <div className="screen">
            <div className="center">
                <div className="title">Welcome to SensualVisions</div>
                <div className="subtitle">
                    You must be 16 years or older to access this site.
                </div>
                <a href="/adult">
                    <button className="horizontal-center button">
                        Verify Age
                    </button>
                </a>
                <div className="description">
                    You'll need an ID Wallet with a valid age proof
                </div>
                <div>
                    <div
                        className="lockImage"
                        style={{
                            marginLeft: 183,
                            backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/26dab62a-addb-49fd-bb0f-8bf0bd3667b9.png)`,
                        }}
                    />
                    <div
                        className="image"
                        style={{
                            marginLeft: 430,
                            backgroundImage: `url(https://assets.api.uizard.io/api/cdn/stream/4566c9db-e1c5-4183-b832-cfb2c70816ce.png)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
