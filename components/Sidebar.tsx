import React from "react";
import CardMain from "./CardMain";
import { Button } from "./ui/button";

function Sidebar() {
  return (
    <div className="container flex justify-evenly py-5">
      <div className="flex">
        <div className="column-1 flex flex-col gap-5">
          <Button variant={"outline"}>CASUAL</Button>
          <Button variant={"outline"}>ETHNIC</Button>
          <Button variant={"outline"}>CROSSOVER</Button>
          <Button variant={"outline"}>BACKLACE</Button>
          <Button variant={"outline"}>MODAL</Button>
        </div>
      </div>
      <div>
        <div className="container flex gap-5 py-2 ">
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
        </div>
        <div className="container flex gap-5 py-2 ">
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
        </div>
        <div className="container flex gap-5 py-2 ">
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
        </div>
        <div className="container flex gap-5 py-2 ">
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra1.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
          <CardMain label="Hello" image="/image/bra2.jpg" badge="50% less" button="buy now!" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
