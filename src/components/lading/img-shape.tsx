type ImgShapeProps = {
  children: React.ReactNode;
};
export default function ImgShape({ children }: ImgShapeProps) {
  return (
    <div>
      <div className="shape">{children}</div>
    </div>
  );
}
