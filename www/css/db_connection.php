<?php

$conn = new mysqli("localhost","root","","dmi_quick_result") or die("failed to connect");
if (!$conn) {
	die("fatal error");
}
?>