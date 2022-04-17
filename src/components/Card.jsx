const Card ({ icon, selected, onClick }) => {
    return (
        <div className="card">
            <div className={selected && "selected"} onClick={onClick}>
                <p className="card-face">icon</p>
                <p className="card-back">🦄</p>
            </div>
        </div>
    );
};

export default Card;