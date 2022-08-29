let getUname = document.getElementById("unameLogin");
let getPass = document.getElementById("passLogin");

document.getElementById('formDaftar').style.display = "none"
// document.querySelector('.container').style.display = 'none'

function daftar(params) {
    if (params == 'daftar') {
        document.getElementById('formLogin').style.display = 'none';
        document.getElementById('formDaftar').style.display = 'block';
    }
    if (params == 'login') {
        document.getElementById('formLogin').style.display = 'block';
        document.getElementById('formDaftar').style.display = 'none';
    }
}

function login() {
    if (getUname.value === 'admin' && getPass.value === 'admin123') {
        document.querySelector('#formLogin').style.display = 'none'
        document.querySelector('#content').style.display = 'flex'
        document.querySelector("#head").innerHTML = "👦🏻"
        document.querySelector('.info').style.display = 'none'
    } else if (getUname.value === 'operator' && getPass.value === 'operator123') {
        document.querySelector("#uname").innerHTML = "Kucing garong"
        document.querySelector("#lvl").innerHTML = "Operator"
        document.querySelector("#head").innerHTML = "😸"
        document.querySelector('#content').style.display = 'flex'
        document.querySelector('#formLogin').style.display = 'none'
        document.querySelector('.info').style.display = 'none'
    } else if (getUname.value === localStorage['uname'] && getPass.value === localStorage['pass']) {
        document.querySelector("#uname").innerHTML = localStorage['nama']
        document.querySelector("#lvl").innerHTML = localStorage['level']
        document.querySelector('#content').style.display = 'flex'
        document.querySelector('#formLogin').style.display = 'none'
        document.querySelector('.info').style.display = 'none'
        document.querySelector("#head").innerHTML = "🧑🏻"
    } else {
        document.querySelector("#error").style.display = 'block'
    }
}

function daftarBaru() {
    let namaDaftar = document.getElementById('namaDaftar').value
    let levelDaftar = document.getElementById('levelDaftar').value
    let unameDaftar = document.getElementById('unameDaftar').value
    let passDaftar = document.getElementById('passDaftar').value

    if (namaDaftar === '' && levelDaftar === '' && unameDaftar === '' && passDaftar === '') {
        document.getElementById("warn").style.display = 'flex'
    }
    if (namaDaftar !== '' && levelDaftar !== '' && unameDaftar !== '' && passDaftar !== '') {
        document.getElementById('formDaftar').style.display = 'none';
        document.getElementById('formLogin').style.display = 'block';
        localStorage.setItem("nama", namaDaftar)
        localStorage.setItem("level", levelDaftar)
        localStorage.setItem("uname", unameDaftar)
        localStorage.setItem("pass", passDaftar)
        document.getElementById("success").style.display = 'flex'
    }
}

function logout() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('formLogin').style.display = 'block';
    document.getElementById('formDaftar').style.display = 'none';
    localStorage.clear()
    location.reload()
}