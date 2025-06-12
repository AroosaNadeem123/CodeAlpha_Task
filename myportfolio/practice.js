<!DOCTYPE html>
<html>
<head>
  <title>Div Order Example</title>
</head>
<body id="b">

  <!-- Third div comes first -->
  <div id="div3">
    <p id="para3">This is the third paragraph, but shown first.</p>
  </div>

  <!-- Then first div -->
  <div id="div1">
    <p id="para1">This is the first paragraph (second in view).</p>
  </div>

  <!-- Then second div -->
  <div id="div2">
    <p id="para2">This is the second paragraph (third in view).</p>
  </div>

  <button onclick="insertParagraph()">Insert New Paragraph Before Second Div</button>

  <script>
    function insertParagraph() {
      // Create a new paragraph element
      var newPara = document.createElement("p");

      // Add text to the new paragraph
      newPara.textContent = "This is the NEW paragraph inserted before the second div.";

      // Get the parent element (body)
      var parent = document.getElementById("b");

      // Get the reference (second div)
      var reference = document.getElementById("div2");

      // Insert the new paragraph before the second div
      parent.insertBefore(newPara, reference);
    }
  </script>

</body>
</html>
