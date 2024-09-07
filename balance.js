document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    menu.classList.toggle('open');
  });
});

document.getElementById('balance').innerText = `$${localStorage.getItem('balance') || '0.00'}`;

        function startMining() {
            let hasMined = localStorage.getItem('hasMined');
            if (hasMined === 'true') {
                alert('You have already mined. Add new balance to mine again.');
                return;
            }

            let countdownElement = document.getElementById('countdown');
            let balanceElement = document.getElementById('balance');
            let successImageElement = document.getElementById('success-image');
            let mineButton = document.getElementById('mine-button');

            // Hide the mine button and show the countdown
            mineButton.style.display = 'none';
            countdownElement.style.display = 'block';

            startCountdown(function() {
                let currentBalance = parseFloat(localStorage.getItem('balance') || '0');
                let lastSentAmount = parseFloat(localStorage.getItem('lastSentAmount') || '0');
                let newBalance = (currentBalance + 3 * lastSentAmount).toFixed(2);
                localStorage.setItem('balance', newBalance);
                localStorage.setItem('hasMined', 'true');
                balanceElement.innerText = `$${newBalance}`;

               // Show success image and start fading out
                successImageElement.style.display = 'block';
                setTimeout(() => {
                    successImageElement.style.opacity = 0;
                    setTimeout(() => {
                        successImageElement.style.display = 'none';
                        successImageElement.style.opacity = 1;
                        countdownElement.style.display = 'none';
                        mineButton.style.display = 'block';
                    }, 2000);
                }, 500);
            });
        }

        

        function startCountdown(callback) {
            var countDownDate = new Date();
            countDownDate.setSeconds(countDownDate.getSeconds() + 10);
            localStorage.setItem("countdownTime", countDownDate);

            var countdownTimer = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                seconds = (seconds < 10) ? "0" + seconds : seconds;

                var countdownString = "00:00:" + seconds;
                document.getElementById("countdown").innerHTML = countdownString;

                if (distance < 0) {
                    clearInterval(countdownTimer);
                    document.getElementById("countdown").innerHTML = "";
                    localStorage.removeItem("countdownTime");
                    callback();
                }
            }, 1000);
        }
        
        function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// By default, show the crypto section
showSection('crypto');       

function showSection(section) {
            var cryptoButton = document.getElementById('cryptoButton');
            var nftsButton = document.getElementById('nftsButton');
            var cryptoSection = document.getElementById('crypto');
            var nftsSection = document.getElementById('nfts');
            
            if (section === 'crypto') {
                cryptoButton.style.color = 'white';
                nftsButton.style.color = '#7C808C';
                cryptoSection.style.display = 'block';
                nftsSection.style.display = 'none';
            } else if (section === 'nfts') {
                nftsButton.style.color = 'white';
                cryptoButton.style.color = '#7C808C';
                nftsSection.style.display = 'block';
                cryptoSection.style.display = 'none';
            }
        }         
        
        
document.querySelectorAll('.bum-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.bum-buttons button').forEach(btn => {
                    btn.classList.remove('selected');
                });
                button.classList.add('selected');
            });
        });