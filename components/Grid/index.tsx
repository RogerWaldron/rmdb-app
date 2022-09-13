import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ title, children, className }: Props) => (
  <div className={className}>
    <h2 className="pb-4 text-xl font-bold">{title}</h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {children}
    </div>
  </div>
);

export default Grid;
