import React from "react";
import { Link } from "react-router-dom";
import { FooterMenu } from "../data";

export function Footer() {
  return (
    <div className="flex justify-center bg-slate-500">
      <div className="w-11/12 flex lg:flex-row flex-col lg:gap-20 gap-10 py-20 text-white">
        <h1 className="lg:text-start text-center font-bold lg:text-3xl md:text-xl text-lg">
          LOGO REJUBAGIBAGI.COM
        </h1>
        <div className="flex sm:flex-row flex-col w-full gap-10 sm:items-start items-center justify-center">
          {FooterMenu.map((menu, i) => {
            return (
              <div
                className="flex sm:flex-col flex-row justify-center flex-wrap gap-7 lg:gap-10 w-full"
                key={i}
              >
                {menu.map((m, i) => {
                  return <Link key={i}>{m.display}</Link>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
