import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

interface CardMainProps {
  label: string;
  image: string;
  badge?: string;
  button?: string;
}

function CardMain({ label, image, badge, button }: CardMainProps) {
  return (
    <Card className="container">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img
            src={image}
            style={{ width: "10vw", objectFit: "cover", height: "10vh", borderRadius: "0.5vw" }}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center py-1">
        <Badge variant="default">{badge}</Badge>
      </CardFooter>
      <CardFooter className="justify-center py-5">
        <Button variant="secondary" size={"sm"}>
          {button}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardMain;
