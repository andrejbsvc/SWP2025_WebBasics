import React from "react";

type Props = {
  title ?: string;
  description ?: string;
};


export default function Button({title}: Props) {
    return (
      <div className="bg-green-300 border m-4 w-30 h-10 flex justify-center items-center cursor-pointer">Klick</div>
    );
  }
  