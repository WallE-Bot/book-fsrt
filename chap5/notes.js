/*
functional components for composition
useState
- replaces state and setState in class components
- returns an array, [initial state, update function]
- for simple data items and primitives, ie. not nested data

useEffect
- similar to componentDidMount and componentDidUpdate
- however called after render
- used to update state, call APIs etc here
- can have multiple implementations, each for unique data
- will run on every re-render by default, but can modify to run only once
  or when specific props or state change
- runs asynchronously

useLayoutEffect
- runs synchronously and provides access to the screen elements, such as scroll
  position
- given its synchronous, only use if can utilize quickly

useCallback
- provides instance function if any of declared parameters change
- pass it the callback and an array of parameters of interest

useMemo
- similar to caching - will save some value and only runs if any of an
  array of provided values has changed.
- returns the value after some computation
- similar to useCallback in only runs if the values change

useReducer
- simplified Redux.  Takes reducer and initial state as parameters,
  returns 2 objects, a state object and an action.
- good to use instead of useEffect for more complex state data ex nested data etc

useContext
- wraps some parent and provides access to state through context directly
  to any child in the heirarchy
- given this flexibility in access and state injection best to use sparingly
  and prefer Redux instead.

useRef
- holds some value related to a component, usually some DOM element, and
  does not trigger a re-render if that value changes.
- use to escape the state-driven event loop if need direct access to some value
  or element



*/
