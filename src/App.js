import './App.css';

import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';

// import Hello from './components/Hello';
// import Message from './components/Message';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
       {/* <Welcome name={'Kronii'} age={20} />
       <Hello name={'Kronii'} age={20} />
       <Hello name={'Mumei'} age={18} />
       <Hello name={'Bae'} age={19} />
       <Hello name={'Gura'} age={21} ><p>This is children props</p></Hello> */}
       {/* <Message /> */}
       {/* <Counter /> */}
       {/* <FunctionClick />
       <ClassClick /> */}
       {/* <EventBind /> */}
       <ParentComponent />
    </div>
  );
}

export default App;
