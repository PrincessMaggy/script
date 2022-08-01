(function() {
    let count = 0
    window.onmousedown = (e) =>{
        e = e || window.event; 
        
		//increment count at the occurence of the event
        count ++;

        //creating and styling div that shows click position
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.style.height= "20px";
        div.style.width= "20px";
        div.style.backgroundColor = "red";
        div.style.position= "absolute";
        div.style.borderRadius= "50%";
        
        //assigning position of click to div tag
 
        xPosition =e.clientX + window.pageXOffset;
        yPosition = e.clientY + window.pageYOffset;

        div.style.left = xPosition + "px";
        div.style.top = yPosition + "px";

        //print total number of clicks
        // console.log("Total clicks = " + count);
        let info = setTimeout(()=>{
            alert("Total clicks = " + count);
        },10000);
    
        // window.clearTimeout(info);
        
}
})();
