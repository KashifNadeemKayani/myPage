
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import Footer from './components/Footer';
import ProductButtons from './components/ProductButtons';
import styles from './App.module.css';

function App() {
  return (
    <div >
      <Header />
      
    {/* <ProductButtons /> */}
      <div className={`row ${styles.container}`}>
  <div className="col-12">

    <ProductTable />
  </div>
</div>

      <Footer />
    </div>
  );
}

export default App;
