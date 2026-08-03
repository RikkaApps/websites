<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Painel Moderno</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:#090909;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    color:#fff;
}

.container{
    width:360px;
    background:#111;
    border:1px solid #1e8e5d;
    border-radius:20px;
    padding:20px;
    box-shadow:0 0 25px rgba(0,255,150,.2);
}

.logo{
    text-align:center;
    color:#00d084;
    font-size:26px;
    font-weight:bold;
    margin-bottom:20px;
}

input,select{
    width:100%;
    padding:12px;
    margin-top:10px;
    border:none;
    border-radius:10px;
    background:#1d1d1d;
    color:white;
}

button{
    width:100%;
    padding:12px;
    margin-top:15px;
    border:none;
    border-radius:10px;
    background:#00c853;
    color:white;
    font-size:16px;
    cursor:pointer;
}

button:hover{
    background:#00b248;
}

.card{
    background:#181818;
    margin-top:15px;
    padding:15px;
    border-radius:12px;
}

.row{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.switch{
    position:relative;
    width:48px;
    height:24px;
}

.switch input{
    display:none;
}

.slider{
    position:absolute;
    inset:0;
    background:#555;
    border-radius:20px;
    cursor:pointer;
}

.slider:before{
    content:"";
    position:absolute;
    width:18px;
    height:18px;
    left:3px;
    top:3px;
    background:white;
    border-radius:50%;
    transition:.3s;
}

input:checked + .slider{
    background:#00c853;
}

input:checked + .slider:before{
    transform:translateX(24px);
}

.range{
    width:100%;
    accent-color:#00c853;
}

#panel{
    display:none;
}
</style>

</head>
<body>

<div class="container">

<div class="logo">MEU PAINEL</div>

<div id="login">

<input id="senha" type="password" placeholder="Senha">

<button onclick="entrar()">Entrar</button>

<p id="erro" style="color:red;text-align:center;margin-top:10px;display:none;">
Senha incorreta
</p>

</div>

<div id="panel">

<div class="card row">
<span>Modo Ativo</span>

<label class="switch">
<input type="checkbox">
<span class="slider"></span>
</label>

</div>

<div class="card row">
<span>Notificações</span>

<label class="switch">
<input type="checkbox">
<span class="slider"></span>
</label>

</div>

<div class="card">

<p>Sensibilidade</p>

<input class="range" type="range" min="0" max="100" value="50">

</div>

<div class="card">

<p>Volume</p>

<input class="range" type="range" min="0" max="100" value="80">

</div>

<div class="card">

<p>Tema</p>

<select>

<option>Verde</option>

<option>Azul</option>

<option>Roxo</option>

<option>Vermelho</option>

</select>

</div>

<button onclick="logout()">Sair</button>

</div>

</div>

<script>

const senhaCorreta="123456";

function entrar(){

let senha=document.getElementById("senha").value;

if(senha===senhaCorreta){

document.getElementById("login").style.display="none";

document.getElementById("panel").style.display="block";

}else{

document.getElementById("erro").style.display="block";

}

}

function logout(){

document.getElementById("panel").style.display="none";

document.getElementById("login").style.display="block";

document.getElementById("senha").value="";

}

</script>

</body>
</html>

Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.

The name Shizuku comes from [a character](https://danbooru.donmai.us/posts/3553474).

## Why was Shizuku born?

The birth of Shizuku has two main purposes.

1. Provide a convenient way to use system APIs
2. Convenient for the development of some apps that only requires adb permissions

## Shizuku vs. "Old school" method

### "Old school" method

For example, to enable/disable components, some apps that require root privileges execute `pm disable` directly in `su`.

1. Execute `su`
2. Execute `pm disable`
3. (pre-Pie) Start the Java process with app_process ([see here](https://android.googlesource.com/platform/frameworks/base/+/oreo-release/cmds/pm/pm))
4. (Pie+) Execute the native program `cmd` ([see here](https://android.googlesource.com/platform/frameworks/native/+/pie-release/cmds/cmd/))
5. Process the parameters, interact with the system server through the binder, and process the result to output the text result.

Each of the "Execute" means a new process creation, su internally uses sockets to interact with the su daemon, and a lot of time and performance are consumed in such process. (Some poorly designed app will even execute `su` **every time** for each command)

The disadvantages of this type of method are:

1. **Extremely slow**
2. Need to process the text to get the result
3. Features are subject to available commands
4. Even if adb has sufficient permissions, the app requires root privileges to run

### Shizuku method

The Shizuku app will direct the user to run a process (Shizuku service process) using root or adb.

1. When the app process starts, the Shizuku service process sends the binder to the app process.
2. The app interacts with the Shizuku service through the binder, and the Shizuku service process interacts with the system server through the binder.

The advantages of Shizuku are:

1. Minimal extra time and performance consumption
2. It is almost identical to the direct invocation API experience (app developers only need to add a small amount of code)
