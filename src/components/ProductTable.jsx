// import React from 'react';
// import styles from './ProductTable.module.css';
// const products = [
//   {
//     category: 'Rough Pages Registers',
//     id: 'rough-pages-registers',
//     items: [
//       { id: '1', name: 'Ring Register', description: '~180 pages', price: '350', pictureUrl: 'https://example.com/images/ring_register_180.jpg' },
//       { id: '2', name: 'Ring Register', description: '~100 pages', price: '220', pictureUrl: 'https://example.com/images/ring_register_100.jpg' },
//       { id: '3', name: 'Non-Ring Register', description: '~210 pages', price: '350 (Out Of Stock)', pictureUrl: 'https://example.com/images/non_ring_register_210.jpg' },
//       { id: '4', name: 'Non-Ring Register', description: '~150 pages', price: '250', pictureUrl: 'https://example.com/images/non_ring_register_150.jpg' },
//     ],
//   },
//   {
//     category: 'Neat Pages Registers',
//     id: 'neat-pages-registers',
//     items: [
//       { id: '1', name: 'Ring Register', description: '5 Portions/Subjects', price: '400', pictureUrl: 'https://example.com/images/ring_register_5portions.jpg' },
//       { id: '2', name: 'Ring Register', description: '6 Portions/Subjects', price: '450 (Out Of Stock)', pictureUrl: 'https://example.com/images/ring_register_6portions.jpg' },
//     ],
//   },
//   {
//     category: 'Ball/Pointers Pens',
//     id: 'ball-pointers-pens',
//     items: [
//       { id: '1', name: 'Piano Ball Pen', description: 'Black, Blue, Green, Red', price: '20', pictureUrl: 'https://example.com/images/piano_ball_pen.jpg' },
//       { id: '2', name: 'Signature Ball Pen', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/signature_ball_pen.jpg' },
//       { id: '3', name: 'Dollar Ball Pen', description: 'Black, Blue', price: '30', pictureUrl: 'https://example.com/images/dollar_ball_pen.jpg' },
//       { id: '4', name: 'Dollar Pointer', description: 'Blue, Black, Turquoise', price: '30', pictureUrl: 'https://example.com/images/dollar_pointer.jpg' },
//       { id: '5', name: 'Dollar Gel Pen', description: 'Blue, Black', price: '70', pictureUrl: 'https://example.com/images/dollar_gel_pen.jpg' },
//       { id: '6', name: 'Dollar Pointer', description: '10 diff: colors pack', price: '300', pictureUrl: 'https://example.com/images/dollar_pointer_pack.jpg' },
//     ],
//   },
//   {
//     category: 'Pages / Sheets',
//     id: 'pages-sheets',
//     items: [
//       { id: '1', name: 'A4 Size Paper', description: '70 GSM / White', price: '4', pictureUrl: 'https://example.com/images/a4_paper.jpg' },
//       { id: '2', name: 'Legal Size Paper', description: '70 GSM / White', price: '6', pictureUrl: 'https://example.com/images/legal_paper.jpg' },
//       { id: '3', name: 'Narrow Line Sheets', description: 'Base/Medium/Neat', price: '60 / 110 / 140', pictureUrl: 'https://example.com/images/narrow_line_sheets.jpg' },
//     ],
//   },
//   {
//     category: 'Markers / Highlighters',
//     id: 'markers-highlighters',
//     items: [
//       { id: '1', name: 'Dollar Marker', description: 'Black, Blue, Green', price: '20', pictureUrl: 'https://example.com/images/dollar_marker.jpg' },
//       { id: '2', name: 'Piano Marker', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/piano_marker.jpg' },
//       { id: '3', name: 'Cut Marker', description: 'Black, Blue', price: '15', pictureUrl: 'https://example.com/images/cut_marker.jpg' },
//       { id: '4', name: 'Dollar Neon Highlighter', description: 'Yellow, Pink', price: '50', pictureUrl: 'https://example.com/images/neon_highlighter.jpg' },
//     ],
//   },
//   {
//     category: 'Tapes',
//     id: 'tapes',
//     items: [
//       { id: '1', name: 'OSAKA Tape', description: 'White / 10-gazz', price: '70', pictureUrl: 'https://example.com/images/osaka_tape.jpg' },
//       { id: '2', name: 'Transparent Tape', description: 'Thickness: 1 inch', price: '150', pictureUrl: 'https://example.com/images/transparent_tape_1inch.jpg' },
//       { id: '3', name: 'Transparent Tape', description: 'Thickness: 2 inch', price: '250', pictureUrl: 'https://example.com/images/transparent_tape_2inch.jpg' },
//       { id: '4', name: 'Transparent Tape', description: 'Thickness: 0.75 inch / 30 yards', price: '40', pictureUrl: 'https://example.com/images/transparent_tape_075inch.jpg' },
//     ],
//   },
//   {
//     category: 'Plastic Files',
//     id: 'plastic-files',
//     items: [
//       { id: '1', name: 'Button File', description: 'Color: Green', price: '40', pictureUrl: 'https://example.com/images/button_file_green.jpg' },
//       { id: '2', name: 'Assignment File', description: 'Stick files', price: '40', pictureUrl: 'https://example.com/images/assignment_file.jpg' },
//     ],
//   },
//   {
//     category: 'Rulers',
//     id: 'rulers',
//     items: [
//       { id: '1', name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60', pictureUrl: 'https://example.com/images/plastic_ruler.jpg' },
//       { id: '2', name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120', pictureUrl: 'https://example.com/images/steel_ruler.jpg' },
//     ],
//   },
//   {
//     category: 'Drawing Related',
//     id: 'drawing-related',
//     items: [
//       { id: '1', name: 'Pencil', description: 'Dollar', price: '20', pictureUrl: 'https://example.com/images/pencil.jpg' },
//       { id: '2', name: 'Eraser', description: 'White', price: '15', pictureUrl: 'https://example.com/images/eraser.jpg' },
//       { id: '3', name: 'Sharpener', description: 'Dux High Quality', price: '20', pictureUrl: 'https://example.com/images/sharpener.jpg' },
//     ],
//   },
//   {
//     category: 'Calculators',
//     id: 'calculators',
//     items: [
//       { id: '1', name: 'Casio 555 Functions Calculator', description: 'fx-991EX', price: '2500', pictureUrl: 'https://example.com/images/casio_555_calculator.jpg' },
//       { id: '2', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400', pictureUrl: 'https://example.com/images/casio_552_calculator.jpg' },
//       { id: '3', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650', pictureUrl: 'https://example.com/images/casio_417_calculator.jpg' },
//     ],
//   },
//   {
//     category: 'Sports',
//     id: 'sports',
//     items: [
//       { id: '1', name: 'Cricket Ball', description: 'FG Company', price: '420', pictureUrl: 'https://example.com/images/cricket_ball.jpg' },
//       { id: '2', name: 'Table Tennis Ball', description: 'Double circle', price: '80', pictureUrl: 'https://example.com/images/table_tennis_ball.jpg' },
//       { id: '3', name: 'Badminton Shuttle', description: 'Ghafoor Champion', price: '350', pictureUrl: 'https://example.com/images/badminton_shuttle.jpg' },
//     ],
//   },
  
