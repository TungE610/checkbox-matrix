import { React, useState } from 'react' 
import styles from './Matrix.module.css'
import Label from '../Label/Label'
import Cell from '../Cell/Cell'

const Matrix = (props) => {
	const [ focusIndex, setFocusIndex ] = useState({})
	const listOneLength = props.data[1].length

  const getFocusIndexHander = (row, column) => {
		setFocusIndex({row, column,})
	}

	return (
		<div role="grid" aria-labelledby="gridLabel" className={styles.matrix} >
			<div className={styles.firstRow}>
				<div className={styles.blankCell}></div>
				{ props.data[0].map(
					(label, index) => {
						return <Label key={index} labelName={label}/>
					})
				}
			</div>
			{
				props.data[1].map(
					(label, row) => {
						return (
							<div key={row} className={styles.nextRow}>
								<Label labelName={label}/>
								{
									[...Array(listOneLength)].map((e, column) => <Cell key={column} column={column} row={row} getFocusIndex={getFocusIndexHander} focusIndex={focusIndex}/>)
								}
							</div>
						)
					}
				)
			}
		</div>
	)
}

export default Matrix
