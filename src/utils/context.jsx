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

    const selectSubmenu = (id) => {
        if (id === null) {
            const tmout = setTimeout(() => setPageId(id), 1500);
            return () => clearTimeout(tmout);
        } else {
            // console.log(id);
            setPageId(id);
        }
    }

    return (
        <GlobalContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, selectSubmenu }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;