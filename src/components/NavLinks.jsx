import sublinks from '../data'
import { useGlobalContext } from '../utils/context'

const NavLinks = () => {
    const { setPageId } = useGlobalContext();
    return (
        <div className="nav-links">
            {sublinks && sublinks.map((link) => {
                const { pageId, page } = link;
                return <button type="button" key={pageId} onMouseEnter={() => setPageId(pageId)} className='nav-link'>{page}</button>
            })}
        </div>
    )
}

export default NavLinks