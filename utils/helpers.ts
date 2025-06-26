function sendStacey() {sendMsgAPI('Stacey', '+16037035491'); console.log('send stacey')}
function sendDerek() {sendMsgAPI('Derek', '+16039153224'); console.log('send derek, then me')}
function sendDerekC() {sendMsgAPI('Derek C', '+17204468559')}

export async function sendMsg() {
    await setTimeout(() => {sendStacey()}, 5000)
    await setTimeout(() => {sendDerek()}, 5000)
    sendDerekC()
}

async function sendMsgAPI(name: string, phoneNum: string) {
    let response = await fetch('/.netlify/functions/sendMsg',{
            method: "POST",
            body: JSON.stringify({ 
                msgBody: `Dear ${name}, \n\nYou have just received a new request for information from:\n\n\tApplicant Name: ${reqFName.value} ${reqLName.value}\n\tPhone #: ${reqPhoneNum.value}\n\tEmail Address: ${reqEmailAddr.value}\n\n They have contacted because: \" ${reqTextArea.value}\"'`,
                phoneNum: phoneNum
            }),
        }).then(response => response.json())
}