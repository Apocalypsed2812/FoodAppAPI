import LoadingGif from "../../images/loading.gif";
function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-white opacity-80">
            <img src={LoadingGif} alt="" className="rotate-280" />
        </div>
    );
}

export default Loading;
