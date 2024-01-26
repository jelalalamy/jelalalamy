import HeaderMain from "./HeaderMain"
import HeaderNav from "./HeaderNav"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <HeaderMain/>
        <HeaderNav/>
      </div>
      <HeaderSocials/>
    </header>
  )
}

export default Header