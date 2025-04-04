// gradeAssignment
// Program that assigns a grade and final remarks based on user input

const score = parseInt(prompt("Enter your score:"));

// Determine equivalent grade using conditional ternary operator
const equivalentGrade = score >= 97 ? '1.00 (Excellent)' :
  score >= 94 ? '1.25 (Excellent)' :
  score >= 91 ? '1.50 (Above Average)' :
  score >= 88 ? '1.75 (Above Average)' :
  score >= 85 ? '2.00 (Average)' :
  score >= 82 ? '2.25 (Average)' :
  score >= 79 ? '2.50 (Below Average)' :
  score >= 76 ? '2.75 (Below Average)' :
  score === 75 ? '3.00 (Below Average)' :
  score >= 72 ? '4.00 (Poor)' :
  '5.00 (Poor)';

// Determine final remarks using if-else statements
let finalRemarks;
if (score >= 90) {
  finalRemarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  finalRemarks = "AVERAGE PASS";
} else if (score >= 75) {
  finalRemarks = "LOW PASS";
} else {
  finalRemarks = "FAILED, Needs Improvement";
}

// Display the result
console.log(`Result:\nYour equivalent Grade is "${equivalentGrade}"\nFinal Remarks: ${finalRemarks}`);