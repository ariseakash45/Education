Understanding of Key Client Scripts:

1. Admission Table Automations
   
  A. Auto-Populate Student Details
   •	Type: onChange (Field: u_admission_number)
     
   •	Description: When an admission number is selected, this script fetches reference data to fill in student and parent details automatically. It also locks these fields to prevent manual editing of master records.
     
  B. Pincode Address Update
   •	Type: onChange (Field: u_pincode)
     
   •	Description: Automatically sets the Mandal, City, and District based on the entered Pincode to ensure data accuracy.

2. Student Progress Table (Academic Evaluation Engine)
   
  A. UI Security: Disable Fields (onLoad)
  
 •	Purpose: Prevents users from manually entering data into calculated fields.
    
 •	Logic: Disables Total, Percentage, and Result fields as soon as the form loads.
 
 •	Outcome: Ensures data integrity by forcing the system to handle all calculations.
 
  B. Calculation Engine: Total Update (onChange)
  
 •	Purpose: Acts as the primary aggregator for subject marks.
   
 •	Logic: Listens for changes in the six subject fields (Telugu, Hindi, English, Maths, Science, Social).
   
 •	Function: Uses parseInt() to sum the values and update the u_total field instantly.
   
  C. Analytics Engine: Percentage Calculation (onChange)
  
 •	Purpose: Converts raw totals into a standard academic percentage.
 
 •	Logic: Triggers when the Total field changes.
 
 •	Formula: $(Total / 600) * 100$.
 
  D. Grading Engine: Result Logic (onChange)
  
   •	Purpose: Automatically assigns a Pass/Fail status.
   
   •	Logic: Analyzes the Percentage field.
   
   •	Criteria: If percentage is >= 60%, the result is set to "Pass"; otherwise, it is set to "Fail".
