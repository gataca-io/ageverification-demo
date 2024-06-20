const RestrictedModal = (props: any) => {
    return (
        <div className="modal">
            <div
                className="lockImage"
                style={{
                    backgroundImage:
                        'url(https://assets.api.uizard.io/api/cdn/stream/8fc7e9cb-5670-41b6-9e1d-2316e410724f.png)',
                }}
            />
            <div className="title">Content Restricted</div>
            <div className="subtitle">
                This content is blocked due to age restrictions.
            </div>
            <div className="description">
                Please verify your age to proceed.
            </div>
            <button className="button">Verify Age</button>
        </div>
    )
}

export default RestrictedModal
