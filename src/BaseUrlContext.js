import { createContext, useContext, useState } from "react";

const BaseUrlContext = createContext();

export function BaseUrlProvider({ children }) {
    const [baseUrl, setBaseUrl] = useState("http://localhost:4000/recipes/");

    return(
        <BaseUrlContext.Provider value = {{ baseUrl, setBaseUrl }}>
            { children }
        </BaseUrlContext.Provider>
    );
}

export function useBaseUrl() {
    return useContext(BaseUrlContext);
}
