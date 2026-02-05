function sendData() {
    // جلب الوقت الحالي من المتصفح
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const params = `w=${document.getElementById('w').value}&tA=${document.getElementById('tA').value}&tB=${document.getElementById('tB').value}&time=${document.getElementById('sTime').value}&clock=${document.getElementById('cSize').value}&h=${h}&m=${m}&s=${s}`;
    
    fetch('/update?' + params)
        .then(response => {
            if(response.ok) alert("✅ تم التحديث وضبط الساعة!");
        })
        .catch(err => alert("❌ فشل الاتصال"));
}