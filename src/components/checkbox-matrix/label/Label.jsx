import { React } from 'react' 
import styles from './Label.module.css'

const Label = (props) => {
	
	return (
		<div role="gridcell" tabIndex="-1" className={styles.label}>
			<p className={styles.labelText}>	
				{props.labelName}
			</p> 
		</div>
	)
}

export default Label
