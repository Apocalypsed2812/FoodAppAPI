function LayerHidden({ handleClick }) {
    return (
        <div
            onClick={handleClick}
            className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-10"
        ></div>
    );
}

export default LayerHidden;
