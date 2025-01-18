import { HiOutlineBell, HiPlus, HiSearch } from "react-icons/hi"
import { Link } from "react-router"

export function Header() {
    return (
        <>
            <header>
                <div className="search">
                    <form action="">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search..."
                        />
                        <HiSearch />
                    </form>
                </div>
                <div className="buttons">
                    <button type="button">
                        <HiOutlineBell />
                    </button>
                    <Link to="/edit/new">
                        <HiPlus />
                    </Link>
                </div>
            </header>
        </>
    )
}
