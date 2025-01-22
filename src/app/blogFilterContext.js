'use client'

import React, { useState, createContext } from "react";

export const BlogFilterContext = createContext();

export function BlogFilterProvider({ children }) {
    const [filter, setFilter] = useState(null);
    return (
        <BlogFilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </BlogFilterContext.Provider>
    )
}