//   {
//     category: 'Others',
//     id:'others',
//     items: [
//       { id: 1, name: 'Correction Pen', description: '(Whito)', price: '60', pictureUrl: 'https://example.com/images/correction_pen.jpg' },
//       { id: 2, name: 'Sticky Notes', description: '3x3 inch, 100 pcs, (Multicolor)', price: '100', pictureUrl: 'https://example.com/images/sticky_notes.jpg' },
//       { id: 3, name: 'NOTE PAD', description: 'High Quality / Size: A6', price: '70', pictureUrl: 'https://example.com/images/note_pad.jpg' },
//       { id: 4, name: 'Paper Cutter', description: 'Normal Quality', price: '180', pictureUrl: 'https://example.com/images/paper_cutter.jpg' },
//       { id: 5, name: 'Scissor', description: 'Normal Quality', price: '60', pictureUrl: 'https://example.com/images/scissor.jpg' },
//       { id: 6, name: 'Glue Stick', description: 'Company: Nafees', price: '70', pictureUrl: 'https://example.com/images/scissor.jpg' },
//       { id: 7, name: 'Elfy', description: 'GMSA', price: '30', pictureUrl: 'https://example.com/images/scissor.jpg' },
//       { id: 8, name: 'Metallic Pen Holder', description: 'High Quality', price: '400' , pictureUrl: 'https://example.com/images/scissor.jpg'},
//     ],
//   },
// ];

