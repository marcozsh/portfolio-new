import { birthstone_bounce } from "@/app/fonts";
type CodeBracketsType = {
  text: string;
  showBrackets?: boolean;
};
export default function CodeBrackets({
  text,
  showBrackets,
}: CodeBracketsType) {
  return (
    <div className="animate-text-gradient inline-flex bg-gradient-to-r from-white to-custom_purple bg-[100%_auto] bg-clip-text leading-tight text-transparent">
      {showBrackets && (
        <span className={`${birthstone_bounce.className} text-custom_purple`}>
          {"<"}
        </span>
      )}
      &nbsp;{text}&nbsp;
      {showBrackets && (
        <span className={`${birthstone_bounce.className} text-custom_purple`}>
          {"/>"}
        </span>
      )}
    </div>
  );
}
