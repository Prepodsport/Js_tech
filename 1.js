const human = {
    city: 'Дмитров',
    name: 'Евгений',
    work: 'Образование'
}


function getProp(obj){
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            console.log(prop, obj[prop])
        }
    }

}

getProp(human)