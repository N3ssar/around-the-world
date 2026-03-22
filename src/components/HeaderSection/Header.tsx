import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { Container } from "../common";

function Header() {
  return (
    <header className="mb-6 h-20 w-full bg-white shadow duration-300 dark:bg-gray-800 dark:text-white">
      <Container className="flex h-full items-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </Container>
    </header>
  );
}

export default Header;
