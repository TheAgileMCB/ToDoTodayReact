import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import useTheme from './contexts/theme';
import useFetch from './hooks/useFetch.js';
import './app.scss';

import Header from './components/header';
import ToDoList from './components/to-do-list';
import ToDoForm from './components/to-do-form';
import ToDoBoard from './components/to-do-board';
import About from './components/about';
import License from './components/license';
import Footer from './components/footer';

const todoAPI = 'https://deltav-todo.azurewebsites.net/api/v1/todos';

function App() {

  const { mode } = useTheme();
  //data = JSON.parse(window.localStorage.results || '[]');

  const [dataList, setDataList] = useState([]);

  const {request, response, error, isLoading } = useFetch();

  const _addItem = (item) => {
    const addRequest = {
      url: todoAPI,
      options: {
        method: 'post',
        body: JSON.stringify(item)
      }
    }
    request(addRequest);
  };

  const _deleteItem = (id) => {
    const deleteRequest = {
      url: `${todoAPI}/${id}`,
      options: {
        method: 'delete'
      }
    }
    request(deleteRequest);
  };

  const _toggleCompleted = id => {
    let item = dataList.filter(i => i.id === id)[0] || {};
    item.completed = !item.completed;
    const updateRequest = {
      url: `${todoAPI}/${id}`,
      options: {
        method: 'put',
        body: JSON.stringify(item)
      }
    }
    request(updateRequest);
  };

  const _getAll = React.useCallback(() => {
    const req = {
      url: todoAPI,
      options: {
        method: 'get'
      }
    }
    request(req);
  }, [request]);

  // The function to re-fetch data so the display is current
  // Called on intial load and afer every write operation
  // On mount ... get the list
  useEffect(() => {
    _getAll();
  }, [_getAll]);

  //  Set the full state if it's in the response or re-fetch anytime the response is updated
  useEffect(() => {
    // Anytime we get a list, update our sate
    if (response.length >= 0) {
      setDataList(response);
    }
    // Otherwise, re-fetch
    else {
      _getAll();
    }
  }, [response, _getAll]);


  // const setResults = (id, title, assignedTo, difficulty, complete) => {
  //   let data = {id, title, assignedTo, difficulty, complete};

  //   let dataListWithNewOne = [...dataList, data];
  //   setDataList(dataListWithNewOne);

  //   //window.localStorage.result = JSON.stringify(setResults);
  // }

  return (
    <div className={mode}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <ToDoList
            list={dataList}
            handleCompleted={_toggleCompleted}
            handleDelete={_deleteItem}
            />
            <ToDoForm handleSubmit={_addItem} />
          </Route>
          <Route path="/board">
            <ToDoBoard 
            list={dataList}
            handleCompleted={_toggleCompleted}
            handleDelete={_deleteItem}
            />
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
