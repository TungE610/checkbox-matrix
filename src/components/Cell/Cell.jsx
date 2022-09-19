import { React, useState, useRef } from 'react' 
import styles from './Cell.module.css'
import { Checkbox } from 'antd';

const Cell = (props) => {

	const [checked, setChecked] = useState(false)
	const cellRef = useRef(null)

	const onChangeHandler = () => {
    setChecked(prev => !prev)
	}
	
  const handleFocusChange = (event) => {
		cellRef.current.setAttribute('tabIndex', '-1')
		if(event.code === "ArrowRight") {
			props.getFocusIndex(props.row, props.column + 1)
		} else if (event.code === "ArrowUp") {
			props.getFocusIndex(props.row - 1, props.column)
		} else if (event.code === "ArrowLeft") {
			props.getFocusIndex(props.row, props.column - 1)
		} else if (event.code === "ArrowDown") {
			props.getFocusIndex(props.row + 1, props.column)
		}

		if(event.code === 'Enter') {
			setChecked(prev => !prev)
		}
	}

	if(props.focusIndex.row === props.row && props.focusIndex.column === props.column) {
		cellRef.current.focus()
		cellRef.current.setAttribute('tabIndex', '0')
	} 

	return (
		<div role="gridcell" tabIndex="-1" ref={cellRef} className={checked ? styles.cellChecked : styles.cellUnChecked} 
				 onKeyDown={handleFocusChange} 
		> 
				<div className={styles.checkboxContainer}>
					<Checkbox role="checkbox" aria-checked={checked ? "true" : "false"} class={styles.checkbox}
										checked={checked}
										onChange={onChangeHandler} 

					>
					</Checkbox>
				</div>
		</div>
	)
}

export default Cell
