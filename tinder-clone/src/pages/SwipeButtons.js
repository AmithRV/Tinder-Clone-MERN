function SwipeButtons() {
    return (<>
        <div className="swipeButtons">
            <div className="swipeButtons_rotate">
                <img src='./rotate.svg' alt="rotate" className="swipeButon_icon" />
            </div>
            <div className="swipeButtons_close">
                <img src='./close.svg' alt="close" className="swipeButon_icon" />
            </div>
            <div className="swipeButtons_star">
                <img src='./star.svg' alt="star" className="swipeButon_icon" />
            </div>
            <div className="swipeButtons_favorite">
                <img src='./favorite.svg' alt="favorite" className="swipeButon_icon" />
            </div>
            <div className="swipeButtons_bolt">
                <img src='./bolt.svg' alt="bolt" className="swipeButon_icon" />
            </div>
        </div>
    </>);
}

export default SwipeButtons