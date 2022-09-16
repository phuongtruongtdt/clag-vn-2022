import './App.css'
import Banner from './components/Banner';
import Header from './components/Header';
export const App = () => {
  return (
    <div style={{padding: '3rem'}}>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;
