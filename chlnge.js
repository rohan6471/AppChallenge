function calculate() {
    const string1 = document.getElementById("string1").value
    const s1=string1.length;
    const string2 = document.getElementById("string2").value
    const s2=string2.length;
    const string3 = document.getElementById("string3").value
    const s3=string3.length;
    const result=Math.min(s1,s2,s3);
    if(result==s1)
    {
        document.querySelector("#result").innerHTML="string1 "
    }

    
}

document.querySelector('#calculate').addEventListener('click', calculate)