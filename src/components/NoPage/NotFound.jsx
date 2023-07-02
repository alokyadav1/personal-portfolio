import { HashLink } from "react-router-hash-link";
import { Player } from "@lottiefiles/react-lottie-player";
function NotFound() {
    return (
        <div className="h-screen flex flex-wrap flex-col items-center justify-center md:justify-start">
            <div className="animatedSVG w-fit mx-auto">
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/private_files/lf30_tonsVH.json"
                    className="mx-auto"
                >
                </Player>
            </div>
            <div className="text-center">
                <p className="uppercase font-extrabold text-3xl my-5">Page not found</p>
                <HashLink smooth to="/" className="text-center block rounded bg-blue-700 text-white hover:bg-white hover:text-blue-700 py-2 px-4 w-fit mx-auto">Got to Home</HashLink>
            </div>
        </div>
    );
}

export default NotFound;