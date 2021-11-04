import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PartOne from "./components/1PartOne/PartOne";
import PartTwo from "./components/2PartTwo/PartTwo";
import PartTree from "./components/3PartThree/PartTree";
import PartFour from "./components/4PartFour/PartFour";

import Home from "./Home";
import Home1 from "./Home1";
import PartSixClass from "./components/PartSix/PartSixClass";
import Wrapper from "./components/PartSix/wrappers/Wrapper";
import PartSixClassHoc from "./components/PartSix/PartSixClassHoc";
import PartSixClassFuncAsChild from "./components/PartSix/PartSixClassFuncAsChild";
import PartSixClassRenderProp from "./components/PartSix/PartSixClassRenderProp";


export default function BrowserApp() {
  return (
    <div>
      <BrowserRouter>
        <div className="link_container">
          <Link to="/">Home</Link>
          <Link to="/partOne">PartOne</Link>
          <Link to="/partTwo/2">PartTwo</Link>
          <Link to="/partTree">PartTree</Link>
          <Link to="/partFour">PartFour</Link>
          <Link to="/partSix">PartSix</Link>
        </div>
        <div className="main_container">
          <Switch>
            <Route path="/partOne" component={PartOne} />
            <Route path="/partTwo/:id" component={PartTwo} />
            <Route path="/partTree" component={PartTree} />
            <Route path="/partFour" component={PartFour} />
            {/* <Route path="/partSix" component={PartSixClassHoc} /> */}
            {/* <Route path="/partSix" component={PartSixClassFuncAsChild}/> */}
            <Route path="/partSix" component={PartSixClassRenderProp} />
            {/* <Route path="/partSix" component={Wrapper} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
