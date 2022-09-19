import { React, useState, useEffect } from 'react' 
import styles from './Matrix.module.css'
import axios from 'axios'
import Label from '../Label/Label'
import Cell from '../Cell/Cell'
import _ from 'lodash'

const Matrix = () => {
	const [ matrixData, setMatrixData ] = useState([{list: []}, {list: []}])
	const [listOneLength, setListOneLength] = useState(0)
	const renderMatrix = async () => {
		await axios('http://localhost:5000/api/getAll').then(response => {
			setMatrixData(response.data)
			setListOneLength(response.data[0].list.length)
		})
	}
	useEffect(() => {
		renderMatrix()
	}, [])
	return (
		<div className={styles.matrix}>
			<div className={styles.firstRow}>
				<div className={styles.blankCell}></div>
				{ matrixData[0].list.map(
					label => {
						return <Label labelName={label}/>
					})
				}
			</div>
			{
				matrixData[1].list.map(
					label => {
						return (
							<div className={styles.nextRow}>
								<Label labelName={label}/>
								{
								_.times(listOneLength, () => 
  								<Cell />
									) 
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
