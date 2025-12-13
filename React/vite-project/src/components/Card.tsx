import React, { useState } from "react";
import { useFormState } from "react-dom";

type Props = {
  name?: string;
  job?: string;
  image?: string;
  title?: string;
  description?: string;
};

export default function Card({ name, job, image, description, title }: Props) {
  const [amountOfClicks,setAmountOfClicks] = useState(0); 
  
  let style = amountOfClicks > 5? "bg-blue-400" : "";
  
  return (
 <div 
 className={`border p-4 hover:cursor-pointer ${style}`}
 onClick={() => {
 setAmountOfClicks(amountOfClicks + 1);
 }}
 >
  <h1 className ="font-extrabold text 2xl"></h1>

  <p>{description}</p>
  <div>Amount of clicks: {amountOfClicks}</div>
 </div>
  );
}

