"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  //TODO: find a better way to handle this
  const handleThemeChange = () => {
    let message;

    switch (resolvedTheme) {
      case "light":
        message = "Made with 🖤 by nikodemdomaracki";
        break;
      case "dark":
        message = "Made with 🤍 by nikodemdomaracki";
        break;
      default:
        message = "Made with ❤️ by nikodemdomaracki";
        break;
    }
    return message;
  };

  return (
    <footer className="bottom-0 z-50 w-full border-t bg-background">
      <div className="container py-2 ">
        <ul className="flex items-center justify-between">
          <li>
            <span>{handleThemeChange()}</span>
          </li>
          <li>
            <a href="https://github.com/Nikkoro" aria-label="Link to my github">
              <GitHubLogoIcon className="h-8 w-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nikodemdomaracki/"
              aria-label="Link to my linkedin"
            >
              <LinkedInLogoIcon className="h-8 w-8" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
