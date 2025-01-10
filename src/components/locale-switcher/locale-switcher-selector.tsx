"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { ReactNode, startTransition, useTransition } from "react";
import { FaLanguage } from "react-icons/fa";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelector({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      //@ts-ignore
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <div>
      <label
        className={`absolute left-4 top-4 xl:relative xl:left-0 xl:top-0 flex flex-row gap-2 
	 hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out 
	 cursor-pointer ${isPending && `transition-opacity [&:disabled]:opacity-30`}`}
      >
        <p className="sr-only">{label}</p>
        <select
	id="locale-switcher"
	className="inline-flex appearance-none bg-transparent cursor-pointer w-12"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <div>
          <FaLanguage className="w-6 h-6 -z-10 absolute left-6" />
        </div>
      </label>
    </div>
  );
}
