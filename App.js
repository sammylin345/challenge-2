
import MessageList from './MessageList'
import MessageView from './MessageView'

const App = () => {
  return <MessageList />;
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

export default App;
