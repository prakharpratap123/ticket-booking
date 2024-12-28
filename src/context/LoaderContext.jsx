import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const LoaderContext = createContext(undefined);

export function LoaderWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

// Define PropTypes for children
LoaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporting context hook as a named export
export function useLoaderContext() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoaderContext must be used within a LoaderWrapper");
  }
  return context;
}
