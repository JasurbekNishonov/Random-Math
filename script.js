let questNumber=+prompt("Tell me how much you want to solve!")
   for(let i=0; i<questNumber; i++){
    let num1=Math.round(Math.random()*(40-20)+20);
    let num2=Math.round(Math.random()*10);
    let action=Math.round(Math.random()*3);
    if(action==0){
      action=action="+"
      let number=+prompt(num1+` ${action} `+num2+" = ?")
      if(number==num1+num2){
         console.log("Your answer is correct - "+ `${num1+num2}`)
      }else{
         console.log(number+" is wrong - "+`${num1+num2}`)
      }
    }
    else if(action==1){
      action=action="-"
      let number=+prompt(num1+` ${action} `+num2+" = ?")
      if(number==num1-num2){
        console.log("Your answer is correct - "+ `${num1-num2}`)
      }else{
        console.log(number+" is wrong - "+`${num1-num2}`)
      }
    }
    else if(action==2){
      action=action="*"
      let number=+prompt(num1+` ${action} `+num2+" = ?")
      if(number==num1*num2){
        console.log("Your answer is correct - "+ `${num1*num2}`)
      }else{
        console.log(number+" is wrong - "+`${num1*num2}`)
      }
    }
    else if(action==3){
      action=action="/"
      let number=+prompt(num1+` ${action} `+num2+" = ?")
      if(number==num1/num2){
        console.log("Your answer is correct - "+ `${num1/num2}`)
      }else{
        console.log(number+" is wrong - "+`${num1/num2}`)
      }
    }
    }