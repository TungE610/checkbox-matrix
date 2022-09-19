import { React, useState } from 'react' 
import styles from './CheckboxMatrix.module.css'
import CheckboxMatrixHeader from '../checkbox-matrix-header/CheckboxMatrixHeader'
import CheckboxMatrixCell from '../checkbox-matrix-cell/CheckboxMatrixCell'

const Matrix = (props) => {
	const [ focusedIndex, setFocusedIndex ] = useState({})
	const checkboxMatrixData = props.data
	const numRow = checkboxMatrixData[1].length

  const getFocusedIndexHandler = (rowIndex, columnIndex) => {
		setFocusedIndex({ rowIndex, columnIndex })
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
								{[...Array(numRow)].map(
										(e, column) => 
											<CheckboxMatrixCell key={column} 
														index={{rowIndex: row, columnIndex: column}}
														getFocusedIndex={getFocusedIndexHandler} 
														focusedIndex={focusedIndex}
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
