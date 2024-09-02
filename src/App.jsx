
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
 
<div className={styles.container}>
      <Header/>

      <main className={styles.content}>
      <div className="col-12">
  <div>
      <ProductButtons onSelectCategory={setSelectedCategory} />
      <ProductTable selectedCategory={selectedCategory} />
    </div>
  </div>
      </main>

      <footer className={styles.footer}>
           <Footer></Footer> </footer>
    </div>

    
   );
}

export default App;

