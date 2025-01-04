import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";
export default function NotFound() {
  const t = useTranslations("redirect");
  return redirect(t("redirect"));
}
