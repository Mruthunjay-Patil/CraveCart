const orderTemplate = (customerName, orderId, amount, items) => {

const itemsHtml = items.map(item => `
<tr>
<td style="padding:12px;border-bottom:1px solid #eee;">
${item.name}
</td>

<td align="center" style="border-bottom:1px solid #eee;">
${item.quantity}
</td>

<td align="right" style="border-bottom:1px solid #eee;">
₹${item.price}
</td>
</tr>
`).join("");

return `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>CraveCart Order</title>

</head>

<body style="margin:0;background:#f6f6f6;font-family:Arial">

<table width="100%" cellpadding="0" cellspacing="0">

<tr>

<td align="center">

<table width="650" style="background:white;border-radius:12px;overflow:hidden;">

<tr>

<td style="background:#FF6B35;padding:30px;text-align:center;color:white;">

<h1 style="margin:0;">🍔 CraveCart</h1>

<p style="margin-top:10px;">Craving Delivered.</p>

</td>

</tr>

<tr>

<td style="padding:40px;">

<h2>Hello ${customerName} 👋</h2>

<p>

Thank you for ordering from

<b>CraveCart</b>.

Your payment has been received successfully.

</p>

<hr>

<h3>Order Details</h3>

<p>

<b>Order ID :</b>

${orderId}

</p>

<table width="100%" cellspacing="0">

<tr>

<th align="left">Item</th>

<th>Qty</th>

<th align="right">Price</th>

</tr>

${itemsHtml}

</table>

<hr>

<h2 align="right">

Total : ₹${amount}

</h2>

<div
style="background:#fff4ef;
padding:20px;
border-radius:10px;
margin-top:25px;">

<h3 style="color:#FF6B35;">

🚴 Estimated Delivery

</h3>

<p>

25-30 Minutes

</p>

</div>

<div align="center" style="margin-top:35px;">

<a
href="#"
style="background:#FF6B35;
color:white;
padding:15px 35px;
text-decoration:none;
border-radius:8px;">

Track My Order

</a>

</div>

<p style="margin-top:40px;">

Need help?

<br>

support@cravecart.com

</p>

</td>

</tr>

<tr>

<td
align="center"
style="background:#2d3436;
color:white;
padding:20px;">

© 2026 CraveCart

<br>

Craving Delivered ❤️

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>

`;

};

export default orderTemplate;