// const ProductTable = () => {
//   const extractPrice = (price) => {
//     const numericPrice = price.split(' ')[0];
//     return numericPrice;
//   };

//   const generateWhatsAppLink = (name, price) => {
//     const numericPrice = extractPrice(price);
//     const message = `I want to buy ${name} with price ${numericPrice} PKR`;
//     return `https://wa.me/923183098174?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {products.map((category, index) => (
//         <div key={index} id={category.id}>
//           <h2 className={styles.heading}>{category.category}</h2>
//           <table className={`table table-striped ${styles.table}`}>
//             <thead>
//               <tr>
//                 <th className={styles.head}>S/No</th>
//                 <th className={styles.head}>Items</th>
//                 <th className={styles.head}>Description</th>
//                 <th className={styles.head}>Price</th>
//                 <th className={styles.head}>Action</th>
//                 <th className={styles.head}>Picture</th>
//               </tr>
//             </thead>
//             <tbody>
//               {category.items.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <a
//                       href={generateWhatsAppLink(item.name, item.price)}
//                       target="_blank"
//                       className={styles.btn}
//                     >
//                       Buy
//                     </a>
//                   </td>
//                   <td>
//                     <a
//                       href={item.pictureUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.btn}
//                     >
//                       Picture
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductTable;







// import React, { useState } from 'react';
// import styles from './ProductTable.module.css';

// const ProductTable = () => {
//   // Initialize the selectedCategory state with the first category's ID
//   const [selectedCategory, setSelectedCategory] = useState(products[0].id);

//   // Function to handle category click
//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//   };

  // Define the generateWhatsAppLink function
  const generateWhatsAppLink = (name, price) => {
    const numericPrice = price.split(' ')[0]; // Extract numeric price
    const message = `I want to buy ${name} with price ${numericPrice} PKR`;
    return `https://wa.me/923183098174?text=${encodeURIComponent(message)}`;
  };

//   return (
//     <div>
//       {/* Category Buttons */}
//       <div className={styles.buttonContainer}>
//         {products.map((category, index) => (
//           <button
//             key={index}
//             onClick={() => handleCategoryClick(category.id)}
//             className={styles.customButton}
//           >
//             {category.category}
//           </button>
//         ))}
//       </div>

//       <div className={styles.tableContainer}>
//         {products
//           .filter(category => !selectedCategory || category.id === selectedCategory)
//           .map((category, index) => (
//             <div key={index} id={category.id}>
//               <h2 className={styles.heading}>{category.category}</h2>
//               <table className={`table table-striped ${styles.table}`}>
//                 <thead>
//                   <tr>
//                     <th className={styles.head}>S/No</th>
//                     <th className={styles.head}>Items</th>
//                     <th className={styles.head}>Description</th>
//                     <th className={styles.head}>Price</th>
//                     <th className={styles.head}>Action</th>
//                     <th className={styles.head}>Picture</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {category.items.map(item => (
//                     <tr key={item.id}>
//                       <td>{item.id}</td>
//                       <td>{item.name}</td>
//                       <td>{item.description}</td>
//                       <td>{item.price}</td>
//                       <td>
//                         <a
//                           href={generateWhatsAppLink(item.name, item.price)}
//                           target="_blank"
//                           className={styles.btn}
//                         >
//                           Buy
//                         </a>
//                       </td>
//                       <td>
//                         <a
//                           href={item.pictureUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={styles.btn}
//                         >
//                           Picture
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {/* <hr style={{ border: '100px solid white', marginBottom: '20px' }} /> */}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductTable;




