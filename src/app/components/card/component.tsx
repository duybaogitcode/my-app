import React from 'react';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

const Card = ({ item }: { item: Item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>Number of episodes: {item.episodes}</p>
      <p>Category: {item.category.join(' - ')}</p>
    </div>
  );
};

export default Card;

// interface Item {
//   title: string;
//   episodes: number;
//   category: string[];
// }

// interface CardProps {
//   item: Item;
// }

// const Card: React.FC<CardProps> = ({ item }) => {
//   return (
//     <div>
//       <h1>{item.title}</h1>
//       <p>Number of episodes: {item.episodes}</p>
//       <p>Category: {item.category.join(', ')}</p>
//     </div>
//   );
// };

// export default Card;
