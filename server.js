function populatefun(){
    const a= document.getElementById("f1").value
    const b= document.getElementById("f2").value
    const c= document.getElementById("f3").value
    const element=document.getElementById("finalsum")
    let x;
    if(c=="+"){
    x=parseInt(a)+parseInt(b)
    }
    if(c=="-"){
    x=parseInt(a)-parseInt(b)
    }
    if(c=="*"){
    x=parseInt(a)*parseInt(b)
    }
    if(c=="/"){
    x=parseInt(a)/parseInt(b)
    }
    if(c=="%"){
    x=parseInt(a)%parseInt(b)
    }
    element.innerHTML= "Result = : " + x
}