import React from 'react';
import styles from './ProductTable.module.css';


const products = [
  {
    category: 'Rough Pages Registers',
    id: 'rough-pages-registers',
    items: [
      { id: 'ring-register-180-pages', name: 'Ring Register', description: '~180 pages', price: '350', pictureUrl: 'https://example.com/images/ring_register_180.jpg' },
      { id: 'ring-register-100-pages', name: 'Ring Register', description: '~100 pages', price: '220', pictureUrl: 'https://example.com/images/ring_register_100.jpg' },
      { id: 'non-ring-register-210-pages', name: 'Non-Ring Register', description: '~210 pages', price: '350 (Out Of Stock)', pictureUrl: 'https://example.com/images/non_ring_register_210.jpg' },
      { id: 'non-ring-register-150-pages', name: 'Non-Ring Register', description: '~150 pages', price: '250', pictureUrl: 'https://example.com/images/non_ring_register_150.jpg' },
    ],
  },
  {
    category: 'Neat Pages Registers',
    id: 'neat-pages-registers',
    items: [
      { id: 'ring-register-5-portions', name: 'Ring Register', description: '5 Portions/Subjects', price: '400', pictureUrl: 'https://example.com/images/ring_register_5portions.jpg' },
      { id: 'ring-register-6-portions', name: 'Ring Register', description: '6 Portions/Subjects', price: '450 (Out Of Stock)', pictureUrl: 'https://example.com/images/ring_register_6portions.jpg' },
    ],
  },
  {
    category: 'Ball/Pointers Pens',
    id: 'ball-pointers-pens',
    items: [
      { id: 'piano-ball-pen', name: 'Piano Ball Pen', description: 'Black, Blue, Green, Red', price: '20', pictureUrl: 'https://example.com/images/piano_ball_pen.jpg' },
      { id: 'signature-ball-pen', name: 'Signature Ball Pen', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/signature_ball_pen.jpg' },
      { id: 'dollar-ball-pen', name: 'Dollar Ball Pen', description: 'Black, Blue', price: '30', pictureUrl: 'https://example.com/images/dollar_ball_pen.jpg' },
      { id: 'dollar-pointer', name: 'Dollar Pointer', description: 'Blue, Black, Turquoise', price: '30', pictureUrl: 'https://example.com/images/dollar_pointer.jpg' },
      { id: 'dollar-gel-pen', name: 'Dollar Gel Pen', description: 'Blue, Black', price: '70', pictureUrl: 'https://example.com/images/dollar_gel_pen.jpg' },
      { id: 'dollar-pointer-pack', name: 'Dollar Pointer', description: '10 diff: colors pack', price: '300', pictureUrl: 'https://example.com/images/dollar_pointer_pack.jpg' },
    ],
  },
  {
    category: 'Pages / Sheets',
    id: 'pages-sheets',
    items: [
      { id: 'a4-size-paper', name: 'A4 Size Paper', description: '70 GSM / White', price: '4', pictureUrl: 'https://example.com/images/a4_paper.jpg' },
      { id: 'legal-size-paper', name: 'Legal Size Paper', description: '70 GSM / White', price: '6', pictureUrl: 'https://example.com/images/legal_paper.jpg' },
      { id: 'narrow-line-sheets', name: 'Narrow Line Sheets', description: 'Base/Medium/Neat', price: '60 / 110 / 140', pictureUrl: 'https://example.com/images/narrow_line_sheets.jpg' },
    ],
  },
  {
    category: 'Markers / Highlighters',
    id: 'markers-highlighters',
    items: [
      { id: 'dollar-marker', name: 'Dollar Marker', description: 'Black, Blue, Green', price: '20', pictureUrl: 'https://example.com/images/dollar_marker.jpg' },
      { id: 'piano-marker', name: 'Piano Marker', description: 'Black, Blue', price: '20', pictureUrl: 'https://example.com/images/piano_marker.jpg' },
      { id: 'cut-marker', name: 'Cut Marker', description: 'Black, Blue', price: '15', pictureUrl: 'https://example.com/images/cut_marker.jpg' },
      { id: 'dollar-neon-highlighter', name: 'Dollar Neon Highlighter', description: 'Yellow, Pink', price: '50', pictureUrl: 'https://example.com/images/neon_highlighter.jpg' },
    ],
  },
  {
    category: 'Tapes',
    id: 'tapes',
    items: [
      { id: 'osaka-tape', name: 'OSAKA Tape', description: 'White / 10-gazz', price: '70', pictureUrl: 'https://example.com/images/osaka_tape.jpg' },
      { id: 'transparent-tape-1inch', name: 'Transparent Tape', description: 'Thickness: 1 inch', price: '150', pictureUrl: 'https://example.com/images/transparent_tape_1inch.jpg' },
      { id: 'transparent-tape-2inch', name: 'Transparent Tape', description: 'Thickness: 2 inch', price: '250', pictureUrl: 'https://example.com/images/transparent_tape_2inch.jpg' },
      { id: 'transparent-tape-075inch', name: 'Transparent Tape', description: 'Thickness: 0.75 inch / 30 yards', price: '40', pictureUrl: 'https://example.com/images/transparent_tape_075inch.jpg' },
    ],
  },
  {
    category: 'Plastic Files',
    id: 'plastic-files',
    items: [
      { id: 'button-file-green', name: 'Button File', description: 'Color: Green', price: '40', pictureUrl: 'https://example.com/images/button_file_green.jpg' },
      { id: 'assignment-file', name: 'Assignment File', description: 'Stick files', price: '40', pictureUrl: 'https://example.com/images/assignment_file.jpg' },
    ],
  },
  {
    category: 'Rulers',
    id: 'rulers',
    items: [
      { id: 'plastic-ruler', name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60', pictureUrl: 'https://example.com/images/plastic_ruler.jpg' },
      { id: 'stainless-steel-ruler', name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120', pictureUrl: 'https://example.com/images/steel_ruler.jpg' },
    ],
  },
  {
    category: 'Drawing Related',
    id: 'drawing-related',
    items: [
      { id: 'pencil-dollar', name: 'Pencil', description: 'Dollar', price: '20', pictureUrl: 'https://example.com/images/pencil.jpg' },
      { id: 'eraser-white', name: 'Eraser', description: 'White', price: '15', pictureUrl: 'https://example.com/images/eraser.jpg' },
      { id: 'sharpener-dux', name: 'Sharpener', description: 'Dux High Quality', price: '20', pictureUrl: 'https://example.com/images/sharpener.jpg' },
    ],
  },
  {
    category: 'Calculators',
    id: 'calculators',
    items: [
      { id: 'casio-555-calculator', name: 'Casio 555 Functions Calculator', description: 'fx-991EX', price: '2500', pictureUrl: 'https://example.com/images/casio_555_calculator.jpg' },
      { id: 'casio-552-calculator', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2400', pictureUrl: 'https://example.com/images/casio_552_calculator.jpg' },
      { id: 'casio-417-calculator', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1650', pictureUrl: 'https://example.com/images/casio_417_calculator.jpg' },
    ],
  },
  {
    category:  'Sports',
    id: 'sports',
    items: [
      { id: 'cricket-ball', name: 'Cricket Ball', description: 'FG Company', price: '420', pictureUrl: 'https://example.com/images/cricket_ball.jpg' },
      { id: 'table-tennis-ball', name: 'Table Tennis Ball', description: 'Double circle', price: '80', pictureUrl: 'https://example.com/images/table_tennis_ball.jpg' },
      { id: 'badminton-shuttle', name: 'Badminton Shuttle', description: 'Ghafoor Champion', price: '350', pictureUrl: 'https://example.com/images/badminton_shuttle.jpg' },
    ],
  },
  {
    category: 'Others',
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

const ProductTable = () => {
  const extractPrice = (price) => {
    const numericPrice = price.split(' ')[0];
    return numericPrice;
  };

  const generateWhatsAppLink = (name, price) => {
    const numericPrice = extractPrice(price);
    const message = `I want to buy ${name} with price ${numericPrice} PKR`;
    return `https://wa.me/923105688796?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={styles.tableContainer}>
      {products.map((category, index) => (
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
