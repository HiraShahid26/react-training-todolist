# First React Project

Welcome to your first React project !
In this app, you will discover the basic concepts of ReactJS.
This is a pure frontend app, so the creation, update or deletion of the data are not persisted. Which means, each time you refresh the page, the app gets back to its initial state.

## Setup

### Install dependencies

Make sure you have the latest Node LTS version installed.
And then run `npm install` in the terminal.
Make sure you are in the app folder ;)

### Run the app in development mode
To display the app in the browser, let's run `npm start`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Documentation

To learn React and in case of doubt, you can check out the [React documentation](https://reactjs.org/).

## Exercice

You will be guided to implement the application code step by step.
Each step is made to help you learn a new React notion.

The first steps are particularly guided but as you go through the project, you will get less and less hints. Don't hesitate to ask for help AFTER you searched by yourself on the web.

Feel free to give feedback if a step is unclear, this is really helpful !

### JSX

In App.tsx, replace the hardcoded app title by the value of the const "title".

### Your first component

Create a Header.tsx component in the components folder that contains the code below :
```
<div className="header">
  <h1>Replace me using the title const</h1>
</div>;
```

Then, in App.tsx, replace the code of the header by the component you just created.

### React props

As in the previous header code, we want to use the value of the const `title` as the main app title. 
To do that, the Header component should take a prop "title" of type string and use it in its code.
Once you added the prop to the Header component, you should see an error in the App.tsx. To resolve that, use the const `title` to give the expected prop to the component in the App.tsx.

Use the CSS given in the Header.css file in your Header component.

### Use an interface

Create an interface TaskType in a `Task.ts` file in the models folder that will contain :
```
  id: number;
  title: string;
  description: string;
  done: boolean;
```
Update the Task component to pass a typed prop "task". To type this prop you have to use the interface.

### Iterate over an array in JSX

Use the data imported in App.tsx and stored in the `tasks` const to iterate and render as many Task components as there are tasks in the data file.
The Task component should take a "task" prop.
Use JSX to replace the hardcoded title by the property `title` with a prop in the Task component.

Hint: Use the `map` JS method on the list of tasks.

Congrats ! You just applied the reusability concept ;) 
As you can see, the code of the Task component is written just one time but used multiple times in the interface.

### Intermediate component and single responsibility

App.tsx should not have the responsibility to iterate over the tasks.
Create an intermediate component `TasksList.tsx` that does that and display each task using the Task component. 
All the iteration logic should be transferred to the TasksList component and App.tsx should just call the TasksList component. 
And yes, the TasksList component should take a prop ;)

Checkpoint: after this step, the App.tsx should only contain 3 components: 
- `Header.tsx` that takes a prop `title`
- `TasksList`that takes one prop
- `TaskFormModal` as it was at the beginning of the exercise.

### The most used React hook : useState

The "+" button should open the `TaskFormModal.tsx`. This component will be used to:
- create a new task
- edit an existing task

But first let's use the `useState` hook and the `show` prop to open the modal when the "+" button is clicked.

### Passing functions as props

Now you can open the modal. Good !
But we need to be able to close it as well...

To do that, the Modal should take a function as prop to close iteself when the "X" button or the "Annuler" button are clicked.
The prop you need is already set. 
Hint: Use the useState you created to open the modal ;)

### Implement logic in the parent and trigger it in the child

So, now you know how to pass a function as a prop from a parent component to a child component. 
We'll do the same, but this time, you will have to do it entirely by implementing and using the `deleteTask` function of the App.tsx.

In the Task component, when we click on the "delete" button of each task, we want it to be deleted from the list displayed in the App component.
As the list of tasks is maintained in App.tsx, the deletion from the list has to be handled in App.tsx as well using useState. 
- Use the useState hook to store the list of tasks in `App.tsx` and create a method to setTasks in the state
- Implement the delete method in App.tsx using the state management to delete a task from the list. The list displayed should be updated as a task gets deleted.

Hint: use the `id` Task property we defined in the interface.

### Retrieve data from a form to update the interface

In this step, we want to add a new task to the list. The flow is : 
- I click on the "+" button
- The modal gets opened
- The user sets the title and the descripton
- The user clicks on "Enregistrer" and then the modal closes itself and we can see the new item in the list displayed in App.tsx.

To do that :
- Find what function is passed to the modal as prop to create a new task
- Implement the method logic 
- Make sure the id of the newly created task equals the greater id of the tasks list + 1

Hint: only the first argument of the function should be used at this step. It is a Javascript event from which you can retrieve values by using `new FormData(event.target)`.

### Update state in parent from an action triggered in child component

What's missing now ? We can create a new task, delete it but we still can't edit an existing task. 
As we did for the delete function, we need to pass the function `editTask` as prop to the Task component.
Then when the user clicks on the edit button, the id of the task we want to edit can be stored in the App.tsx and directly passed to the modal.
The modal has to open itself directly.
So the `taskToEdit` should not be a simple const, but... should use the useState hook and be initialized to `null`.
And the `editTask` function shloud update the `taskToEdit` state by giving it the task and open the modal.

At the end of this step, we just want the modal to be opened with the task title and description displayed.

### UseEffect

Ok, I can see that the task to edit is passed to the modal in the initialValues prop.
But when I click on "edit", I can not see the values of title and description I jast passed...
Indeed ! But why ? As you can see, the `TaskFormModal` component is called in the App.tsx. Which means that, this component is NOT rendered when you open it, but when the App.tsx is executed. So basically, when you go to the url of the app, the modal is rendered, and as you can see, at first, the initial values are null. 

How can we re-render the initial values when it gets updated then ? 
Bu using a new react hook called `useEffect` in the `TaskFormModal`. 
Check out the doc to understand how to use this hook and use it in the modal component.
Finally, when you manage to display the values of the task to edit in the modal, you need to save them in the right function of the App.tsx by updating its logic. 
Yes, it is a tricky one but it's cool to make mistakes, you will learn a lot :)

### Bonuses

Well done ! You completed all the React exercises and you used some of the main React basic concepts :)
If you want to go further, here are a few things you can do :
- Use icons instead of "edit" and "delete" for the task actions
- Update task status by using the native `onChange` input attribute in the Task.tsx and the `updateTaskState` of the App.tsx
- Transform the interface Task in a class with its getters and setters
to get the title, the description and the done status, set the title, the description and the done status. Instantiate the class for each task and use the getters and setters in the React Code
