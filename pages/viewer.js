import withRedux from "next-redux-wrapper";
import initStore from "../store";
import Meta from "../components/Layout/Meta";
import NavigationBar from "../components/Layout/NavigationBar";
import FooterBar from "../components/Layout/FooterBar";
import ViewerPageContainer from "../components/ViewerPageContainer";

const VerifierPage = () => (
  <div>
    <Meta />
    <NavigationBar />
    <ViewerPageContainer />
    <FooterBar />
  </div>
);

export default withRedux(initStore)(VerifierPage);
