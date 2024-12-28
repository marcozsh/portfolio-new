type CodeBracketsType = {
  text: string;
};
export default function CodeBrackets({ text }: CodeBracketsType) {
  return (
    <>
      <span className="text-custom_purple">{"<"}</span>
      {text}
      <span className="text-custom_purple">{"/>"}</span>
    </>
  );
}
