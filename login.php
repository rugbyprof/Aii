<?php
	
	$U = new Users('root', 'rugger31');
	$encryptedPassword = md5($_POST['password']);
	if(isset($_POST['login']))
	{
		$U->login($_POST['username'], $encryptedPassword);
	}
	
	class Users
	{
		var $connect;
		var $db;
		function __construct($username, $password)
		{
			if(!$this->connect = mysql_connect('localhost', $username, $password))
			{
				die("Failed to connect!");
			}
			$this->db = mysql_select_db('james');
		}
		//Moves to the home page if username and password are correct
		public function login($username, $password)
		{
			$result = mysql_query("SELECT * FROM users WHERE username='$username' and password='$password'");
			$count = mysql_num_rows($result);
			if($count==1)
			{
				$_SESSION["username"] = $username;
				$_SESSION["password"] = $password;
				header("location:#/myHome");
			}
			else
			{
				echo "Incorrect Username/Password";
			}
		}
		//Returns the next unique ID
		private function getMaxID()
		{
			$result = mysql_query("SELECT MAX(userID) AS Max FROM users");
			list($id) = mysql_fetch_array($result);
			
			$id++;
			return $id;
		}
	}
?>

<!DOCTYPE html>
<html lang="en" ng-app="myApp">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Bootply.com - 85861</title>
		<meta name="generator" content="Bootply" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link href="css/styles.css" rel="stylesheet">
	</head>
	<body>
<!-- Header -->

<div id="top-nav" class="navbar navbar-inverse navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-toggle"></span>
      </button>
      <a class="navbar-brand" href="#">Control Panel</a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        
        <li class="dropdown">
          <a class="dropdown-toggle" role="button" data-toggle="dropdown" href="#">
            <i class="glyphicon glyphicon-user"></i>Login<span class="caret"></span></a>
          <ul id="g-account-menu" class="dropdown-menu" role="menu">
            <li><a href="#">Login</a></li>
            <li><a href="#/myHome">Initialize</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div><!-- /container -->
</div>
<!-- /Header -->


<form id="userLogin" action="login.php" method="post">
	<fieldset>
		Username: <input type='text' name='username' maxlength="32"/> <br>
		Password: <input type='text' name='password' maxlength="32"/> <br> <br>
		<input type="submit" name="login" value="Log In">
	</fieldset>
	<a href="#/register">Register</a>
</form>


		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/scripts.js"></script>
	</body>
</html>