import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function Card({ title, description }: Props) {
  return (
    <div className="border bg-red-200 p-4 items-center">
    <h2 className="font-bold">{title}</h2>
    <p>{description}</p>
  </div>
  )


}
