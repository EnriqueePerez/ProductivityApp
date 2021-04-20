import React, { useContext, useState } from 'react';
import bubble from '../assets/bubble.png';
import tag from '../assets/tag.png';
import pencil from '../assets/pencil@2x.png';
import clock from '../assets/clock.png';
import { Draggable } from 'react-beautiful-dnd';
import { Tags } from './Tags';
import { TasksContext } from '../hooks/TasksContext';
import { EditTaskModal } from './EditTaskModal';

export const ToDoTask = ({
  _id,
  title,
  details,
  tags,
  dueDate,
  status,
  timeTaken,
  finishedDate,
  index,
}) => {
  const tarea = {
    _id,
    title,
    details,
    tags,
    dueDate,
    status,
    timeTaken,
    finishedDate,
  };
  const [modalState, setModalState] = useState(false);
  const { tasks, tasksDispatch } = useContext(TasksContext);

  const changeModalStatus = () => {
    setModalState(!modalState);
  };

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='bg-white pt-4 pl-4 pr-3 pb-3 rounded-xl mt-3 shadow-lg hover:bg-gray-100'
        >
          <EditTaskModal
            isOpen={modalState}
            onRequestClose={changeModalStatus}
            task={tarea}
            tagName={tags[0][0]}
            tagColor={tags[0][1]}
          />
          <div className='flex justify-between'>
            <h3 className='ml-7 text-base font-bold'>{title}</h3>
            <img
              className='h-5'
              src={pencil}
              alt='Edit Task'
              onClick={() => changeModalStatus()}
            />
          </div>
          <div className='flex my-2'>
            <img className='h-5' src={bubble} alt='bubble' />
            <p className='bg-red-200 rounded-xl p-2 ml-2 text-xs'>{details}</p>
          </div>
          <div className='flex my-2 items-center'>
            <img className='h-5 mr-2' src={clock} alt='clock' />
            <div className='text-xs'>Due date:</div>
            <div className='ml-1 text-xs'>
              {new Date(dueDate).toLocaleDateString()}
            </div>
          </div>
          <div className='flex items-center my-2'>
            <img className='h-5 self-center' src={tag} alt='tag' />
            <div className='flex flex-wrap items-center'>
              <Tags tags={tags} id={_id} />
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={() =>
                tasksDispatch({ type: 'delete', payload: { _id: _id } })
              }
              className='text-red-500 border-2 border-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-6 rounded-full'
            >
              Delete Task
            </button>
            <button
              onClick={() =>
                tasksDispatch({ type: 'start', payload: { _id: _id } })
              }
              className='bg-red-500 text-sm hover:bg-red-500 text-white font-bold py-1 px-7 rounded-full ml-2'
            >
              Start
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};
