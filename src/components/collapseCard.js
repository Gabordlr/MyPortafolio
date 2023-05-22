import { useState, Fragment } from "react";
import {data} from "../media/LanguageData.js";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import SkillComp from "./SkillComp";
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <Fragment className="self-center">
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-center border border-neutral-800 text-neutral-300 font-mono">
          <ChevronDoubleDownIcon className="h-5 w-5"/>
        </AccordionHeader>
        <AccordionBody className="flex justify-center">
        <SkillComp prompt={14} data={data} />
        </AccordionBody>
      </Accordion>
      </Fragment>
  );
}