import React, { useState } from 'react';
import styles from './ProductTable.module.css';
const products = [
  {
    category: 'Rough Pages Registers',
    id: 'rough-pages-registers',
    items: [
      { id: '1', name: 'Ring Register', description: '~180 pages', price: '350', pictureUrl: 'https://example.com/images/ring_register_180.jpg' },
      { id: '2', name: 'Ring Register', description: '~100 pages', price: '220', pictureUrl: 'https://example.com/images/ring_register_100.jpg' },
      { id: '3', name: 'Non-Ring Register', description: '~210 pages', price: '350 (Out Of Stock)', pictureUrl: 'https://example.com/images/non_ring_register_210.jpg' },
      { id: '4', name: 'Non-Ring Register', description: '~150 pages', price: '250', pictureUrl: 'https://example.com/images/non_ring_register_150.jpg' },
    ],
  },
  {
    category: 'Neat Pages Registers',
    id: 'neat-pages-registers',
    items: [
      { id: '1', name: 'Ring Register', description: '5 Portions/Subjects', price: '400', pictureUrl: 'https://example.com/images/ring_register_5portions.jpg' },
      { id: '2', name: 'Ring Register', description: '6 Portions/Subjects', price: '450 (Out Of Stock)', pictureUrl: 'https://example.com/images/ring_register_6portions.jpg' },
    ],
  },
  {
    category: 'Ball/Pointers Pens',
    id: 'ball-pointers-pens',
    items: [
      { id: '1', name: 'Piano Ball Pen', description: 'Black, Blue, Green, Red', price: '20', pictureUrl: 'https://example.com/images/piano_ball_pen.jpg' },
      { id: '2', name: 'Signature Ball Pen', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/signature_ball_pen.jpg' },
      { id: '3', name: 'Dollar Ball Pen', description: 'Black, Blue', price: '30', pictureUrl: 'https://example.com/images/dollar_ball_pen.jpg' },
      { id: '4', name: 'Dollar Pointer', description: 'Blue, Black, Turquoise', price: '30', pictureUrl: 'https://example.com/images/dollar_pointer.jpg' },
      { id: '5', name: 'Dollar Gel Pen', description: 'Blue, Black', price: '70', pictureUrl: 'https://example.com/images/dollar_gel_pen.jpg' },
      { id: '6', name: 'Dollar Pointer', description: '10 diff: colors pack', price: '300', pictureUrl: 'https://example.com/images/dollar_pointer_pack.jpg' },
    ],
  },
  {
    category: 'Pages / Sheets',
    id: 'pages-sheets',
    items: [
      { id: '1', name: 'A4 Size Paper', description: '70 GSM / White', price: '4', pictureUrl: 'https://example.com/images/a4_paper.jpg' },
      { id: '2', name: 'Legal Size Paper', description: '70 GSM / White', price: '6', pictureUrl: 'https://example.com/images/legal_paper.jpg' },
      { id: '3', name: 'Narrow Line Sheets', description: 'Base/Medium/Neat', price: '60 / 110 / 140', pictureUrl: 'https://example.com/images/narrow_line_sheets.jpg' },
    ],
  },
  {
    category: 'Markers / Highlighters',
    id: 'markers-highlighters',
    items: [
      { id: '1', name: 'Dollar Marker', description: 'Black, Blue, Green', price: '20', pictureUrl: 'https://example.com/images/dollar_marker.jpg' },
      { id: '2', name: 'Piano Marker', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/piano_marker.jpg' },
      { id: '3', name: 'Cut Marker', description: 'Black, Blue', price: '15', pictureUrl: 'https://example.com/images/cut_marker.jpg' },
      { id: '4', name: 'Dollar Neon Highlighter', description: 'Yellow, Pink', price: '50', pictureUrl: 'https://example.com/images/neon_highlighter.jpg' },
    ],
  },
  {
    category: 'Tapes',
    id: 'tapes',
    items: [
      { id: '1', name: 'OSAKA Tape', description: 'White / 10-gazz', price: '70', pictureUrl: 'https://example.com/images/osaka_tape.jpg' },
      { id: '2', name: 'Transparent Tape', description: 'Thickness: 1 inch', price: '150', pictureUrl: 'https://example.com/images/transparent_tape_1inch.jpg' },
      { id: '3', name: 'Transparent Tape', description: 'Thickness: 2 inch', price: '250', pictureUrl: 'https://example.com/images/transparent_tape_2inch.jpg' },
      { id: '4', name: 'Transparent Tape', description: 'Thickness: 0.75 inch / 30 yards', price: '40', pictureUrl: 'https://example.com/images/transparent_tape_075inch.jpg' },
    ],
  },
  {
    category: 'Plastic Files',
    id: 'plastic-files',
    items: [
      { id: '1', name: 'Button File', description: 'Color: Green', price: '40', pictureUrl: 'https://example.com/images/button_file_green.jpg' },
      { id: '2', name: 'Assignment File', description: 'Stick files', price: '40', pictureUrl: 'https://example.com/images/assignment_file.jpg' },
    ],
  },
  {
    category: 'Rulers',
    id: 'rulers',
    items: [
      { id: '1', name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60', pictureUrl: 'https://example.com/images/plastic_ruler.jpg' },
      { id: '2', name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120', pictureUrl: 'https://example.com/images/steel_ruler.jpg' },
    ],
  },
  {
    category: 'Drawing Related',
    id: 'drawing-related',
    items: [
      { id: '1', name: 'Pencil', description: 'Dollar', price: '20', pictureUrl: 'https://example.com/images/pencil.jpg' },
      { id: '2', name: 'Eraser', description: 'White', price: '15', pictureUrl: 'https://example.com/images/eraser.jpg' },
      { id: '3', name: 'Sharpener', description: 'Dux High Quality', price: '20', pictureUrl: 'https://example.com/images/sharpener.jpg' },
    ],
  },
  {
    category: 'Calculators',
    id: 'calculators',
    items: [
      { id: '1', name: 'Casio 555 Functions Calculator', description: 'fx-991EX', price: '2500', pictureUrl: 'https://example.com/images/casio_555_calculator.jpg' },
      { id: '2', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400', pictureUrl: 'https://example.com/images/casio_552_calculator.jpg' },
      { id: '3', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650', pictureUrl: 'https://example.com/images/casio_417_calculator.jpg' },
    ],
  },
  {
    category: 'Sports',
    id: 'sports',
    items: [
      { id: '1', name: 'Cricket Ball', description: 'FG Company', price: '420', pictureUrl: 'https://example.com/images/cricket_ball.jpg' },
      { id: '2', name: 'Table Tennis Ball', description: 'Double circle', price: '80', pictureUrl: 'https://example.com/images/table_tennis_ball.jpg' },
      { id: '3', name: 'Badminton Shuttle', description: 'Ghafoor Champion', price: '350', pictureUrl: 'https://example.com/images/badminton_shuttle.jpg' },
    ],
  },
  
  {
    category: 'Others',
    id:'others',
    items: [
      { id: 1, name: 'Correction Pen', description: '(Whito)', price: '60', pictureUrl: 'https://example.com/images/correction_pen.jpg' },
      { id: 2, name: 'Sticky Notes', description: '3x3 inch, 100 pcs, (Multicolor)', price: '100', pictureUrl: 'https://example.com/images/sticky_notes.jpg' },
      { id: 3, name: 'NOTE PAD', description: 'High Quality / Size: A6', price: '70', pictureUrl: 'https://example.com/images/note_pad.jpg' },
      { id: 4, name: 'Paper Cutter', description: 'Normal Quality', price: '180', pictureUrl: 'https://example.com/images/paper_cutter.jpg' },
      { id: 5, name: 'Scissor', description: 'Normal Quality', price: '60', pictureUrl: 'https://example.com/images/scissor.jpg' },
      { id: 6, name: 'Glue Stick', description: 'Company: Nafees', price: '70', pictureUrl: 'https://example.com/images/scissor.jpg' },
      { id: 7, name: 'Elfy', description: 'GMSA', price: '30', pictureUrl: 'https://example.com/images/scissor.jpg' },
      { id: 8, name: 'Metallic Pen Holder', description: 'High Quality', price: '400' , pictureUrl: 'https://example.com/images/scissor.jpg'},
    ],
  },
];
const ProductTable = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(category => category.id === selectedCategory);

  return (
    <div className={styles.tableContainer}>
      {filteredProducts.map((category, index) => (
        <div key={index} id={category.id}>
          <h2 className={styles.heading}>{category.category}</h2>
          <table className={`table table-striped ${styles.table}`}>
            <thead>
              <tr>
                <th className={styles.head}>S/No</th>
                <th className={styles.head}>Items</th>
                <th className={styles.head}>Description</th>
                <th className={styles.head}>Price</th>
                <th className={styles.head}>Action</th>
                <th className={styles.head}>Picture</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <a
                      href={generateWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      className={styles.btn}
                    >
                      Buy
                    </a>
                  </td>
                  <td>
                    <a
                      href={item.pictureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btn}
                    >
                      Picture
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;



