document.querySelectorAll('img').forEach(image=>{
    image.addEventListener('mouseover', ()=>{
        image.style.transition='1s';
        image.style.transform='scale(1.02)';
    })
})
document.querySelectorAll('img').forEach(image=>{
    image.addEventListener('mouseout', ()=>{
        image.style.transition='1s';
        image.style.transform='';
    })
})

document.querySelectorAll('.limitedRangeChoice').forEach(image=>{
    image.children[1].addEventListener('mouseover', ()=>{
        image.style.transition='1s';
        image.style.transform='scale(1.02)';
    })
})
document.querySelectorAll('.limitedRangeChoice').forEach(image=>{
    image.children[1].addEventListener('mouseout', ()=>{
        image.style.transition='1s';
        image.style.transform='';
    })
})

