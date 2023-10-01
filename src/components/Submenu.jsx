import { useGlobalContext } from "../utils/context"
import sublinks from "../data";

const Submenu = () => {
  const { pageId } = useGlobalContext();
  const submenu = sublinks.filter((link) => link.pageId === pageId);
  return (
    <>
      {submenu.length > 0 && (
        <div className='submenu show-submenu'>
          <h5>{submenu[0].page}</h5>
          <ul className="submenu-links">
            {submenu[0] && submenu[0].links.map((sublink) => {
              const { id, label, icon, url } = sublink;
              return <li key={id}><a href={url}>{icon}{label}</a></li>
            })}
          </ul>
        </div >
      )}
    </>
  )
}

export default Submenu