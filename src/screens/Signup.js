import React, { Component } from 'react';
import styles from './Signup.module.css';

class Signup extends Component {
    render() {
        return (
            <div className={styles.bground}>
                <div className={styles.login}>
                   <h1 className={styles.head1}>Sign Up</h1>
  							<div class="form-group" className={styles.input}>
    							<input type="text" class="form-control" id="Email" aria-describedby="emailHelp" className={styles.email} placeholder='Enter username'/>
  							</div>
  							<div class="form-group" className={styles.input}>
    							<input type="email" class="form-control" id="Email" aria-describedby="emailHelp" className={styles.email1} placeholder='Enter email'/>
  							</div>
  							<div class="form-group">
    							<input type="password" class="form-control" id="Pass" className={styles.pass} placeholder='Enter password'/>
 	 						</div>
 	 						<div class="form-group">
    							<input type="number" class="form-control" id="Pass" className={styles.num} placeholder='Phone number'/>
 	 						</div>
 	 						<div class="form-group form-check" className={styles.rmb}>
    							<input type="checkbox" class="form-check-input" id="exampleCheck1" />
    							<label class="form-check-label" for="exampleCheck1">Remember me</label>
    							<span><a href='#' className={styles.frg_pass}>Forgot Password?</a></span>
  							</div>
  								<button type="submit" class="btn btn-primary" className={styles.log}>Sign In</button>
  							<div className={styles.icons}>	
					     	<a href='#'><span className={styles.icon1}></span></a>
					     	<a href='#'><span className={styles.icon2}></span></a>
					     	<a href='#'><span className={styles.icon3}></span></a>
					     	</div>
				</div>
            </div>
        );
    }
}

export default Signup;