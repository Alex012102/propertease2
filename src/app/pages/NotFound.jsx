import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center h-screen text-center"
      style={{
        background: "radial-gradient(circle, white 10%, #ff7433 200%)",
      }}
    >
      <div>
        <p className="text-5xl font-semibold">OOPS!</p>
        <div className="font-extrabold text-9xl">404</div>
        <p>Unable to find the page you are looking for.</p>
      </div>
      <div className="w-[40rem] max-w-full">
        <DotLottieReact
          src="https://lottie.host/459f8eb0-7b7f-499a-a8e2-bdd6fc6394c1/540CrYGPI3.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default NotFound;
