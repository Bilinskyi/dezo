<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
	function send_mail($to, $subject, $message, $headers) {

		$popup = $_POST["popup"];

		$phone = $_POST["phone"];
		$email = $_POST["email"];

	// $utm_source = $_POST["utm_source"];
	// $utm_medium = $_POST["utm_medium"];
	// $utm_campaign = $_POST["utm_campaign"];
	// $utm_term = $_POST["utm_term"];
	// $utm_content = $_POST["utm_content"];

		$to  = "1unitedcrew@gmail.com";  

		if (isset($problem)) {
			$message = "Выбор: $problem<br>Модель: $model<br>Марка: $mark<br>Год: $sel<br>Телефон: $phone";
		} else {
			$message = "Телефон: $phone";
		}

		$subject = "Заявка с сайта"; 

		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
		$headers .= "From: $from\r\n";
		$headers .= "Reply-To: $email\r\n";

		$result = mail($to, $subject, $message, $headers);
	} 

	{
		// Отправка email
		send_mail($to, $subject, $message, $headers);      
		echo 'true'; 
	}

}
?>