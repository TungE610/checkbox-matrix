import './App.css';
import Matrix from './components/Matrix/Matrix';

function App() {
	
	const twoListData = [['Dog', 'Cat', 'Mouse', 'Elephant', 'Duck', 'Lion', 'Hourse'], 
											 ['White', 'Red', 'Black', 'Blue', 'Green', 'Yellow', 'Brown']]

  return (
    <div className="App">
      <Matrix data={twoListData} />
    </div>
  );
}

export default App;
