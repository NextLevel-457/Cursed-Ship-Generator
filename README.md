<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
                 initial-scale=1.0">
    <title>Change Label Text - innerHTML</title>
</head>

<body>
    <!-- HTML label with an ID -->
    <label id="labelWithHTML">do you have skibidi rizz?</label>

    <!-- Button to trigger text change -->
    <button onclick="changeTextWithHTML()">
        click to find out</button>

    <script>
        // Function to change label text with HTML content
        function changeTextWithHTML() {
            let labelElement = document
                .getElementById("labelWithHTML");
            labelElement.innerHTML =
                "you have skibidi rizz";
        }
    </script>
</body>

</html>
