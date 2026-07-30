const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>Fitness Time ERP</title>
<style>
body{
background:#111;
color:white;
font-family:Arial;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
margin:0;
}
.box{
background:#222;
padding:40px;
border-radius:15px;
text-align:center;
width:350px;
}
button{
background:#e53935;
color:white;
border:none;
padding:12px 25px;
border-radius:8px;
font-size:18px;
cursor:pointer;
margin-top:20px;
}
</style>
</head>
<body>

<div class="box">
<h1>🏋️ Fitness Time ERP</h1>
<p>الإصدار الأول للنظام.</p>

<button onclick="alert('أهلاً بك في النظام')">
ابدأ
</button>

</div>

</body>
</html>
`;

http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
res.end(html);
}).listen(process.env.PORT || 3000);
