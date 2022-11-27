function submit(){
    let firstname = document.getElementById('firstName').value
    console.log(firstname)
    let lastname = document.getElementById('lastName').value
    console.log(lastname)
    let address = document.getElementById('address').value
    console.log(address)
    let pincode = document.getElementById('pincode').value
    console.log(pincode)
    let male = document.getElementById('male').value
    console.log(male)
    let female = document.getElementById('female').value
    console.log(female)
    let state = document.getElementById('state').value
    console.log(state)
    let country = document.getElementById('country').value
    console.log(country)
    let td1 = document.getElementById('td1')
    console.log(td1)
    td1.innerHTML=firstname
    let td2 = document.getElementById('td2')
    console.log(td2)
    td2.innerHTML=lastname
    let td3 = document.getElementById('td3')
    console.log(td3)
    td3.innerHTML=address
    let td4 = document.getElementById('td4')
    console.log(td4)
    td4.innerHTML=pincode

    if(document.getElementById('male').checked){
    let td5=document.getElementById('td5')
    td5.innerHTML=male
    }else if(document.getElementById('female').checked){
        let td5=document.getElementById('td5')
        td5.innerHTML=female
    }

    let td6=document.getElementById('td6')
    let checkBox=document.getElementsByName('gridCheck')
    let checkedItems=0;
    let food=[];
    for(let i=0;i<checkBox.length;i++){
        if(checkBox[i].checked){
            checkedItems++;
            console.log(checkBox[i].value)
            food.push(checkBox[i].value)
            }
    }
    td6.innerHTML=food;
    console.log(food.length)

    if(food.length<2){
        alert("Please select atleast 2 in food choice")
        td6.innerHTML="";
    }
    let td7 = document.getElementById('td7')
    console.log(td7)
    td7.innerHTML=state
    let td8 = document.getElementById('td8')
    console.log(td8)
    td8.innerHTML=country

}