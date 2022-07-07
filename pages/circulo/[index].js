import * as React from "react";
import Page1 from "../../components/Page1";
import Page2 from "../../components/Page2";
import Page3 from "../../components/Page3";
import Page4 from "../../components/Page4";
import Page5 from "../../components/Page5";
import Page6 from "../../components/Page6";
import Page7 from "../../components/Page7";
import Page8 from "../../components/Page8";
import Page9 from "../../components/Page9";
import { images } from "../../constants";

function getComponent(index) {
  switch (index) {
    case 0:
      return <Page1 index={index} />;
    case 1:
      return <Page2 index={index} />;
    case 2:
      return <Page3 index={index} />;
    case 3:
      return <Page4 index={index} />;
    case 4:
      return <Page5 index={index} />;
    case 5:
      return <Page6 index={index} />;
    case 6:
      return <Page7 index={index} />;
    case 7:
      return <Page8 index={index} />;
    case 8:
      return <Page9 index={index} />;
  }
}

const Page = ({ index }) => {
  console.log(index);
  return getComponent(index);
};

export async function getStaticProps({ params }) {
  const number = Number.parseInt(params.index, 10);
  return {
    props: {
      index: number,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: images.map((_id, index) => {
      return {
        params: {
          index: `${index}`,
        },
      };
    }),
    fallback: false,
  };
}

export default Page;
