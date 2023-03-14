import Spinner from 'react-spinners/ClimbingBoxLoader';

export default function ClimbingBoxLoader() {
    return (
        <div
            className={` fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-50`}
        >
            <div className="flex flex-col items-center mt-[40vh] gap-4">
                <Spinner color="#36d7b7" cssOverride={{}} loading size={15} speedMultiplier={1} />
            </div>
        </div>
    );
}