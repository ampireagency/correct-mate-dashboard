import React from "react";

const PageHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`mb-5 border-b-2 border-muted-foreground/30 ${className}`}>
      {children}
    </div>
  );
};

export default PageHeader;
