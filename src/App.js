import './App.css';

import ErrorBoundary from './components/ErrorBoundary';
import FRParentInput from './components/FRParentInput';
import FocusInput from './components/FocusInput';
import Hero from './components/Hero';
import PortalDemo from './components/PortalDemo';

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
       {/* <ParentComponent /> */}
       {/* <UserGreeting /> */}
       {/* <NameList /> */}
       {/* <StyleSheet primary={true} />
       <InlineStyle /> */}
       {/* <Form /> */}
       {/* <LifecycleA /> */}
       {/* <FragmentDemo /> */}
       {/* <ParentComp /> */}
       {/* <RefsDemo /> */}
       {/* <FocusInput /> */}
       {/* <FRParentInput /> */}
       {/* <PortalDemo /> */}
       <ErrorBoundary>
        <Hero heroName="Superman" />
       </ErrorBoundary>
       <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
    </div>
  );
}

export default App;
