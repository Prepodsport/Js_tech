const human = {
    city: 'Дмитров',
    name: 'Евгений',
    work: 'Образование'
}


 function hasProperty (str,obj){
     const hasNameProp = str in obj;
     console.log(hasNameProp)
 }

hasProperty('city',human)