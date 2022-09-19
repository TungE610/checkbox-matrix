import { React, useState } from 'react' 
import styles from './Cell.module.css'
import { Checkbox } from 'antd';

const Cell = () => {
	const [checked, setChecked] = useState(false)

	const onChangeHandler = () => {
    setChecked(prev => !prev)
	}

	return (
		<div className={checked ? styles.cellChecked : styles.cellUnChecked}> 
				<div className={styles.checkboxContainer}>
					<Checkbox class={styles.checkbox} onChange={onChangeHandler}></Checkbox>
				</div>
		</div>
	)
}

export default Cell
