<?php
// Load PHPMailer classes using Composer's autoloader
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/contactform.php'; // If you installed PHPMailer with Composer

// Validate the form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

    // Initialize an errors array
    $errors = [];

    // Server-side validation
    if (empty($name)) {
        $errors[] = 'Name is required.';
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required.';
    }
    if (empty($subject)) {
        $errors[] = 'Subject is required.';
    }
    if (empty($message)) {
        $errors[] = 'Message is required.';
    }

    // If no validation errors
    if (empty($errors)) {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // SMTP Configuration (Replace with your SMTP settings)
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Example: Gmail SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'your-email@gmail.com'; // Your Gmail address
            $mail->Password = 'your-email-password'; // Your Gmail password
            $mail->SMTPSecure = 'tls'; // Enable TLS encryption
            $mail->Port = 587; // TCP port for TLS

            // Set the recipient
            $mail->setFrom($email, $name);
            $mail->addAddress('aesthetic.dinesh@gmail.com', 'dk'); // Replace with your recipient email

            // Email content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "<h2>New Contact Form Submission</h2>
                          <p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Subject:</strong> {$subject}</p>
                          <p><strong>Message:</strong> {$message}</p>";

            // Send the email
            if ($mail->send()) {
                echo "Message sent successfully!";
            } else {
                echo "Message could not be sent. Mailer Error: " . $mail->ErrorInfo;
            }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        // Display validation errors
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    }
}
?>
