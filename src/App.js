import './App.css';
import CheckboxMatrix from './components/checkbox-matrix/checkbox-matrix/CheckboxMatrix';

function App() {
	
	const twoListData = [['Dog', 'Cat', 'Mouse', 'Elephant', 'Duck', 'Lion', 'Horse','UniCorn'], 
											 ['White', 'Red', 'Black', 'Blue', 'Green', 'Yellow', 'Brown','Pink']]

  const checkedCells = [[1,1],[1,2],[3,3],[4,4]]

  return (
    <div className="App">
      <CheckboxMatrix data={twoListData} checkedCells={checkedCells} />
    </div>
  );
}

export default App;
