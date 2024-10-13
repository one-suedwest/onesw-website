import React from 'react';
import { InstagramIcon, Menu, X, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/navLinks';

interface HeaderProps {
  href: string;
}

const Header = (props: HeaderProps) => {
  const {
    href,
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [fadedState, setFadedState] = React.useState(true);

  const setMenuState = () => {
    if (!isOpen) {
      setIsOpen(true);
      setFadedState(false);
    } else {
      setFadedState(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  return (
    <header className="p-8 bg-transparent absolute z-10 w-full flex justify-between items-center gap-4">
      <a href="/" aria-label="Startseite">
        <svg
            width="80"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.993 5.647c-4.052 0-7.348 3.299-7.348 7.353s3.296 7.353 7.348 7.353 7.348-3.299 7.348-7.353-3.296-7.353-7.348-7.353Zm0 19.353C6.38 25 1 19.617 1 13S6.38 1 12.993 1s11.993 5.383 11.993 12-5.38 12-11.993 12ZM67.007 5.647c-2.996 0-5.746 1.88-6.843 4.677l-.138.352h13.961l-.137-.352c-1.097-2.797-3.847-4.677-6.843-4.677Zm0 19.353c-6.613 0-11.993-5.383-11.993-12s5.38-12 11.993-12S79 6.383 79 13a12.1 12.1 0 0 1-.225 2.324H60.026l.138.352c1.097 2.797 3.847 4.677 6.843 4.677 2.062 0 4.031-.87 5.422-2.39l5.5.001a12.032 12.032 0 0 1-.979 1.747A11.985 11.985 0 0 1 67.007 25ZM40 5.647c4.052 0 7.349 3.299 7.349 7.353v12h4.644V13c0-6.617-5.38-12-11.993-12S28.007 6.383 28.007 13v12h4.645V13c0-4.054 3.296-7.353 7.348-7.353Z"
            fill="#fff"
          />
        </svg>
      </a>
      <nav
        aria-label="Hauptnavigation"
        className={cn(
          "flex gap-4",
          isOpen ? "fixed right-8" : "relative mt-[-1px]"
        )}
      >
        <ul className="justify-end items-center gap-4 hidden md:flex" role="menu">
          {navLinks.filter(x => x.highlight).map((navLink) => (
            <li role="none" className="z-20">
              <a
                className={cn("text-white font-headline text-xl font-black hover:text-cyan-400", href === navLink.href && "text-cyan-400")}
                href={navLink.href}
                aria-label={navLink.text}
                target={navLink.href.startsWith("/") ? "_self" : "_blank"}
                role="menuitem"
              >
                  {navLink.text}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setMenuState()} className="text-white rounded-md z-20 hover:text-cyan-400">
          {!fadedState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {isOpen && (
          <nav
            className={cn(
              "fixed right-0 top-0 h-screen w-[358px] max-w-full z-10 text-white font-headline text-xl font-black",
              "before:fixed before:top-0 before:right-0 before:w-[200vw] before:h-screen before:z-[-1]",
              fadedState ? "before:blur-out" : "before:blur-in",
              fadedState ? "move-out-to-right" : "move-in-from-right",
            )}
          >
            <ul className="flex flex-col items-start p-4 pt-8 md:pt-24 gap-2 bg-black h-full">
              <div className="w-[calc(100%-32px)] h-[1px] mx-4 mb-7 bg-white hidden md:flex"></div>
              {navLinks.filter(x => x.key !== "instagram" && x.key !== "youtube").map((navLink) => (
                <li
                  key={navLink.href}
                  className={
                    navLink.highlight ? "md:hidden" : undefined
                  }
                >
                  <a
                    className={cn(
                      "text-white px-4 py-2 hover:text-cyan-400",
                      href === navLink.href && "text-cyan-400"
                    )}
                    href={navLink.href}
                    title={navLink.title}
                    target={navLink.href.startsWith("/") ? "_self" : "_blank"}
                  >
                    {navLink.text}
                  </a>
                </li>
              ))}
              <div className="w-[calc(100%-32px)] mx-4 py-8">
                <div className="h-[1px] bg-white"></div>
              </div>
              <div className="flex gap-4 px-4">
                {navLinks.filter(x => x.key === "instagram" || x.key === "youtube").map((navLink) => (
                  <li key={navLink.href}>
                    <a
                      className={cn(
                        "text-white hover:text-cyan-400",
                        href === navLink.href && "text-cyan-400"
                      )}
                      href={navLink.href}
                      title={navLink.title}
                      target={navLink.href.startsWith("/") ? "_self" : "_blank"}
                    >
                      {navLink.key === "instagram" ? <InstagramIcon /> : <YoutubeIcon />}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;
