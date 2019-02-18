import Header from "./Header";

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <style jsx global>{`
      * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
      body {
        margin: 0;
        background: #1f202c;
        color: #fff;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }
      a {
        text-decoration: none;
        color: #ffffff;
      }
    `}</style>
  </div>
);

export default Layout;
