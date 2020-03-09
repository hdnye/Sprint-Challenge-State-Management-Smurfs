1. What problem does the context API help solve?

    Context API provides a way to pass and store data down a React component tree w/o writing it into every component, avoiding prop drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions-- Objects that describe events that happen in UI & tell the Reducer how to update the state tree
    Reducers-- Pure functions that take the current state & actions as arguments that create an updated state tree based on the action type w/o mutating the default state
    Store--An object with methods that hold the whole state tree of an application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other? 

    Application state global and any component can access it. Component state is local and lives only in that component and can only be updated w/in that component & passed to down as props. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    thunk allows us to write async logic that interacts with the store. It allows action-creators to return a function that performs an async dispatch. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I prefer Context API b/c I'm still trying to learn the syntax of Redux but I think once I understand the framework and set-up of Redux more thoroughly, I'll feel differently. Context API is closer to what we've been doing as far as passing props and using stateful components so it's more familiar. 
