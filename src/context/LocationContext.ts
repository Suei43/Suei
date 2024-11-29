import React, { createContext } from "react";

interface LocationContextInterface {
  location: string;
  setlocation: React.Dispatch<React.SetStateAction<string>>;
}

export const LocationContext = createContext<LocationContextInterface>({
  location: "home",
  setlocation: () => {},
});
