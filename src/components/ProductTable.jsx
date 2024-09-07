
import React, { useState } from 'react';
import styles from './ProductTable.module.css';
import ringrough from './Pictures/100RingRoughRegister.jpg';
import ringrough180 from './Pictures/RingRoughRegister2.jpg';
import NonRingRoughRegister150 from './Pictures/NonRingRoughRegister150.jpg';
import NonRingRoughRegister210 from './Pictures/NonRingRoughRegister210.jpg';
import P5 from './Pictures/P5.RingNeatRegister.jpg'
import P6 from './Pictures/P6.RingNeatRegister.jpg'
import PianoPen from './Pictures/PianoPen.jpg';
import SignaturePen from './Pictures/SignaturPen.jpg';
import Calc417 from './Pictures/417.CasioCalculator.jpg'
import Calc552 from './Pictures/552.CasioCalculator.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
// import P5 from './Pictures/P5.RingNeatRegister.jpg'
const products = [
  {
    category: 'Rough Pages Registers',
    id: 'rough-pages-registers',
    items: [
      { id: '1', name: 'Ring Register', description: '~100 pages', price: '230', pictureUrl: [ringrough] },
      { id: '2', name: 'Ring Register', description: '~180 pages', price: '360', pictureUrl:[ringrough180] },
      { id: '3', name: 'Non-Ring Register', description: '~150 pages', price: '250', pictureUrl:[NonRingRoughRegister150] },

      { id: '4', name: 'Non-Ring Register', description: '~210 pages', price: '360', pictureUrl: [NonRingRoughRegister210 ],
        // customClass: 'specific-class',
      }
    ],
  },
  {
    category: 'Neat Pages Registers',
    id: 'neat-pages-registers',
    items: [
      { id: '1', name: 'Ring Register', description: '5 Portions/Subjects', price: '400', pictureUrl: [P5]},
      { id: '2', name: 'Ring Register', description: '6 Portions/Subjects', price: '450 ', pictureUrl:[ P6 ],
        // customClass: 'soldClass',
      },
    ],
  },
  {
    category: 'Ball/Pointers Pens',
    id: 'ball-pointers-pens',
    items: [
      { id: '1', name: 'Piano Ball Pen', description: 'Black, Red', price: '20', pictureUrl: [PianoPen] },
      { id: '2', name: 'Signature Ball Pen', description: 'Black, Blue', price: '20', pictureUrl: [SignaturePen] },
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
      { id: '2', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400', pictureUrl: [Calc552],
        // customClass: 'soldClass',
       },
      { id: '3', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650', pictureUrl: [Calc417] },
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
  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(category => category.id === selectedCategory);

  // Generate WhatsApp link based on the item name, price, and custom class
  const generateWhatsAppLink = (name, price, customClass) => {
    const numericPrice = price.split(' ')[0]; // Extract numeric part of price
    const message = `I want to buy ${name} with price ${numericPrice} PKR`; // Prepare WhatsApp message
    
    let whatsappNumber = '923183098174'; // Default WhatsApp number
    
    // Change WhatsApp number if a specific class is matched
    if (customClass === 'specific-class') {
      whatsappNumber = '923105688796';
    }

    // Return the WhatsApp API link with the message
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={styles.tableContainer}>
      {filteredProducts.map((category, index) => (
        <div key={index} id={category.id}>
          {/* Category Heading */}
          <h2 className={styles.heading}>{category.category}</h2>

          {/* Product Table */}
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
              {/* Loop through category items */}
              {category.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td> {/* Item ID */}
                  <td>{item.name}</td> {/* Item Name */}
                  <td>{item.description}</td> {/* Item Description */}
                  <td>{item.price}</td> {/* Item Price */}
                  <td>
                    {item.customClass === 'sold' ? (
                      // Disable button if the item is sold
                      <button
                        className={`${styles.btn} ${styles.disabledBtn}`}
                        disabled
                      >
                        Sold
                      </button>
                    ) : (
                      // Generate WhatsApp link for buying
                      <a
                        href={generateWhatsAppLink(item.name, item.price, item.customClass)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                      >
                        Buy
                      </a>
                    )}
                  </td>
                  <td>
                    {/* Link to item picture */}
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

          {/* Divider between categories */}
          <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
