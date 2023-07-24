    //   JAVASCRIPT

    document.addEventListener("DOMContentLoaded", function () {
      var startButton = document.getElementById("start-button");
      var questionnaire = document.getElementById("questionnaire");
      var instruction = document.getElementById("instruction");
      var report = document.getElementById("report");
      var generateReportForm = document.getElementById("generate-report-form");
      var reportContentInput = document.getElementById("report-content");
    
    
      function showQuestionnaire() {
        instruction.style.display = "none";
        startButton.style.display = "none";
        questionnaire.style.display = "block";
      }
    
      startButton.addEventListener("click", showQuestionnaire);
    
      questionnaire.addEventListener("submit", function (event) {
        event.preventDefault();
    
        var question1 = document.getElementById("question1").value;
        var question2 = document.getElementById("question2").value;
        var question3 = document.getElementById("question3").value;
        var question4 = document.getElementById("question4").value;
        var question5 = document.getElementById("question5").value;
    
        if (validateForm(question1, question2, question3, question4, question5)) {
          var reportContent = generateReportContent(question1, question2, question3, question4, question5);
    
          displayReport(reportContent);

          // Mostrar el botón "Generar Reporte"
          generateReportForm.style.display = "block";
          reportContentInput.value = reportContent;
        }
      });
    
      function validateForm(question1, question2, question3, question4, question5) {
        if (!question1 || !question2 || !question3 || !question4 || !question5) {
          alert("Por favor, completa todos los campos.");
          return false;
        }
    
        return true;
      }
    
      function generateReportContent(question1, question2, question3, question4, question5) {
        var reportContent = `
          <h3 dir = "ltr">Informe de Autoevaluación</h3>
          <p dir = "ltr">Estimado(a), aquí está tu informe basado en las respuestas proporcionadas:</p>
          <ul dir = "ltr">
            <li>Pregunta 1: ${question1}</li>
            <li>Pregunta 2: ${question2}</li>
            <li>Pregunta 3: ${question3}</li>
            <li>Pregunta 4: ${question4}</li>
            <li>Pregunta 5: ${question5}</li>
            <!-- Agrega aquí más recomendaciones personalizadas según las respuestas -->
          </ul>
        `;
    
        return reportContent;
      }
    
      function displayReport(reportContent) {
        questionnaire.style.display = "none";
        report.innerHTML = reportContent;
        report.style.display = "block";
      }
    });
    
        