import Logo from "./Logo";
import CartButton from "./CartButton";
import ModeToggle from "./ModeToggle";
import NavLinks from "./NavLinks";
import LinkDropDown from "./LinkDropDown";

export default function Navbar() {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Logo />
        <LinkDropDown />
        <NavLinks />
        <div className="flex justify-center items-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
