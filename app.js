// Event Listeners
document.querySelector(".calculate").addEventListener("click", function () {
  // hide output
  document.getElementById("output").style.display = "none";

  // show loader
  document.getElementById("loader").style.display = "block";
  setTimeout(BMI, 2000);
});

document.querySelector(".clear").addEventListener("click", Clear);

// Functions
function BMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let index = weight / (((height / 100) * height) / 100);
  let indexO = index.toFixed(0);
  if (height && weight != 0) {
    const output = document.getElementById("output");
    const state = document.getElementById("state");

    output.innerHTML = "Your BMI is " + indexO;
    if (indexO < 15) {
      state.innerHTML =
        "<span style='color:yellow';> Very Severly Underweight!  </span>";
    } else if (indexO < 16) {
      state.innerHTML =
        "<span style='color:yellow';> Severly underweight!  </span>";
    } else if (indexO < 18.5) {
      state.innerHTML = "<span style='color:yellow';> Underweight!  </span>";
    } else if (indexO < 25) {
      state.innerHTML =
        "<span style='color:#2ECC71  ';> Normal (Healthy Weight)  </span>";
    } else if (indexO < 30) {
      state.innerHTML = "<span style='color:red';> Overweight!  </span>";
    } else if (indexO < 35) {
      state.innerHTML =
        "<span style='color:#C0392B ';> Obese Class 1 (Moderate Obese)!  </span>";
    } else if (indexO < 40) {
      state.innerHTML =
        "<span style='color:#C0392B ';> Obese Class II (Severly Obese)!  </span>";
    } else if (indexO > 40) {
      state.innerHTML =
        "<span style='color:#C0392B ';> Obese Class III (Very Severly Obese)!  </span>";
    }
    document.getElementById("output").style.display = "block";
    document.getElementById("loader").style.display = "none";
  } else {
    appearing();
    function appearing() {
      document.getElementById("output").style.display = "block";
      document.getElementById("loader").style.display = "none";
      document.getElementById("output").innerHTML =
        " <span style='color:#ac1c09';> Error: Enter height and weight first ! </span>";
      setTimeout(function () {
        document.getElementById("output").innerHTML = "";
        document.getElementById("state").innerHTML = "";
      }, 5000);
    }
  }
}

function Clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("state").innerHTML = "";
}
