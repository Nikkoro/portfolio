"use client";
import React from "react";
import { skills } from "./data";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

export default function Skills() {
  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <IconContext.Provider
      value={{
        size: "32",
        style: { strokeWidth: 1.2 },
      }}
    >
      <section className="w-full py-8 md:py-12" id="skills">
        <div className="container grid items-center justify-center gap-4 px-0 text-center  lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
          </div>
          <Card>
            <CardContent className="flex flex-wrap justify-center p-2">
              {skills.map((skill, index) => (
                <motion.li
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  className="list-none"
                  custom={index}
                  key={index}
                >
                  <Badge
                    variant={"secondary"}
                    className="m-2 items-center text-sm lg:text-lg"
                    key={skill.name}
                  >
                    {skill.icon}
                    &nbsp;
                    {skill.name}
                  </Badge>
                </motion.li>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </IconContext.Provider>
  );
}
