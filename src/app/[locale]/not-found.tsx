import Link from "next/link";
import { useTranslations } from "next-intl";
export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <>
      <main className={`flex flex-col items-center pt-20`}>
        <article className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-5xl mb-8">404...</h2>
            <h3 className="text-2xl mb-8">{t("message")}</h3>
            <img
              loading="lazy"
              decoding="async"
              src="/not-found.gif"
              alt="not found image"
            />
            <h3 className="my-20 text-4xl hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out">
              <Link href="/">{t("fallback")}</Link>
            </h3>
          </div>
        </article>
      </main>
    </>
  );
}
