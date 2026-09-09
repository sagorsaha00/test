"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { languages } from "@/lib/dummy.data";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        disabled={isPending}
        onClick={() => setIsOpen(!isOpen)}
        className="
      flex items-center gap-1.5
      rounded-full
      border border-slate-200
      bg-white
      px-2.5 py-1.5
      text-xs font-medium text-slate-700
      shadow-sm
      transition
      hover:bg-slate-50
      focus:outline-none
      disabled:opacity-50
      sm:gap-2 sm:px-3 sm:py-1.5
    "
      >
        <Globe size={14} className="shrink-0 text-slate-500 sm:h-4 sm:w-4" />

        <span className="whitespace-nowrap">
          {currentLang.flag} {currentLang.name}
        </span>

        <ChevronDown
          size={12}
          className={`shrink-0 transition-transform duration-200 sm:h-3.5 sm:w-3.5 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="
        absolute right-0 z-50 mt-2
        w-32 rounded-xl
        border border-slate-100
        bg-white p-1.5
        shadow-lg ring-1 ring-black/5
      "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`
            flex w-full items-center gap-2
            rounded-lg px-2.5 py-2
            text-xs font-semibold
            transition
            ${
              locale === lang.code
                ? "bg-[#0066FF]/10 text-[#0066FF]"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }
          `}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
