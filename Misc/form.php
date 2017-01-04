<?php
?>
<html>
<body>
<form name="signupform" id="signupform" action="C:/wamp/www/misc/register.php" method="post">
					<label>Full Name<span style="color: #F00">*</span></label>
					<input name="full_name" id="full_name" type="text" required/>
					<br />

					<label>Email Address<span style="color: #F00">*</span></label>
					<input name="email" id="email" type="email" required/>
					<br />
                    <label>User ID<span style="color: #F00">*</span></label>
		<input name="user_id" id="user_id" type="text" required/>
					<br />

					<label>Password<span style="color: #F00">*</span></label>
					<input name="password" id="password" type="password" required/>
					<br />

				  <div class="checkbox">
						<input name="agree" id="agree" type="checkbox" required/>
					  <label for="send_updates">I agree <a href="#">terms and Conditions</a></label>
		</div>

					<div class="action_btns">
                    
					  <div class="one_half last"><input value="Register" name="signupsubmit" type="submit" class="btn btn_red"/></div>
					</div>
	  </form>
	</div>
	  </p>	
	</div>
</body>
</html>	