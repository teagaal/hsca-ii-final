import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          height: 100vh;
          background: rgb(34,1,69);
background: radial-gradient(circle, rgba(34,1,69,1) 0%, rgba(43,7,0,1) 100%);
          background-repeat: no-repeat;
        }

        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #222;
        }
      `}
      </style>
    </>
  );
}

export default MyApp;
