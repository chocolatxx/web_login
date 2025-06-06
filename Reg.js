document.getElementById("registerf").addEventListener("submit", function(event) {
    event.preventDefault();

    const fname = document.getElementsByName("fname")[0].value.trim();
    const lname = document.getElementsByName("lname")[0].value.trim();
    const usen = document.getElementsByName("usen")[0].value.trim();
    const email = document.getElementsByName("mail")[0].value.trim();
    const pass1 = document.getElementsByName("pass1")[0].value;
    const pass2 = document.getElementsByName("pass2")[0].value;
    
    const errorms = document.getElementById("errorms");
    const result = document.getElementById("result");
    errorms.innerText = "";
    result.innerHTML = "";
    
    if (!/^[A-Z]/.test(fname)) {
        errorms.innerText = "ชื่อ (Firstname) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ (A-Z)";
        return;
    }
    if (!/^[A-Z]/.test(lname)) {
        errorms.innerText = "นามสกุล (Lastname) ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ (A-Z)";
        return;
    }
    
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passw.test(pass1)) {
        errorms.innerText = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว และประกอบด้วย ตัวเล็ก ตัวใหญ่ ตัวเลข และอักขระพิเศษ";
        return;
    }
    if (pass1 !== pass2) {
        errorms.innerText = "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน";
        return;
    }
    
    result.innerHTML = `
        <h3>ลงทะเบียนสำเร็จ!</h3>
        <p><strong>Firstname:</strong> ${fname}</p>
        <p><strong>Lastname:</strong> ${lname}</p>
        <p><strong>Username:</strong> ${usen}</p>
        <p><strong>Email:</strong> ${email}</p>

      `;
    ;
});