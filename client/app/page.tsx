"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadImage from "@/comps/UploadImage";
import UploadPhoto from "../components/component/upload-photo";
export default function Home() {
  return (
    <div className="flex w-[100vh] flex-col items-center justify-center">
      <section className="mx-auto my-6">
        <UploadPhoto />
      </section>

      <div className="">
        <UploadImage />
      </div>
    </div>
  );
}
