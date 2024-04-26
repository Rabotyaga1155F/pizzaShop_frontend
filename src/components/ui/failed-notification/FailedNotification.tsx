import React, { FC } from "react";

const FailedNotification: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white font-bold p-4 rounded-lg">
      {children}
    </div>
  );
};

export default FailedNotification;
