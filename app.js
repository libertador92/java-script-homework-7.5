let date = prompt ("YYYY.MM.DD");
let il = date.split(".")[0];
let ay = date.split(".")[1];
let gun = date.split(".")[2];

if( ay == "01"){
    console.log( gun +  " " + "yanvar" + " " + il + "-ci il");
}
else if( ay == "02"){
    console.log( gun +  " " + "fevral" + " " + il + "-ci il");
}
else if( ay == "03"){
    console.log( gun +  " " + "mart" + " " + il + "-ci il");
}
else if( ay == "04"){
    console.log( gun +  " " + "aprel" + " " + il + "-ci il");
}
else if( ay == "05"){
    console.log( gun +  " " + "may" + " " + il + "-ci il");
}
else if( ay == "06"){
    console.log( gun +  " " + "iyun" + " " + il + "-ci il");
}
else if( ay == "07"){
    console.log( gun +  " " + "iyul" + " " + il + "-ci il");
}
else if( ay == "08"){
    console.log( gun +  " " + "avqust" + " " + il + "-ci il");
}
else if( ay == "09"){
    console.log( gun +  " " + "sentyabr" + " " + il + "-ci il");
}
else if( ay == "10"){
    console.log( gun +  " " + "oktyabr" + " " + il + "-ci il");
}
else if( ay == "11"){
    console.log( gun +  " " + "noyabr" + " " + il + "-ci il");
}
else if( ay == "12"){
    console.log( gun +  " " + "dekabr" + " " + il + "-ci il");
}
else{
    console.log("Tarix duzgun daxil edilmeyib.");
}