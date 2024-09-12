import QRCode from 'qrcode'

function createQRcode(canvasId){
  var canvas = document.getElementById(canvasId)
  var value = document.getElementById('data-input').value
  document.getElementById('data-input').value = "";

  QRCode.toCanvas(canvas, value, function (error) {
    if (error) console.error(error)
    console.log('success!');
  })
}

export default createQRcode;