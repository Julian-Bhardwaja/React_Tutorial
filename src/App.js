import "./App.css";

import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <CounterRenderProp>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp>
      <CounterRenderProp>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp> */}
      <UserProvider value="Julian">
        <ComponentC />
      </UserProvider>
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
