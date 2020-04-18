- [ ] Why would you use class component over function components (removing hooks from the question)?

        Class components provide a wider range of capabilities than regular function components becausen class components extend and have access to the all the methods associated with the base React.Component class.

- [ ] Name three lifecycle methods and their purposes.

        1. constructor() creates a state object for a class component to reference as well as to update data.

        2. render() is what allows us to actually render the JSX within it to the DOM. Without render(), class components will not render to the DOM.

        3. componentDidMount() is the final method called when an instance of a component is being rendered to the DOM. It is invoked immediately upon mounting, and it is a good place to instantiate a network request if you need to load data from a remote endpoint.

- [ ] What is the purpose of a custom hook?

        A custom hook is used to apply non-visual behavior and stateful logic within a component. It is reusable like other hooks and thus helps to avoid rewriting the same logic unnecessarily. 

- [ ] Why is it important to test our apps?

        Testing is important because it helps to keep flawed code from making it to a production build. It lets us find errors quickly, consider edge case senarios, provides a safety net when making changes to code, and overall makes code more reliable.