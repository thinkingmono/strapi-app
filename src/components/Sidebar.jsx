import sublinks from '../data';
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from '../utils/context';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button type="button" className='close-btn' onClick={closeSidebar}><FaTimes /></button>
        {sublinks && sublinks.map((linkTitle) => {
          const { pageId, page, links } = linkTitle;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <ul className='sidebar-sublinks'>
                {links && links.map((sublink) => {
                  const { id, label, icon, url } = sublink;
                  return <li key={id}><a href={url}>{icon}{label}</a></li>
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar