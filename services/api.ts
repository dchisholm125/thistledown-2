export async function sendEmailAPI(payload: any) {
  const response = await fetch('/.netlify/functions/sendEmail', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  if (!response.ok) throw new Error('Failed to send email')
  return response.json()
}

export async function sendMsgAPI(payload: any) {
  const response = await fetch('/.netlify/functions/sendMsg', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  if (!response.ok) throw new Error('Failed to send message')
  return response.json()
}

export async function sendReqInfoAPI(payload: any) {
  const response = await fetch('/.netlify/functions/sendReqInfo', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  if (!response.ok) throw new Error('Failed to send info request')
  return response.json()
}
