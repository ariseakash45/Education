function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
   var a = g_form.getReference('u_admission_number');
   g_form.setValue('u_admin_date',a.u_admin_date);
   g_form.setValue('u_grade',a.u_grade);
   g_form.setValue('u_student_name',a.u_student_name);
   g_form.setValue('u_father_name',a.u_father_name);
   g_form.setValue('u_mother_name',a.u_mother_name);
   g_form.setValue('u_father_cell',a.u_father_cell);
   g_form.setValue('u_mother_cell',a.u_mother_cell);

   g_form.setDisabled('u_admin_date',a.u_admin_date);
   g_form.setDisabled('u_grade',a.u_grade);
   g_form.setDisabled('u_student_name',a.u_student_name);
   g_form.setDisabled('u_father_name',a.u_father_name);
   g_form.setDisabled('u_mother_name',a.u_mother_name);
   g_form.setDisabled('u_father_cell',a.u_father_cell);
   g_form.setDisabled('u_mother_cell',a.u_mother_cell);
}
