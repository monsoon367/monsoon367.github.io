//get value from input (Luas Segitiga):
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output_rumus = document.getElementById('output_rumus')
const output_isi = document.getElementById('output_isi')
const output = document.getElementById('output')
//calculating machine:
hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output_rumus.innerHTML = `L = 1/2 x a x t`
    output_isi.innerHTML = `L = 1/2 x ${a} x ${t}`
    output.innerHTML = `L = ${l}`

    if (a == '') {
        output_rumus.innerHTML = ``
        output_isi.innerHTML = ``
        output.innerHTML = ``
    }
    if (t == '') {
        output_rumus.innerHTML = ``
        output_isi.innerHTML = ``
        output.innerHTML = ``
    }
//dellete button:
})
reset.addEventListener('click', function(){
    document.getElementById('alas').value=''
    document.getElementById('tinggi').value=''
    output_rumus.innerHTML = ``
    output_isi.innerHTML = ``
    output.innerHTML = ''
})



//get value from input (Keliling Segitiga):
const sisi1 = document.getElementById('s1')
const sisi2 = document.getElementById('s2')
const sisi3 = document.getElementById('s3')
const hitungkel = document.getElementById('hitungkeliling')
const outputkeliling_rumus = document.getElementById('outputkeliling_rumus')
const outputkeliling_isi = document.getElementById('outputkeliling_isi')
const outputkel = document.getElementById('outputkeliling')
const resetkel = document.getElementById('resetkeliling')
const resetall = document.getElementById('resetall')
//calculating machine:
hitungkel.addEventListener('click', function(){
    let s1 = sisi1.value
    let s2 = sisi2.value
    let s3 = sisi3.value
    let kel = parseInt(s1)+parseInt(s2)+parseInt(s3)

    outputkeliling_rumus.innerHTML = `K = S1 +S2 + S3`
    outputkeliling_isi.innerHTML = `K = ${s1} + ${s2} + ${s3}`
    outputkeliling.innerHTML = `K = ${kel}`

    if (s1 == '') {
        outputkeliling_rumus.innerHTML = ``
        outputkeliling_isi.innerHTML = ``
        outputkeliling.innerHTML = ``
    }
    if (s2 == '') {
        outputkeliling_rumus.innerHTML = ``
        outputkeliling_isi.innerHTML = ``
        outputkeliling.innerHTML = ``
    }
    if (s3 == '') {
        outputkeliling_rumus.innerHTML = ``
        outputkeliling_isi.innerHTML = ``
        outputkeliling.innerHTML = ``
    }
//dellete button:
})
resetkel.addEventListener('click', function(){
    document.getElementById('s1').value=''
    document.getElementById('s2').value=''
    document.getElementById('s3').value=''
    outputkeliling_rumus.innerHTML = ``
    outputkeliling_isi.innerHTML = ``
    outputkeliling.innerHTML = ``
})

//reset all:
resetall.addEventListener('click', function(){
    document.getElementById('alas').value=''
    document.getElementById('tinggi').value=''
    document.getElementById('s1').value=''
    document.getElementById('s2').value=''
    document.getElementById('s3').value=''
    output_rumus.innerHTML = ``
    output_isi.innerHTML = ``
    output.innerHTML = ''
    outputkeliling_rumus.innerHTML = ``
    outputkeliling_isi.innerHTML = ``
    outputkeliling.innerHTML = ``
})
