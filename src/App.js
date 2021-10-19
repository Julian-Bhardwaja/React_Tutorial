import "./App.css";

import ClickCounterTwo from "./components/ClickCounterTwo";
import CounterRenderProp from "./components/CounterRenderProp";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}
      <CounterRenderProp>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp>
      <CounterRenderProp>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp>

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Julian" : "Guest")} /> */}
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
      {/* <ErrorBoundary>
        <Hero heroName="Superman" />
       </ErrorBoundary>
       <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
    </div>
  );
}

export default App;
