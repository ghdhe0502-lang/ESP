function updateSim() {
    // ... الكود السابق ...
    let text;
    if (simStep == 0) text = document.getElementById('tA').value;
    else if (simStep == 1) text = document.getElementById('tB').value;
    else {
        const now = new Date();
        text = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();
    }
    // ... رسم النص على الكانفاس ...
}