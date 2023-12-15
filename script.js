        let timer;
        let timeInput = document.getElementById('time-input');
        let timerDisplay = document.getElementById('timer');
        let startBtn = document.getElementById('start-btn');
        let stopBtn = document.getElementById('stop-btn');
        let resetBtn = document.getElementById('reset-btn');
        let confirmResetBtn = document.getElementById('confirm-reset-btn');

        function startTimer() {
            let time = parseFloat(timeInput.value);
            if (isNaN(time) || time <= 0) {
                alert("Por favor, insira um tempo válido.");
                return;
            }

            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = false;

            
            timerDisplay.style.color = 'black';

            timer = setInterval(function() {
                if (time > 0) {
                    time -= 0.001; 
                    updateTimerDisplay(time);
                } else {
                    stopTimer();
                    alert("Tempo esgotado!");
                }
            }, 1); 
        }

        function stopTimer() {
            clearInterval(timer);
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = false;

            
            timerDisplay.style.color = 'red';
        }

        function showConfirmReset() {
            
            confirmResetBtn.style.display = 'inline-block';
        }

        function confirmReset() {
          
            confirmResetBtn.style.display = 'none';

            
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    timerDisplay.style.color = 'green';
                }, i * 500);

                setTimeout(() => {
                    timerDisplay.style.color = 'black';
                }, (i * 500) + 250);
            }

            
            setTimeout(() => {
                resetTimer();
            }, 3 * 500);
        }

        function resetTimer() {

            clearInterval(timer);
            timeInput.value = "";
            updateTimerDisplay(0);
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = true;

            timerDisplay.style.color = 'black';
        }

        function updateTimerDisplay(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let remainingSeconds = Math.floor(seconds % 60);
            let milliseconds = Math.floor((seconds - Math.floor(seconds)) * 1000);

            timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        }
