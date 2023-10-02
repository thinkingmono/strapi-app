import { useGlobalContext } from "../utils/context"
import sublinks from "../data";
import { useRef } from "react";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === pageId);
  const submenuContainer = useRef();

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientY > bottom - 1 || clientX > right - 1) {
      setPageId(null);
    }
  }

  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave} ref={submenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{ gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr' }}>
        {currentPage?.links?.map((sublink) => {
          const { id, label, icon, url } = sublink;
          return <a href={url} key={id}>{icon}{label}</a>
        })}
      </div>
    </div >
  )
}

export default Submenu