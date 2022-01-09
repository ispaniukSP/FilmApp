import {Main} from "./layouts/Main";
import {Provider} from "react-redux"
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
