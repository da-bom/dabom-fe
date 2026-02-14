"use client";

import { useEffect, useRef, useState } from "react";

import Icon from "./Icon";

const DropDown = ({
  options,
  selectedOption,
  setSelectedOption,
}: {
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-82" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-white flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border-[1px] border-gray-200 px-4 hover:border-gray-300 active:bg-gray-50"
      >
        <span className="text-body1-m text-gray-800">{selectedOption}</span>
        <div
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <Icon name="Chevron" className="-rotate-90"></Icon>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-brand-white shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="flex h-12 items-center px-4 text-body1-m text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
