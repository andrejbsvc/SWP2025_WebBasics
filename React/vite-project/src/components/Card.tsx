import React from "react";

type Props = {
  name?: string;
  job?: string;
  image?: string;
  title?: string;
  description?: string;
};

export default function Card({ name, job, image, description, title }: Props) {
  return (
    <div className="w-[250px] border rounded-xl overflow-hidden shadow-lg bg-white">
      
  
      <img
        src={image}
        alt={name}
        className="w-full h-[160px] object-cover"
      />


   
      <div className="p-4 text-center">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-600">{job}</p>
      </div>

    </div>
  );
}

