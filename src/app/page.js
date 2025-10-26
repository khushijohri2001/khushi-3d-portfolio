import Image from "next/image";
import {outerspaceblue} from "../../public/background/index.js";
import RenderModel from "@/components/RenderModel.jsx";
import Brain from "@/components/models/Brain.jsx";

export default function Home() {
  return (

    <main className="flex h-screen flex-col items-center justify-between bg-black relative">
      <Image src={outerspaceblue} alt="Outer Space Blue" className="w-full h-full object-cover opacity-25 "/>

      <div className="w-full h-full absolute top-0 left-0">
     
        
        <RenderModel>
          <Brain/>
        </RenderModel>
      </div>
    </main>
  );
}
