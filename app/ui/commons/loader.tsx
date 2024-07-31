import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full h-[60vh] flex justify-center">
      <RotatingLines
        strokeColor="gray"
        strokeWidth="3"
        animationDuration="0.7"
        width="10vw"
      />
    </div>
  );
}
