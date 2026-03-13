function gradeLabel(score) {
  if (score <= 100 && score >= 90) {
    return "Ottimo"
  }
  if (score < 90 && score >= 70) {
    return "Buono"
  }
  if (score < 70 && score >= 55) {
    return "Sufficiente"
  }
  return "Insufficiente"
}


function gradeLabelTester() {
  console.log(gradeLabel(100) === "Ottimo")
  console.log(gradeLabel(99) === "Ottimo")
  console.log(gradeLabel(75) === "Buono")
  }

