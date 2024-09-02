// import React from 'react';
// import styles from './ProductButtons.module.css';

// const ProductButtons = () => {
//   const categories = [
//     { name: 'Rough Pages Registers', id: 'rough-pages-registers' },
//     { name: 'Neat Pages Registers', id: 'neat-pages-registers' },
//     { name: 'Ball/Pointers Pens', id: 'ball-pointers-pens' },
//     { name: 'Pages/Sheets', id: 'pages-sheets' },
//     { name: 'Markers/Highlighters', id: 'markers-highlighters' },
//     { name: 'Tapes', id: 'tapes' },
//     { name: 'Plastic Files', id: 'plastic-files' },
//     { name: 'Rulers', id: 'rulers' },
//     { name: 'Drawing Related', id: 'drawing-related' },
//     { name: 'Calculators', id: 'calculators' },
//     { name: 'Sports', id: 'sports' },
//     { name: 'Others', id: 'others' }
//   ];

//   return (
//     <div className={styles.buttonContainer}>
//       {categories.map((category, index) => (
//         <a 
//         // target='_blank'
//           key={index} 
//           href={`#${category.id}` } 
//           className={`btn btn-primary ${styles.customButton}`}
//         >
//           {category.name}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ProductButtons;



// import React from 'react';
// import styles from './ProductButtons.module.css';

// const ProductButtons = () => {
//   const categories = [
//     { name: 'Rough Pages Registers', id: 'rough-pages-registers' },
//     { name: 'Neat Pages Registers', id: 'neat-pages-registers' },
//     { name: 'Ball/Pointers Pens', id: 'ball-pointers-pens' },
//     { name: 'Pages/Sheets', id: 'pages-sheets' },
//     { name: 'Markers/Highlighters', id: 'markers-highlighters' },
//     { name: 'Tapes', id: 'tapes' },
//     { name: 'Plastic Files', id: 'plastic-files' },
//     { name: 'Rulers', id: 'rulers' },
//     { name: 'Drawing Related', id: 'drawing-related' },
//     { name: 'Calculators', id: 'calculators' },
//     { name: 'Sports', id: 'sports' },
//     { name: 'Others', id: 'others' }
//   ];

//   return (
//     <div className={styles.buttonContainer}>
//       {categories.map((category, index) => (
//         <a
//           key={index} 
//           href={`#${category.id}`} 
//           className={`btn btn-primary ${styles.customButton}`}
//         >
//           {category.name}
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ProductButtons;


import React, { useState } from 'react';
import styles from './ProductButtons.module.css';

const categories = [
  { name: 'All', id: 'all' },
  { name: 'Rough Pages Registers', id: 'rough-pages-registers' },
  { name: 'Neat Pages Registers', id: 'neat-pages-registers' },
  { name: 'Ball/Pointers Pens', id: 'ball-pointers-pens' },
  { name: 'Pages/Sheets', id: 'pages-sheets' },
  { name: 'Markers/Highlighters', id: 'markers-highlighters' },
  { name: 'Tapes', id: 'tapes' },
  { name: 'Plastic Files', id: 'plastic-files' },
  { name: 'Rulers', id: 'rulers' },
  { name: 'Drawing Related', id: 'drawing-related' },
  { name: 'Calculators', id: 'calculators' },
  { name: 'Sports', id: 'sports' },
  { name: 'Others', id: 'others' }
];

const ProductButtons = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    onSelectCategory(id);
  };

  return (
    <div className={styles.buttonContainer}>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category.id)}
          className={`btn ${styles.customButton} ${selectedCategory === category.id ? styles.activeButton : ''}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProductButtons;
