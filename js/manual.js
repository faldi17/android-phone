// sweetalert for save data in formulir
function showAlert() {
    let nama_hp = document.getElementById('nama_hp')
    let versi_os = document.getElementById('versi_os')
    let ram = document.getElementById('ram')
    let tgl_rilis = document.getElementById('tgl_rilis')
    
    if (nama_hp.value !== '' && versi_os.value !== '' && ram.value !== '' && tgl_rilis.value !== '') {
      swal({
        title: "Berhasil Tersimpan",
        text: "Klik ok untuk melanjutkan",
        icon: "success",
      }).then(function() {
        location.reload()
      });
    }
}

// sweetalert for logout
function logout() {
    swal({
      title: "Yakin ingin logout?",
      text: "Klik ok untuk keluar",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((keluar) => {
      if (keluar) {
        window.location = "login.html?#"
      } else {
        window.location = "?#"
      }
    })
}

// sweetalert for login
function Login() {
    let user = document.getElementById('user')
    let pass = document.getElementById('pass')
    
    if (user.value !== '' && pass.value !== '') {
      swal({
        title: "Login telah berhasil",
        text: "Klik ok untuk melanjutkan",
        icon: "success",
      }).then(function() {
        window.location = "index.html?#"
      });
    }
}