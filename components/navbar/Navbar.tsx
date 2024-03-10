"use client";
import React from "react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <div className="container flex justify-between">
      <div className="py-5 flex">
        <img src="/image/ZEBIAA.svg" />
      </div>
      <div className="py-6 flex gap-10">
        <Button variant={"ghost"}>Login</Button>
        <Button variant={"ghost"}>Signup</Button>
        <Button variant={"outline"}>shop now!</Button>
      </div>
    </div>
  );
}

export default Navbar;
