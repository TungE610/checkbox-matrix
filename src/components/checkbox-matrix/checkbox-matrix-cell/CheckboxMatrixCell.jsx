import { React, useState, useRef } from 'react' 
import styles from './CheckboxMatrixCell.module.css'
import { Checkbox } from 'antd';

const CheckboxMatrixCell = (props) => {
	const [ checked, setChecked ] = useState(false)
	const matrixCellRef = useRef(null)
  const focusedIndex = props.focusedIndex
	const cellIndex = props.index

	const toggleCheckbox = () => {
    setChecked(prevState => !prevState)
	}

  const changeFocusedCell = (event) => {
		matrixCellRef.current.setAttribute('tabIndex', '-1')
		if(event.code === "ArrowRight") {
			props.getFocusedIndex(cellIndex.rowIndex, cellIndex.columnIndex + 1)
		} else if (event.code === "ArrowUp") {
			props.getFocusedIndex(cellIndex.rowIndex - 1, cellIndex.columnIndex)
		} else if (event.code === "ArrowLeft") {
			props.getFocusedIndex(cellIndex.rowIndex, cellIndex.columnIndex - 1)
		} else if (event.code === "ArrowDown") {
			props.getFocusedIndex(cellIndex.rowIndex + 1, cellIndex.columnIndex)
		}

		if(event.code === 'Enter') {
			setChecked(prevState => !prevState)
		}
	}

	if(focusedIndex.rowIndex === cellIndex.rowIndex && focusedIndex.columnIndex === cellIndex.columnIndex) {
		matrixCellRef.current.focus()
		matrixCellRef.current.setAttribute('tabIndex', '0')
	} 

	return (
		<div role="gridcell" tabIndex="-1" ref={matrixCellRef} className={checked ? styles.cellChecked : styles.cellUnChecked} 
				 onKeyDown={changeFocusedCell} 
		> 
				<div className={styles.checkboxContainer}>
					<Checkbox role="checkbox" aria-checked={checked ? "true" : "false"} class={styles.checkbox}
										checked={checked}
										onChange={toggleCheckbox} 
					>
					</Checkbox>
				</div>
		</div>
	)
}

export default CheckboxMatrixCell
