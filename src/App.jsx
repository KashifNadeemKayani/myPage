
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import Footer from './components/Footer';
import ProductButtons from './components/ProductButtons';
import styles from './App.module.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div >
      <Header />
      
      <div className={`row ${styles.container}`}>
  <div className="col-12">
  <div>
      <ProductButtons onSelectCategory={setSelectedCategory} />
      <ProductTable selectedCategory={selectedCategory} />
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import ProductButtons from './ProductButtons';
// import ProductTable from './ProductTable';

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

  // return (
  // );
// };

// export default App;
