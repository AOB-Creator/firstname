const colors = document.querySelectorAll(" .first .color-picker li")
const topcolor = document.querySelector(" .cards .first .top-side")
console.log(colors, topcolor);
function removeractive(){
    colors.forEach(elements =>{
        elements.classList.remove("active")
    })
}


colors.forEach(item =>{
    
    item.addEventListener("click", ()=>{
        removeractive()
        
           
        if(item.classList.contains("red")){
            item.classList.add("active")
            topcolor.classList.remove("blacktop")
            topcolor.classList.remove("bluetop")
            topcolor.classList.remove("pinktop")
            topcolor.classList.add("redtop")
            
            // sizered()
        }else if(item.classList.contains("blue")){
            item.classList.add("active")
            topcolor.classList.remove("blacktop")
            topcolor.classList.remove("pinktop")
            topcolor.classList.remove("redtop")
            topcolor.classList.add("bluetop")
            
            // sizeblue()
        }
        else if(item.classList.contains("pink")){
            item.classList.add("active")
            topcolor.classList.remove("blacktop")
            topcolor.classList.remove("redtop")
            topcolor.classList.remove("bluetop")
            topcolor.classList.add("pinktop")
            
            // sizepink()
        }else if(item.classList.contains("black")){
            item.classList.add("active")
            topcolor.classList.remove("redtop")
            topcolor.classList.remove("bluetop")
            topcolor.classList.remove("pinktop")
            topcolor.classList.add("blacktop")
            
        }
    })
})


const sizers = document.querySelectorAll(".first .size-picker li")

function removers(){
    sizers.forEach(item=>{
        item.classList.remove("active")
    })
}

sizers.forEach(function(item, index){
    item.addEventListener("click", ()=>{
        removers()
        item.classList.add("active")
    })
})



// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side

const color2 = document.querySelectorAll(".second .color-picker li")
const topcolor2 = document.querySelector(" .cards .second .top-side")
console.log(color2, topcolor2);
function removeractive2(){
    color2.forEach(elements =>{
        elements.classList.remove("active")
    })
}


color2.forEach(item =>{
    
    item.addEventListener("click", ()=>{
        removeractive2()
        
           
        if(item.classList.contains("red")){
            item.classList.add("active")
            topcolor2.classList.remove("blacktop")
            topcolor2.classList.remove("bluetop")
            topcolor2.classList.remove("pinktop")
            topcolor2.classList.add("redtop")
            
            // sizered()
        }else if(item.classList.contains("blue")){
            item.classList.add("active")
            topcolor2.classList.remove("blacktop")
            topcolor2.classList.remove("pinktop")
            topcolor2.classList.remove("redtop")
            topcolor2.classList.add("bluetop")
            
            // sizeblue()
        }
        else if(item.classList.contains("pink")){
            item.classList.add("active")
            topcolor2.classList.remove("blacktop")
            topcolor2.classList.remove("redtop")
            topcolor2.classList.remove("bluetop")
            topcolor2.classList.add("pinktop")
            
            // sizepink()
        }else if(item.classList.contains("black")){
            item.classList.add("active")
            topcolor2.classList.remove("redtop")
            topcolor2.classList.remove("bluetop")
            topcolor2.classList.remove("pinktop")
            topcolor2.classList.add("blacktop")
            
        }
    })
})


const sizer2 = document.querySelectorAll(".second .size-picker1 li")
function removers2(){
    sizer2.forEach(item=>{
        item.classList.remove("active")
    })
}

sizer2.forEach(function(item, index){
    item.addEventListener("click", ()=>{
        removers2()
        item.classList.add("active")
    })
})





// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side

const color3 = document.querySelectorAll(".third .color-picker li")
const topcolor3 = document.querySelector(" .cards .third .top-side")
console.log(color3, topcolor3);
function removeractive3(){
    color3.forEach(elements =>{
        elements.classList.remove("active")
    })
}


color3.forEach(item =>{
    
    item.addEventListener("click", ()=>{
        removeractive3()
        
           
        if(item.classList.contains("red")){
            item.classList.add("active")
            topcolor3.classList.remove("bluetop")
            topcolor3.classList.remove("pinktop")
            topcolor3.classList.remove("blacktop")
            topcolor3.classList.add("redtop")
            
            // sizered()
        }else if(item.classList.contains("blue")){
            item.classList.add("active")
            topcolor3.classList.remove("blacktop")
            topcolor3.classList.remove("pinktop")
            topcolor3.classList.remove("redtop")
            topcolor3.classList.add("bluetop")
            
            // sizeblue()
        }
        else if(item.classList.contains("pink")){
            item.classList.add("active")
            topcolor3.classList.remove("blacktop")
            topcolor3.classList.remove("redtop")
            topcolor3.classList.remove("bluetop")
            topcolor3.classList.add("pinktop")
            
            // sizepink()
        }else if(item.classList.contains("black")){
            item.classList.add("active")
            topcolor3.classList.remove("redtop")
            topcolor3.classList.remove("bluetop")
            topcolor3.classList.remove("pinktop")
            topcolor3.classList.add("blacktop")
            
        }
    })
})


const sizer3 = document.querySelectorAll(".third .size-picker li")
function removers3(){
    sizer3.forEach(item=>{
        item.classList.remove("active")
    })
}

sizer3.forEach(function(item, index){
    item.addEventListener("click", ()=>{
        removers3()
        item.classList.add("active")
    })
})



// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side
// second side// second side// second side// second side// second side// second side

const color4 = document.querySelectorAll(".fourth .color-picker li")
const topcolor4 = document.querySelector(" .cards .fourth .top-side")
console.log(color4, topcolor4);
function removeractive4(){
    color4.forEach(elements =>{
        elements.classList.remove("active")
    })
}


color4.forEach(item =>{
    
    item.addEventListener("click", ()=>{
        removeractive4()
        
           
        if(item.classList.contains("red")){
            item.classList.add("active")
            topcolor4.classList.remove("bluetop")
            topcolor4.classList.remove("pinktop")
            topcolor4.classList.remove("blacktop")
            topcolor4.classList.add("redtop")
            
            // sizered()
        }else if(item.classList.contains("blue")){
            item.classList.add("active")
            topcolor4.classList.remove("blacktop")
            topcolor4.classList.remove("pinktop")
            topcolor4.classList.remove("redtop")
            topcolor4.classList.add("bluetop")
            
            // sizeblue()
        }
        else if(item.classList.contains("pink")){
            item.classList.add("active")
            topcolor4.classList.remove("blacktop")
            topcolor4.classList.remove("redtop")
            topcolor4.classList.remove("bluetop")
            topcolor4.classList.add("pinktop")
            
            // sizepink()
        }else if(item.classList.contains("black")){
            item.classList.add("active")
            topcolor4.classList.remove("redtop")
            topcolor4.classList.remove("bluetop")
            topcolor4.classList.remove("pinktop")
            topcolor4.classList.add("blacktop")
            
        }
    })
})


const sizer4 = document.querySelectorAll(".fourth .size-picker li")
function removers4(){
    sizer4.forEach(item=>{
        item.classList.remove("active")
    })
}

sizer4.forEach(function(item, index){
    item.addEventListener("click", ()=>{
        removers4()
        item.classList.add("active")
    })
})

const starbucks = document.querySelectorAll(".pick-boxes .box1")

function starremov(){
    starbucks.forEach(item=>{
        item.classList.remove("active")
    })
}


starbucks.forEach(item=>{
    item.addEventListener("click", ()=>{
        starremov()
        item.classList.add("active")
    })
    
})