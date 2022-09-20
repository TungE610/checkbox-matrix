import './App.css';
import Matrix from './components/checkbox-matrix/checkbox-matrix/CheckboxMatrix';

function App() {
	
	const twoListData = [['Dog', 'Cat', 'Mouse', 'Elephant', 'Duck', 'Lion', 'Hourse','UniCorn'], 
											 ['White', 'Red', 'Black', 'Blue', 'Green', 'Yellow', 'Brown']]
  const checkedCells = [[1,1],[1,2],[3,3],[4,4]]

  return (
    <div className="App">
      <Matrix data={twoListData} checkedCells={checkedCells} />
    </div>
  );
}

export default App;
