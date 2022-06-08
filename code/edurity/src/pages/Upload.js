import React from "react";
import { useEffect } from "react";

const Upload = ({ setActive }) => {
  useEffect(() => {
    setActive(3);
  }, [setActive]);

  return <div>Upload</div>;
};

export default Upload;
