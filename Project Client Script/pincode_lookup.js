function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
    var a = g_form.getValue('u_pincode');
if(a == '509358')
{
g_form.setValue('u_mandal', 'kadthal');
g_form.setValue('u_city', 'kadthal');
g_form.setValue('u_district', 'RangaReddy');

}
else if(a == '500081')
{
g_form.setValue('u_mandal', 'karmanghat');
g_form.setValue('u_city', 'karmanghat');
g_form.setValue('u_district', 'RangaReddy');

}
else if(a == '500079')
{
g_form.setValue('u_mandal', 'Abids');
g_form.setValue('u_city', 'AsifNagar');
g_form.setValue('u_district', 'Hyderabad');
}
