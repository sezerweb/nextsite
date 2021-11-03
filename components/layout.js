import Top from "./top";
import Left from "./left";
import Main from "./main";
import Bottom from "./bottom";

export default function Layout({ children }) {
  return (
    <>
      <Top />
      <div className="container">
        <Main>{children}</Main>
        <Bottom />
      </div>
    </>
  );
}
