<div style="font-size: 18pt; font-family: verdana">
<?php

$ww = "geheim";
print "<table border=\"1\">";
print "<tr><td>Wachtwoord:</td><td>$ww</td></tr>";
print "<tr><td>MD5: </td><td>".md5($ww)."</td></tr>";
print "<tr><td>SHA1:</td><td>".sha1($ww)."</td></tr>";
print "<tr><td>password_hash / PASSWORD_DEFAULT:</td><td>".password_hash($ww,PASSWORD_DEFAULT)."</td></tr>";
print "</table>";
// omgeef het wachtwoord met enkele aanhalingstekens!!
$hash = '$2y$10$atDyWp309chUB1xzyU3GuugGDlevlibygGg7dhEqFpQXde1Rq8JpO';
print "Een oude hashing van $ww: $hash<br>";
print "Hiertegen wordt het wachtwoord gecontroleerd met dit als resultaat:<br>";
// See the password_hash() example to see where this came from.
//$hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';

if (password_verify($ww, $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}

?>
</div>