import React from "react";
import Image from "next/image";
import logo from "./loader.gif";
import verLoader from "./ver_loader.gif";
function Loader() {
  return (
    <div>
      <nav className="flex flex-row p-6 gap-6">
        <div>
          <Image src="./logo.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="mt-2">
          <h1>Swiftify</h1>
        </div>
      </nav>
      <div className="bg-[1c1c1c]">
        <h1 className="text-4xl flex justify-center">Uploading</h1>
        <div className="flex justify-center">
          <Image src={logo} alt="loader" width={200} height={200} />
        </div>
      </div>
      <div className="flex justify-center z-0">
        <Image src={verLoader} alt="loader" width={200} height={200} />
      </div>
      <div className="relative flex flex-row justify-center z-10">
        <div className="absolute flex flex-col top-0 left-10">
          <p className="py-3">File being Uploaded:</p>
          <ul className="text-slate-500 justify-center">
            <li>File1.mp4</li>
            <li>File2.mp3</li>
            <li>File3.txt</li>
          </ul>
        </div>
        <div className="absolute p-4 top-0 right-10">
          <p>Time remaining</p>
          <h3>19:00</h3>
        </div>
      </div>
    </div>
  );
}

export default Loader;
