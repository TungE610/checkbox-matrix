import { React } from 'react' 
import styles from './Label.module.css'

const Label = (props) => {
	
	return (
		<div className={styles.label}>
			<p className={styles.labelText}>	
				{props.labelName}
			</p> 
		</div>
	)
}

export default Label
