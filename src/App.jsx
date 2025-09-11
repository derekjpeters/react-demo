import { useState, useEffect } from "react";
import LifeCycleDemo from "./components/LifecycleDemo";
import Clock from "./components/Clock";

export default function App () {

  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("LifeCycleDemo");
  const [inputTitle, setInputTitle] = useState(title);

  useEffect(() => {
    console.log("App - mounted")
    return () => console.log("App - unmounted")
  }, []);

  useEffect(() => {
    console.log("App - title changed", title)
  }, [title]);

  const toggle = () => {
    console.log("App toggle show", {from: show, to: !show})
    setShow((s) => !s);
  };

  const bumpTitle = () => {
    console.log("App - bumpTitle")
    setTitle((t) => t + " -")
  }

  const applyInputTitle = (e) => {
    e.preventDefault();
    console.log("App - apply input title", inputTitle);
    setTitle(inputTitle)
  }

  return (
    <div>
      <h1>React Lifecycle (Class Components) </h1>

      <div>
        <button onClick={toggle}>{show ? "Unmount Demo": "Mount Demo"}</button>
        <button onClick={bumpTitle}>Update Prop: Title (append -)</button>
      </div>

      <form onSubmit={applyInputTitle}>
        <label>
          Edit Title: {" "}
          <input 
          value = {title}
          onChange={(e) => {
            console.log("App - input change:", e.target.value);
            setInputTitle(e.target.value);
          }}
          />
        </label>
        <button>
          Apply
        </button>
        {show && (
          <>
            <LifeCycleDemo title = {title} />
            <Clock/> {/*New */}
          </>
        )}
      </form>
    </div>
  )

}