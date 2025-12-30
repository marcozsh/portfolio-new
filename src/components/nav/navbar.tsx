"use client";
import { FaList } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CustomNavbar() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isVertical, setIsVertical] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const t = useTranslations("header");

  const links = ["projects", "experience", "about", "contact"];

  const header = links.map((key) => ({
    name: t(`${key}.name`),
    href: t(`${key}.href`),
    key: key,
    id: key === "about" ? "about-me" : key, // about tiene id="about-me"
  }));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          const matchingLink = header.find((link) => {
            const hash = link.href.split("#")[1];
            return hash === sectionId;
          });

          if (matchingLink) {
            setActiveSection(matchingLink.href);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll(
      "#projects, #experience, #about-me, #contact-me",
    );
    sections.forEach((section) => observer.observe(section));

    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [header]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50 && !isVertical && !isAnimating) {
        setIsAnimating(true);

        setTimeout(() => {
          setIsVertical(true);
        }, 150);

        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      } else if (scrollPosition <= 50 && isVertical && !isAnimating) {
        setIsAnimating(true);

        setTimeout(() => {
          setIsVertical(false);
        }, 150);

        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVertical, isAnimating]);

  const toggleMenu = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsNavVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  return (
    <>
      <nav
        className={`
          hidden xl:flex fixed z-50
          backdrop-blur-xl bg-black/30 border border-white/10 shadow-2xl
          transition-all duration-200 ease-out
          ${
            isVertical
              ? "top-1/2 -translate-y-1/2 left-8 flex-col rounded-3xl px-4 py-8 gap-4"
              : "top-6 left-1/2 -translate-x-1/2 flex-row rounded-full px-4 py-3 gap-2"
          }
          ${!isVertical && isAnimating ? "-translate-y-24 opacity-0" : ""}
          ${isVertical && isAnimating ? "-translate-x-24 opacity-0" : ""}
        `}
      >
        <button
          onClick={scrollToTop}
          className={`
            relative group overflow-hidden flex items-center justify-center
            transition-all duration-300 ease-out
            ${
              isVertical
                ? "w-full px-5 py-4 rounded-2xl"
                : "px-4 py-2.5 rounded-full"
            }
            ${
              activeSection === ""
                ? "text-white bg-custom_purple shadow-lg shadow-custom_purple/50 scale-105"
                : "text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105"
            }
          `}
          aria-label="Inicio"
        >
          <HiHome
            className={`
              transition-all duration-300
              ${isVertical ? "w-6 h-6 mr-3" : "w-5 h-5"}
            `}
          />
          {isVertical && <span className="font-medium text-base">Inicio</span>}

          {activeSection !== "" && (
            <>
              <span
                className={`
                  absolute inset-0 bg-gradient-to-r from-custom_purple/0 via-custom_purple/20 to-custom_purple/0
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${isVertical ? "rounded-2xl" : "rounded-full"}
                `}
              />
              <span
                className={`
                  absolute inset-0 bg-gradient-to-br from-white/10 to-transparent
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                  translate-y-full group-hover:translate-y-0
                  ${isVertical ? "rounded-2xl" : "rounded-full"}
                `}
              />
            </>
          )}
        </button>

        {header.map((link, index) => {
          const isActive = activeSection === link.href;
          const isContact = link.key === "contact";

          if (isContact) {
            return (
              <a
                key={index}
                href="mailto:marc.penar@outlook.cl"
                onClick={() => setActiveSection(link.href)}
                className={`
                  relative group overflow-hidden flex items-center
                  transition-all duration-300 ease-out
                  ${
                    isVertical
                      ? "w-full px-5 py-4 rounded-2xl justify-start"
                      : "px-6 py-2.5 rounded-full justify-center"
                  }
                  ${
                    isActive
                      ? "text-white bg-custom_purple shadow-lg shadow-custom_purple/50 scale-105"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105"
                  }
                `}
              >
                <span
                  className={`
                    relative z-10 font-medium block
                    transition-all duration-300
                    ${isVertical ? "text-base" : "text-sm"}
                  `}
                >
                  {link.name}
                </span>

                {!isActive && (
                  <>
                    <span
                      className={`
                        absolute inset-0 bg-gradient-to-r from-custom_purple/0 via-custom_purple/20 to-custom_purple/0
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${isVertical ? "rounded-2xl" : "rounded-full"}
                      `}
                    />
                    <span
                      className={`
                        absolute inset-0 bg-gradient-to-br from-white/10 to-transparent
                        opacity-0 group-hover:opacity-100 transition-all duration-500
                        translate-y-full group-hover:translate-y-0
                        ${isVertical ? "rounded-2xl" : "rounded-full"}
                      `}
                    />
                  </>
                )}
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`
                relative group overflow-hidden flex items-center
                transition-all duration-300 ease-out
                ${
                  isVertical
                    ? "w-full px-5 py-4 rounded-2xl justify-start"
                    : "px-6 py-2.5 rounded-full justify-center"
                }
                ${
                  isActive
                    ? "text-white bg-custom_purple shadow-lg shadow-custom_purple/50 scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105"
                }
              `}
            >
              <span
                className={`
                  relative z-10 font-medium block
                  transition-all duration-300
                  ${isVertical ? "text-base" : "text-sm"}
                `}
              >
                {link.name}
              </span>

              {!isActive && (
                <>
                  <span
                    className={`
                      absolute inset-0 bg-gradient-to-r from-custom_purple/0 via-custom_purple/20 to-custom_purple/0
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${isVertical ? "rounded-2xl" : "rounded-full"}
                    `}
                  />
                  <span
                    className={`
                      absolute inset-0 bg-gradient-to-br from-white/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-500
                      translate-y-full group-hover:translate-y-0
                      ${isVertical ? "rounded-2xl" : "rounded-full"}
                    `}
                  />
                </>
              )}
            </Link>
          );
        })}

        <div
          className={`
            absolute bg-gradient-to-r from-custom_purple/20 to-pink-500/20 blur-xl
            transition-all duration-200
            ${
              isVertical
                ? "w-full h-32 top-1/2 -translate-y-1/2 left-0"
                : "h-full w-40 top-0 left-1/2 -translate-x-1/2"
            }
            -z-10 opacity-50
          `}
        />
      </nav>

      <div className="xl:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className={`
            p-3 rounded-xl backdrop-blur-xl transition-all duration-300
            border border-white/10
            ${
              isNavVisible
                ? "bg-custom_purple shadow-lg shadow-custom_purple/50 rotate-180 scale-110"
                : "bg-black/40 hover:bg-black/60 hover:scale-105"
            }
          `}
          aria-label="Toggle menu"
        >
          {isNavVisible ? (
            <IoClose className="w-6 h-6 text-white" />
          ) : (
            <FaList className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {isNavVisible && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 xl:hidden animate-fadeIn"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`
          fixed top-20 right-4 left-4 z-40 xl:hidden
          transition-all duration-500 ease-out
          ${
            isNavVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-2">
            <button
              onClick={() => {
                scrollToTop();
                setIsNavVisible(false);
              }}
              className={`
                w-full flex items-center px-6 py-4 rounded-xl mb-2
                transition-all duration-300
                ${
                  activeSection === ""
                    ? "bg-custom_purple text-white shadow-lg shadow-custom_purple/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <HiHome className="w-5 h-5 mr-3" />
              <span className="font-medium">Inicio</span>
            </button>

            {header.map((link, index) => {
              const isActive = activeSection === link.href;
              const isContact = link.key === "contact";

              if (isContact) {
                return (
                  <a
                    key={index}
                    href="mailto:marc.penar@outlook.cl"
                    onClick={() => {
                      setActiveSection(link.href);
                      setIsNavVisible(false);
                    }}
                    className={`
                      block px-6 py-4 rounded-xl mb-2 last:mb-0
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-custom_purple text-white shadow-lg shadow-custom_purple/30"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }
                    `}
                    style={{
                      animationDelay: `${(index + 1) * 50}ms`,
                    }}
                  >
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`
                    block px-6 py-4 rounded-xl mb-2 last:mb-0
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-custom_purple text-white shadow-lg shadow-custom_purple/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                  }}
                >
                  <span className="font-medium">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar para mejor estética */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </>
  );
}
