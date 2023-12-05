// import React from "react";
// import "./fileAccess.css";
// import { folder } from "@/public";
// import Image from "next/image";

// const FolderSection = ({ title, folders }) => (
//   <div className="flex flex-col items-center">
//     <div className="font-normal text-black text-[28.80px] leading-[28.80px]">
//       {title}
//     </div>
//     <div className="grid grid-cols-4 gap-4">
//       {folders.map((folder, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <Image src={folder.image} width={100} height={100} alt={folder.alt} />
//           <div className="text-center text-black text-[17px] font-normal leading-tight">
//             {folder.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// function FileAccess() {
//   const folderData = [
//     
//   ];

//   return (
//     <div className="w-screen h-screen relative bg-white font-serif">
//       <div className="w-6 h-6 top-[998px] absolute"></div>
//       <div className="absolute left-[200px] top-10 text-stone-950 text-2xl font-bold font-['Inter']">
//         File Access
//       </div>
//       <div className="absolute right-[200px] top-10 text-stone-500 text-2xl font-bold font-['Inter']">
//         5th Dec, 2023, 03:44 IST
//       </div>

//       <div className="w-[26px] h-[26px] left-[54px] top-[238px] absolute"></div>
//       <div className="w-[1349.01px] h-[0px] left-[46px] top-[138px] absolute border-4 border-black"></div>

//       {folderData.map((section, index) => (
//         <FolderSection key={index} title={section.title} folders={section.folders} />
//       ))}
//     </div>
//   );
// }

// export default FileAccess;
import React from "react";
import "./fileAccess.css";
import { folder } from "@/public";
import Image from "next/image";

const FolderSection = ({ title, folders }) => (
  <div className="flex flex-col items-center border-b border-black pb-4 mb-4">
    <div className="font-normal text-black text-[28.80px] leading-[28.80px]">
      {title}
    </div>
    <div className="grid grid-cols-4 gap-4">
      {folders.map((folder, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image src={folder.image} width={100} height={100} alt={folder.alt} />
          <div className="text-center text-black text-[17px] font-normal leading-tight">
            {folder.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

function FileAccess() {
  const folderData = [
    {
              title: "Today",
              folders: [
                { image: folder, alt: "folder_logo", name: "Folder 1" },
                { image: folder, alt: "folder_logo", name: "Folder 2" },
                { image: folder, alt: "folder_logo", name: "Folder 3" },
                { image: folder, alt: "folder_logo", name: "Folder 4" },
              ],
            },
            {
              title: "Yesterday",
              folders: [
                { image: folder, alt: "folder_logo", name: "Folder 5" },
                { image: folder, alt: "folder_logo", name: "Folder 6" },
                { image: folder, alt: "folder_logo", name: "Folder 7" },
                { image: folder, alt: "folder_logo", name: "Folder 8" },
              ],
            },
            {
              title: "Sun, 3 Dec",
              folders: [
                { image: folder, alt: "folder_logo", name: "Folder 9" },
                { image: folder, alt: "folder_logo", name: "Folder 10" },
                { image: folder, alt: "folder_logo", name: "Folder 11" },
                { image: folder, alt: "folder_logo", name: "Folder 12" },
              ],
            },
  ];

  return (
    <div className="w-screen h-screen relative bg-white font-serif">
      <div className="w-6 h-6 top-[998px] absolute"></div>
      <div className="absolute left-[200px] top-10 text-stone-950 text-2xl font-bold font-['Inter']">
        File Access
      </div>
      <div className="absolute right-[200px] top-10 text-stone-500 text-2xl font-bold font-['Inter']">
        5th Dec, 2023, 03:44 IST
      </div>

      <div className="w-[26px] h-[26px] left-[54px] top-[238px] absolute"></div>
      <div className="w-[1349.01px] h-[0px] left-[46px] top-[138px] absolute"></div>

      {folderData.map((section, index) => (
        <FolderSection key={index} title={section.title} folders={section.folders} />
      ))}
    </div>
  );
}

export default FileAccess;
