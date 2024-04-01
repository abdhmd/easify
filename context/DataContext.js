// LanguageContext.js
import { data ,languages } from "@/lib/data";
import React, { createContext, useState } from "react";
const DataContext = createContext();

const ContextProvider = ({ children }) => {

  const [language, setLanguage] = useState(languages[0]);

  const contentData = data.filter(d => language === d.language);
  const content = contentData[0]

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        content
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
