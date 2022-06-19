import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FecthData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default FecthData;
