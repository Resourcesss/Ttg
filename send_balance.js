function sendBalance() {
            let amount = parseFloat(document.getElementById('amount').value);
            let senderName = document.getElementById('senderName').value.trim();

            if (isNaN(amount) || amount <= 0 || senderName === '') {
                alert('Please enter a valid amount and your name.');
                return;
            }

            let currentBalance = parseFloat(localStorage.getItem('balance') || '0');
            localStorage.setItem('balance', (currentBalance + amount).toFixed(2));
            localStorage.setItem('lastSentAmount', amount.toFixed(2));
            localStorage.setItem('lastSenderName', senderName);
            localStorage.setItem('hasMined', 'false');
            localStorage.setItem('newNotification', 'true');
            alert(`$${amount.toFixed(2)} has been sent by ${senderName}.`);
            window.location.href = 'balance.html';
        }