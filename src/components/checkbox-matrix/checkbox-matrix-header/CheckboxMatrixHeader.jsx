import { React } from 'react' 
import styles from './CheckboxMatrixHeader.module.css'

const CheckboxMatrixHeader = (props) => {
	
	return (
		<div role="gridcell" tabIndex="-1" className={styles.matrixHeader}>
			<p className={styles.headerText}>	
				{props.headerContent}
			</p> 
		</div>
	)
}

export default CheckboxMatrixHeader
