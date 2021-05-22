import "./_home.scss";

import React from "react";

interface HomeProps {
  name: string;
}

function Home(props: HomeProps) {
  return <h1 className="typography--subtitle">{props.name}</h1>;
}

export default Home;
