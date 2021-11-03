import Left from "./left";
export default function Main({ children }) {
  return (
    <div className="row">
    <div className="col-sm-4"><Left /></div>
    <div className="col-sm-8">{children}</div>
    </div>
  );
}
