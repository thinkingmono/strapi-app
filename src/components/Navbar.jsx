import logo from '../assets/react.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'
import sublinks from '../data'

const Navbar = () => {
  const { openSidebar, selectSubmenu } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="toggle-btn" onClick={openSidebar}><FaBars /></button>
        <ul className="nav-links">
          {sublinks && sublinks.map((link) => {
            const { pageId, page } = link;
            return <li key={pageId} onMouseEnter={() => selectSubmenu(pageId)} onMouseLeave={() => selectSubmenu(null)}><a href="" className='nav-link'>{page}</a></li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar