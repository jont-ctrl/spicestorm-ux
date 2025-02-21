import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <h1>Hello</h1>
        <button className="btn btn-primary">Köp</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
