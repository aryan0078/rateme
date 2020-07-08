import React, {Component} from 'react';
import styles from './profile.module.css';
class Profile extends Component{
	render(){
		return(
			 <div className={styles.area}>
			 	<div className={styles.prof_area}>
			 		<div className={styles.prof}>
			 			<div className={styles.prof_data}>
               				<p>Followers</p>
			 				<p>Following</p>
			 				<p>Likes</p>
			 			</div>	
			 		</div>
  			 	</div>
             </div>
			)
	}
} 

export default Profile;