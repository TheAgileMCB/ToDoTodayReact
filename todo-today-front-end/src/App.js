import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

import Header from './components/header';
import ToDoList from './components/to-do-list';
import ToDoForm from './components/to-do-form';
import ToDoBoard from './components/to-do-board';
import About from './components/about';
import License from './components/license';
import Footer from './components/footer';

function App() {

  let results = JSON.parse(window.localStorage.results || '[]');
  const props = results;

  const setResults = (taskId, title, createdBy, startTime, dueTime, assignee, description, estimateTimeToComplete, difficultyRating, taskComplete) => {
    this.setState({
      taskId,
      title,
      createdBy,
      startTime,
      dueTime,
      assignee,
      description,
      estimateTimeToComplete,
      difficultyRating,
      taskComplete
    });

    window.localStorage.result = JSON.stringify(setResults);
  }

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <ToDoList />
            <ToDoForm onReceiveResults={setResults} />
          </Route>
          <Route path="/board">
            <ToDoBoard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/license">
            <License />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
