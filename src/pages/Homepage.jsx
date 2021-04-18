import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from '../components/Header';
import Column from '../components/Column';
import mockData from '../mockData/mockData.json';
import mockOrder from '../mockData/tasksOrder.json';

const Homepage = () => {
  const [tasksOrder, setTasksOrder] = useState();
  const [tasks, setTasks] = useState([]);

  const onDragEnd = (result) => {
    //TODO: reorder column
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // const newTaskIds = Array.from(tasksOrder);
    // console.log('newTaskIds', newTaskIds);
    // newTaskIds.splice(source.index, 1);
    // console.log('newTaskIds after deleting the index source', newTaskIds);
    // newTaskIds.splice(destination.index, 0, draggableId);
    // console.log('newTaskIds after adding the index destination', newTaskIds);

    // setTasksOrder(newTaskIds);
  };

  const fetchTasks = async () => {
    await fetch('https://productivity-app-backend.herokuapp.com/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };
  useEffect(() => {
    fetchTasks();
    // setTasks(mockData);
    // setTasksOrder(mockOrder[0].tasksIds);
  }, []);

  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-8'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Column
              title='To do'
              tasks={tasks.filter((task) => task.status === 'To do')}
            />
            <Column
              title='Doing'
              tasks={tasks.filter((task) => task.status === 'Doing')}
            />
            <Column
              title='Done'
              tasks={tasks.filter((task) => task.status === 'Done')}
            />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
