import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const openSidebar = () => {
        console.log('Sidebar Open');
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        console.log('Sidebar Close');
        setIsSidebarOpen(false);
    }

    return (
        <GlobalContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;