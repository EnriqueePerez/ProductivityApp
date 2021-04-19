import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TasksProvider } from './hooks/TasksContext';
import HomePage from './pages/Homepage';
function App() {
  return (
    <BrowserRouter>
      <TasksProvider>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </TasksProvider>
    </BrowserRouter>
  );
}

export default App;
