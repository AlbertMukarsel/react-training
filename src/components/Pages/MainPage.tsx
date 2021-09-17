import React, { ReactElement, useState } from "react";
import axios from "axios";
import useSWR from "swr";

import { ResultComponent } from "../ResultComponent";
import { apiUrl } from "../../utils/utilities";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function MainPage(): ReactElement {
  const [dataApi, setdataApi] = useState([""]);

  const { data, error } = useSWR(apiUrl.concat("character/"), fetcher);

  console.log(data);

  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <ResultComponent characterList={data}></ResultComponent>
    </div>
  );
}
