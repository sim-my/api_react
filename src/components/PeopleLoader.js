import React, { useState, useEffect } from "react";

import PeopleList from "./PeopleList";
import Spinner from "./Spinner";

const PeopleLoader = () => {
  const [peopleList, setPeopleList] = useState(["A", "B", "C"]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = () => {
    return fetch("https://mock-io.herokuapp.com/users").then((response) =>
      response.json()
    );
  };

  useEffect(() => {
    fetchPeople().then((data) => {
      setPeopleList(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
        {loading ? <Spinner /> : <PeopleList people={peopleList} />}
    </div>
  );
};

export default PeopleLoader;
