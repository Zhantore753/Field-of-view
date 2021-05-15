import { globalStyles } from '../styles/styles';
import { store } from "../redux/store";

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default store.withRedux(App);
