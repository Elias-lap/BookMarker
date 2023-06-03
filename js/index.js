var siteNameInput=document.getElementById(`siteName`)
var SiteURLInput=document.getElementById(`SiteURL`)
var Sumbit =document.getElementById('Sumbit')
var MainCollection = []
if ( localStorage.getItem('collection')!=null){
    MainCollection=JSON.parse(localStorage.getItem('collection'))
    displayCollection(MainCollection)
}
function nameIsExsist(){
    for ( var i = 0 ; i < MainCollection.length ;  i++){
        if(siteNameInput.value==MainCollection[i].NameBook){
            nameIsExsist = false
            alert('name is exist')
        }
    }
    return nameIsExsist;
}
function DataCollection(){
    
    if ( Sumbit.innerHTML=='Update'){
        var Collection ={
            NameBook:siteNameInput.value,
            SiteBook:SiteURLInput.value
        }
        Sumbit.innerHTML='Sumbit'
        MainCollection.splice(num,1,Collection)
    }
    
    else{
        if(nameIsExsist()){

            var Collection ={
                NameBook:siteNameInput.value,
               SiteBook:SiteURLInput.value
             }
             MainCollection.push(Collection)
        }
    }
        localStorage.setItem('collection' ,JSON.stringify(MainCollection) )
        displayCollection(MainCollection) 
        clearInput()
}
var count = '0'
function displayCollection(arr){
    var trs =``
    for ( var i = 0 ; i < arr.length; i++){
        count=i
         trs+=`<tr>
        <td>${i}</td>
        <td>${arr[i].NameBook}</td>
        <td>${arr[i].SiteBook}</td>
        <td><button class="btn btn-danger" onclick="Visit(${i})"id="visitBtn">Visit</button></td>
        <td><button class="btn btn-info" onclick="deletInput(${i})">Delet</button></td>
        <td><button class="btn btn-danger" onclick="updateSite(${i})">update</button></td>
    </tr>`
    
    }
    document.getElementById`tbody`.innerHTML=trs
  
   
    }
function clearInput(){
    siteNameInput.value=``
    SiteURLInput.value=``
}
function deletInput(bookcount){
    MainCollection.splice(bookcount,1);
    localStorage.setItem('collection' ,JSON.stringify(MainCollection) );
    displayCollection(MainCollection)
}
function Visit(count){
    window.open(MainCollection[count].SiteBook, "_blank");

}
var num=0
function updateSite(index){
    index=num
    siteNameInput.value=MainCollection[index].NameBook
    SiteURLInput.value=MainCollection[index].SiteBook
    Sumbit.innerHTML='Update'

    console.log('hi')

}

