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

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      {/* <Routes> 
        <Route path={'/:topicId'}>
          <Topic />
        </Route>
        <Route path={''}>
          <h3>Please select a topic.</h3>
        </Route>
      </Routes> */}
    </div>
  );
}

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: { topicId }</h3>;
}
