import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Column from '../components/Column';
import Item from '../components/Item';

const Homepage = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Amber Lake ',
      details:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      dueDate: '12/14/2020',
      status: 'To do',
      timeTaken: '01:30',
      finishedDate: '2/22/2021',
      tags: 'user-facing',
    },
    {
      id: 2,
      title: 'Bat, The',
      details: 'Quisque ut erat.',
      dueDate: '11/12/2020',
      status: 'To do',
      timeTaken: '01:30',
      finishedDate: '8/31/2020',
      tags: 'Digitized',
    },
    {
      id: 3,
      title: "Jupiter's Wife",
      details: 'Suspendisse potenti.',
      dueDate: '10/19/2020',
      status: 'To do',
      timeTaken: '01:30',
      finishedDate: '9/17/2020',
      tags: 'regional',
    },
    {
      id: 4,
      title: 'Red Firecracker, Green Firecracker (Pao Da Shuang Deng)',
      details:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      dueDate: '10/6/2020',
      status: 'To do',
      timeTaken: '01:30',
      finishedDate: '7/20/2020',
      tags: 'mobile',
    },
    {
      id: 5,
      title: 'Harry Potter and the Deathly Hallows: Part 1',
      details:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      dueDate: '12/28/2020',
      status: 'In progress',
      timeTaken: '01:30',
      finishedDate: '7/12/2020',
      tags: 'dedicated',
    },
    {
      id: 6,
      title: 'Susana (Devil and the Flesh, The)',
      details: 'In hac habitasse platea dictumst.',
      dueDate: '10/3/2020',
      status: 'In progress',
      timeTaken: '01:30',
      finishedDate: '1/21/2021',
      tags: 'architecture',
    },
    {
      id: 7,
      title: 'Into the Woods',
      details:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      dueDate: '5/27/2020',
      status: 'In progress',
      timeTaken: '01:30',
      finishedDate: '3/9/2021',
      tags: 'Stand-alone',
    },
    {
      id: 8,
      title: 'Born to Be Wild',
      details:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      dueDate: '10/14/2020',
      status: 'In progress',
      timeTaken: '01:30',
      finishedDate: '9/17/2020',
      tags: 'scalable',
    },
    {
      id: 9,
      title: 'China 9, Liberty 37 (Amore, piombo e furore)',
      details:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      dueDate: '5/13/2020',
      status: 'Done',
      timeTaken: '01:30',
      finishedDate: '11/11/2020',
      tags: 'functionalities',
    },
    {
      id: 10,
      title: 'Very Social Secretary, A',
      details:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      dueDate: '1/18/2021',
      status: 'Done',
      timeTaken: '01:30',
      finishedDate: '6/21/2020',
      tags: 'system-worthy',
    },
    {
      id: 11,
      title: 'Atlas Shrugged: Who Is John Galt? (Atlas Shrugged: Part III)',
      details: 'Nullam molestie nibh in lectus.',
      dueDate: '4/21/2020',
      status: 'Done',
      timeTaken: '01:30',
      finishedDate: '1/2/2021',
      tags: 'Enhanced',
    },
    {
      id: 12,
      title: 'Major Payne',
      details: 'Donec semper sapien a libero.',
      dueDate: '1/15/2021',
      status: 'Done',
      timeTaken: '01:30',
      finishedDate: '4/3/2021',
      tags: 'policy',
    },
  ]);

  // useEffect(() => {
  //   fetch('../mockData/MOCK_DATA').then((response) => {
  //     console.log(response.json());
  //     return response.json();
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-8'>
          <Column title='To do'>
            {cards
              .filter((item) => item.status === 'To do')
              .map((item) => (
                <Item key={item.id} {...item} />
              ))}
          </Column>
          <Column title='In progress'>
            {cards
              .filter((item) => item.status === 'In progress')
              .map((item) => (
                <Item key={item.id} {...item} />
              ))}
          </Column>
          <Column title='Done'>
            {cards
              .filter((item) => item.status === 'Done')
              .map((item) => (
                <Item key={item.id} {...item} />
              ))}
          </Column>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
