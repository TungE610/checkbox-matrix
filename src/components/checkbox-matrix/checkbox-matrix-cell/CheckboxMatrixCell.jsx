import { React, useState, useRef } from 'react' 
import styles from './CheckboxMatrixCell.module.css'
import { Checkbox } from 'antd';

const CheckboxMatrixCell = (props) => {
	const [ checked, setChecked ] = useState(false)
	const matrixCellRef = useRef(null)
  const focusedIndex = props.focusedIndex
	const numRow = props.numRow
	const numCol = props.numCol
  console.log("row index", props.rowIndex)

	const toggleCheckbox = () => {
		setChecked(prevState => !prevState)
	}
	const DecreaseTabIndex = (e) => {
		matrixCellRef.current.setAttribute('tabIndex', '-1')
	}
  const IncreaseTabIndex = () => {
		matrixCellRef.current.setAttribute('tabIndex', '0')
	}
  const changeFocusedCell = (event) => {
		const canMoveFocus = ((event.code !== "ArrowRight" || focusedIndex.columnIndex < numCol -1) 
													& (event.code !== "ArrowUp" || focusedIndex.rowIndex > 0)
													& (event.code !== "ArrowLeft" || focusedIndex.columnIndex > 0)
													& (event.code !== "ArrowDown" || focusedIndex.rowIndex < numRow -1)
												 )
		if(canMoveFocus){
			matrixCellRef.current.setAttribute('tabIndex', '-1')
		} 
		if(event.code === "ArrowRight") {
			props.getFocusedIndex(props.rowIndex, props.columnIndex + 1)
		} else if (event.code === "ArrowUp") {
			props.getFocusedIndex(props.rowIndex - 1, props.columnIndex)
		} else if (event.code === "ArrowLeft") {
			props.getFocusedIndex(props.rowIndex, props.columnIndex - 1)
		} else if (event.code === "ArrowDown") {
			props.getFocusedIndex(props.rowIndex + 1, props.columnIndex)
		}

		if(event.code === 'Enter') {
			setChecked(prevState => !prevState)
		}
	}
	if(focusedIndex.rowIndex === props.rowIndex && focusedIndex.columnIndex === props.columnIndex) {
		matrixCellRef.current.focus()
		matrixCellRef.current.setAttribute('tabIndex', '0')
	} 

	return (
		<div role="gridcell" tabIndex="-1" ref={matrixCellRef} className={checked ? styles.cellChecked : styles.cellUnChecked} 
				 onKeyDown={changeFocusedCell}
				 onBlur={DecreaseTabIndex} 
				 onFocus={IncreaseTabIndex}
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
