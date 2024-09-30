<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
                 initial-scale=1.0">
    <title>Change Label Text - innerHTML</title>
</head>

<body>
    <!-- HTML label with an ID -->
    <label id="labelWithHTML">Initial Text</label>

    <!-- Button to trigger text change -->
    <button onclick="changeTextWithHTML()">
        Change Text</button>

    <script>
        // Function to change label text with HTML content
        function changeTextWithHTML() {
            let labelElement = document
                .getElementById("labelWithHTML");
            labelElement.innerHTML =
                "<em>New Text</em> using <strong>innerHTML</strong>";
        }
    </script>
</body>

</html>
