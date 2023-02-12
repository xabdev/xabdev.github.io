function saveToPDF() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.body, function() {
      var link = document.createElement("a");
      link.download = "Michi Lover Certificate.pdf";
      link.href = pdf.output('datauristring');
      link.click();
    });
  }


  window.onload = function() {
  function displayFormData() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const numberInput = document.querySelector("#number");
    const dropdownInput = document.querySelector("#dropdown");
    const spaceInput = document.querySelector('input[name="space"]:checked');
    const optInputs = document.querySelectorAll('input[name="opt"]:checked');
    const likesInput = document.querySelector("#likes");
  
    const name = nameInput.value;
    const email = emailInput.value;
    const number = numberInput.value;
    const dropdown = dropdownInput.value;
    const space = spaceInput.value;
    const opt = Array.from(optInputs).map(checkbox => checkbox.value);
    const likes = likesInput.value;
  
    fetch("form-data.html")
      .then(response => response.text())
      .then(data => {
        const formDataDisplay = `${data}`.replace("${name}", name)
          .replace("${email}", email)
          .replace("${number}", number)
          .replace("${dropdown}", dropdown)
          .replace("${space}", space)
          .replace("${opt.join(', ')}", opt.join(", "))
          .replace("${likes}", likes);
  
        const newWindow = window.open("", "", "width=1009, height=755");
        newWindow.document.write(formDataDisplay);
      })
      .catch(error => console.error(error));
  }
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    displayFormData();
  });
}