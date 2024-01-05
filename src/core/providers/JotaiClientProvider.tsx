"use client"
import React from "react";
import { Provider, createStore } from "jotai";

const store = createStore();

const JotaiClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default JotaiClientProvider;
