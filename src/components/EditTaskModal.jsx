import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const EditTaskModal = ({
  isOpen,
  onRequestClose,
  task,
  tagName,
  tagColor,
}) => {
  const [form, setForm] = useState({
    _id: task._id,
    title: task.title,
    details: task.details,
    dueDate: task.dueDate,
    tags: [tagName, tagColor],
    status: task.status,
    estimatedTime: task.estimatedTime,
    timeTaken: task.timeTaken,
    finishedDate: task.finishedDate,
  });
  const customStyles = {
    content: {
      width: '720px',
      marginRight: 'auto',
      marginLeft: 'auto',
      top: '15%',
      bottom: '15%',
    },
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const handleInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      id: task._id,
      title: form.title,
      details: form.details,
      dueDate: new Date(form.dueDate).toISOString(),
      tags: [[form.tagName, form.tagColor]],
      status: task.status,
      estimatedTime: parseInt(form.estimatedTime),
      timeTaken: task.timeTaken,
      finishedDate: task.finishedDate,
    };

    await fetch(
      `https://productivity-app-backend.herokuapp.com/tasks/${task._id}`,
      {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      }
    )
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: 'Tarea actualizada',
          icon: 'success',
          confirmButtonText: 'Cool',
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        });
        // tasksDispatch({ type: 'fetch', payload: data });
        console.log('response', data);
      })
      .catch((error) => {
        console.error('Error uploading the task', error);
      });

    console.log(formattedData);
  };

  // useEffect(() => {
  //   setForm({
  //     _id: task._id,
  //     title: task.title,
  //     details: task.details,
  //     dueDate: task.dueDate,
  //     tags: [tagName, tagColor],
  //     status: task.status,
  //     estimatedTime: task.estimatedTime,
  //     timeTaken: task.timeTaken,
  //     finishedDate: task.finishedDate,
  //   });
  // }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel='Editar una Tarea'
      >
        <div className='flex flex-1 flex-col justify-center h-full'>
          <h2 className='text-3xl font-bold text-center mb-5'>
            Editando tarea
          </h2>
          <form>
            <div className='flex flex-col w-96 mx-auto'>
              <p className='text-base font-bold ml-1 mb-1'>
                Título de la tarea
              </p>
              <input
                className='border p-1 mb-3'
                type='text'
                name='title'
                onChange={handleInput}
                defaultValue={form.title}
              />
              <p className='text-base font-bold ml-1 mb-1'>
                Descripción de la tarea
              </p>
              <input
                className='border p-1 mb-3'
                type='text'
                name='details'
                onChange={handleInput}
                defaultValue={form.details}
              />
              <p className='text-base font-bold ml-1 mb-1'>
                Fecha de entrega/finalización
              </p>
              <input
                className='border p-1 mb-3'
                type='date'
                name='dueDate'
                onChange={handleInput}
              />
              <p className='text-base font-bold ml-1 mb-1'>
                Tiempo estimado de finalización (en minutos)
              </p>
              <input
                className='border p-1 mb-3'
                type='text'
                placeholder='Tiempo en minutos'
                name='estimatedTime'
                onChange={handleInput}
                defaultValue={form.estimatedTime}
              />
              <p className='text-base font-bold ml-1 mb-1'>Grupo/Tag</p>
              <input
                className='border p-1 mb-3'
                type='text'
                placeholder={form.tags[0]}
                name='tagName'
                onChange={handleInput}
                defaultValue={form.tags[0]}
              />
              <p className='text-base font-bold ml-1 mb-1'>Color del Tag</p>
              <select
                name='tagColor'
                className='border p-1 mb-3'
                onChange={handleInput}
                defaultValue={form.tags[1]}
              >
                <option value='red' className='bg-red-300'>
                  Rojo
                </option>
                <option value='yellow' className='bg-yellow-300'>
                  Amarillo
                </option>
                <option value='green' className='bg-green-300'>
                  Verde
                </option>
                <option value='blue' className='bg-blue-300'>
                  Azul
                </option>
                <option value='indigo' className='bg-indigo-300'>
                  Indigo
                </option>
                <option value='purple' className='bg-purple-300'>
                  Morado
                </option>
                <option value='pink' className='bg-pink-300'>
                  Rosado
                </option>
              </select>
              <button
                className='bg-green-400 p-1 rounded w-32 mx-auto'
                type='submit'
                onClick={handleSubmit}
              >
                Crear tarea
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
