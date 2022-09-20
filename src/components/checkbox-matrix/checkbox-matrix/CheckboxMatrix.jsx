import { React, useState } from 'react' 
import styles from './CheckboxMatrix.module.css'
import CheckboxMatrixHeader from '../checkbox-matrix-header/CheckboxMatrixHeader'
import CheckboxMatrixCell from '../checkbox-matrix-cell/CheckboxMatrixCell'

const Matrix = (props) => {
	const [ focusedIndex, setFocusedIndex ] = useState({})
	const [ checkedCells, setCheckedCells ] = useState(props.checkedCells)
	const checkboxMatrixData = props.data
	const numCol = checkboxMatrixData[0].length
	const numRow = checkboxMatrixData[1].length

  const getFocusedIndexHandler = (rowIndex, columnIndex) => {
		setFocusedIndex({ rowIndex, columnIndex })
	}
  console.log("checkedCells", checkedCells)
  const indexOfArray = (val, array) => {
		const hash = {};
		for (let i = 0; i < array.length; i++) {
			hash[array[i]] = i;
		}
		return (hash.hasOwnProperty(val)) ? hash[val] : -1;
	};

	const changeCheckedCellsHandler = (row, column, type) => {
		const cellIndex = [row,column]
		if( type === 'add') {
			setCheckedCells(prevState => [...prevState, cellIndex])
		} else {
			const index = checkedCells.indexOf(cellIndex);
			if (index > -1) { 
				setCheckedCells(prevState => prevState.splice(index, 1))
			}
		}
	}
	return (
		<div role="grid" aria-labelledby="gridLabel" className={styles.matrix} >
			<div className={styles.matrixRow}>
				<div className={styles.blankCell}></div>
				{ checkboxMatrixData[0].map(
					(label, index) => {
						return <CheckboxMatrixHeader key={index} headerContent={label}/>
					})
				}
			</div>
			{
				checkboxMatrixData[1].map(
					(label, row) => {
						return (
							<div key={row} className={styles.matrixRow}>
								<CheckboxMatrixHeader headerContent={label}/>
								{[...Array(numCol)].map(
										(e, column) => 
											<CheckboxMatrixCell key={column} 
														rowIndex = {row}
														columnIndex = {column}
														getFocusedIndex={getFocusedIndexHandler} 
														focusedIndex={focusedIndex}
														numCol = {numCol}
														numRow = {numRow}
														changeCheckedCells={changeCheckedCellsHandler}
														checked = {indexOfArray([row, column], checkedCells) >= 0}
											/>
								)}
							</div>
						)}
				)
			}
		</div>
	)
}

export default Matrix
