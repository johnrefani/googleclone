import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { Component } from "react";

export default function Home() {
  return (
  <div>
    <div>
      <Header/>
    </div>
    <p className="flex justify-center w-full text-7xl font-light p-6 mt-32 font">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#34A853]">g</span>
      <span className="text-[#EA4335]">l</span>
      <span className="text-[#4285F4]">e</span>
    </p>
    <div className="flex justify-center mt-3 mb-10">
      <Searchbar/>
    </div>
    <div className="flex justify-center w-full items-center space-x-1 mb-5">
      <Button ButtonText="Google Search" Href="https://www.google.com"/>
      <Button ButtonText="I'm Feeling Lucky" Href="https://www.youtube.com"/>
    </div>
    <div className="flex justify-center w-full items-center space-x-2">
      <p className="text-sm">Google offered in:</p>
      <p className="text-[#4285F4] text-sm hover:underline p-0">Filipino</p>
      <p className="text-[#4285F4] text-sm hover:underline p-0">Cebuano</p>
    </div>
    <div className="absolute bottom-0 left-0 w-full">
      <Footer/>
    </div>
  </div>
  );
}
