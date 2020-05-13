<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h3>Hi,{{ $data['name'] }}</h3>
	<p>Reset your GB International password by clicking on this link : 
	 <a href="{{ $data['link'] }}">{{ $data['link'] }}</a>
	</p>
</body>
</html>