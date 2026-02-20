function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   var Total = g_form.getValue('u_total');
   var Percentage = (Total/600)*100;
   g_form.setValue('u_percentage',Percentage+'%');
}
