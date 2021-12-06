import HeaderFile from './HeaderFile';
import Content from './Content';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <HeaderFile />
      <Switch>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
