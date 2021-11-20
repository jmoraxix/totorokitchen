import React from "react";
import {
  Link,
  useLocation,
  useParams
} from "react-router-dom";

export default function Topics() {
  let location = useLocation()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${location.pathname}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${location.pathname}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: { topicId }</h3>;
}
