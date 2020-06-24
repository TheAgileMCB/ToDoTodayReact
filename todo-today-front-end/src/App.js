import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import useTheme from './contexts/theme';
import './app.scss';

import Header from './components/header';
import ToDoList from './components/to-do-list';
import ToDoForm from './components/to-do-form';
import ToDoBoard from './components/to-do-board';
import About from './components/about';
import License from './components/license';
import Footer from './components/footer';

function App() {

  const { mode } = useTheme();
  //data = JSON.parse(window.localStorage.results || '[]');

  const [dataList, setDataList] = useState([]);


  const setResults = (id, title, assignedTo, difficulty, complete) => {
    let data = {id, title, assignedTo, difficulty, complete};

    let dataListWithNewOne = [...dataList, data];
    setDataList(dataListWithNewOne);

    //window.localStorage.result = JSON.stringify(setResults);
  }

  return (
    <div className={mode}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <ToDoList data={dataList}/>
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
    </div>
  );
}

export default App;
