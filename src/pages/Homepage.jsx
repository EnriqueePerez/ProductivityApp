import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from '../components/Header';
import Column from '../components/Column';
import { TasksContext } from '../hooks/TasksContext';
import { CreateTaskModal } from '../components/CreateTaskModal';

const Homepage = () => {
  const { tasks } = useContext(TasksContext);
  const [modalState, setModalState] = useState(false);

  const changeModalStatus = () => {
    setModalState(!modalState);
  };

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

  useEffect(() => {}, [tasks]);

  return tasks === [] ? (
    <p>Cargando...</p>
  ) : (
    <div>
      <Header />
      <CreateTaskModal isOpen={modalState} onRequestClose={changeModalStatus} />
      <div className='flex justify-end mb-2 mr-5'>
        <button
          className='bg-green-500 rounded p-1 '
          type='button'
          onClick={() => changeModalStatus()}
        >
          Agregar tarea
        </button>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-8 mb-5'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Column
              title='To do'
              tasks={
                tasks !== []
                  ? tasks.filter((task) => task.status === 'To do')
                  : null
              }
            />
            <Column
              title='Doing'
              tasks={
                tasks !== []
                  ? tasks.filter((task) => task.status === 'Doing')
                  : null
              }
            />
            <Column
              title='Done'
              tasks={
                tasks !== []
                  ? tasks.filter((task) => task.status === 'Done')
                  : null
              }
            />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
