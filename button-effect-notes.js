/* === 버튼 효과용 JavaScript 참고 코드 모음 === */

/* ------------------------------------------------
1. Pulse 애니메이션
버튼 클릭 시 잠깐 커졌다가 원래 크기로 복귀
------------------------------------------------ */
function animatePulse(button) {
    button.classList.add('button-pulse');
    setTimeout(() => {
      button.classList.remove('button-pulse');
    }, 1000); // 1초 후 제거
  }
  
  // 사용 예시
  // document.querySelectorAll('.button-link').forEach(btn => {
  //   btn.addEventListener('click', () => animatePulse(btn));
  // });
  
  
  /* ------------------------------------------------
  2. 로딩 스피너 표시
  클릭 시 로딩 텍스트와 애니메이션 효과를 보여줌
  ------------------------------------------------ */
  function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = `<span class="spinner"></span> Loading...`;
    button.disabled = true;
  
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);
  }
  
  // 사용 예시
  // document.querySelectorAll('.button-loading').forEach(btn => {
  //   btn.addEventListener('click', () => showLoading(btn));
  // });
  
  
  /* ------------------------------------------------
  3. Ripple 효과
  클릭 지점에서 물결처럼 퍼지는 애니메이션 생성
  ------------------------------------------------ */
  function addRippleEffect(button) {
    button.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      circle.classList.add('ripple');
  
      const rect = button.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;
  
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  }
  
  // 사용 예시
  // document.querySelectorAll('.button-ripple').forEach(addRippleEffect);


/* ------------------------------------------------
4. Fade In/Out 토글
버튼 클릭 시 점점 사라졌다가 다시 나타남
------------------------------------------------ */
function toggleFade(button) {
  if (button.style.opacity === '0') {
    button.style.transition = 'opacity 0.5s';
    button.style.opacity = '1';
  } else {
    button.style.transition = 'opacity 0.5s';
    button.style.opacity = '0';
  }
}

// document.querySelectorAll('.button-fade').forEach(btn => {
//   btn.addEventListener('click', () => toggleFade(btn));
// });


/* ------------------------------------------------
5. 회전 효과 (rotate)
클릭 시 버튼이 360도 회전
------------------------------------------------ */
function rotateButton(button) {
  button.style.transition = 'transform 0.5s';
  button.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    button.style.transform = 'rotate(0deg)';
  }, 600);
}

// document.querySelectorAll('.button-rotate').forEach(btn => {
//   btn.addEventListener('click', () => rotateButton(btn));
// });


/* ------------------------------------------------
6. 확대/축소 애니메이션
클릭 시 확대 후 다시 원래 크기로 돌아옴
------------------------------------------------ */
function scaleBounce(button) {
  button.style.transition = 'transform 0.3s ease';
  button.style.transform = 'scale(1.2)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 300);
}

// document.querySelectorAll('.button-bounce').forEach(btn => {
//   btn.addEventListener('click', () => scaleBounce(btn));
// });


/* ------------------------------------------------
7. 그림자 강조 효과
클릭 시 그림자 강조 후 복원
------------------------------------------------ */
function emphasizeShadow(button) {
  const originalShadow = getComputedStyle(button).boxShadow;
  button.style.transition = 'box-shadow 0.3s ease';
  button.style.boxShadow = '0 0 20px rgba(0,0,0,0.4)';
  setTimeout(() => {
    button.style.boxShadow = originalShadow;
  }, 300);
}

// document.querySelectorAll('.button-shadow').forEach(btn => {
//   btn.addEventListener('click', () => emphasizeShadow(btn));
// });


/* ------------------------------------------------
8. 배경색 깜빡임
클릭 시 잠깐 배경색이 바뀌었다가 돌아옴
------------------------------------------------ */
function flashBackground(button) {
  const originalBg = getComputedStyle(button).backgroundColor;
  button.style.backgroundColor = 'yellow';
  setTimeout(() => {
    button.style.backgroundColor = originalBg;
  }, 200);
}

// document.querySelectorAll('.button-flash').forEach(btn => {
//   btn.addEventListener('click', () => flashBackground(btn));
// });


/* ------------------------------------------------
9. 텍스트 바뀌는 효과
클릭 시 다른 문구로 잠시 바뀌었다가 복구
------------------------------------------------ */
function swapText(button) {
  const original = button.innerText;
  button.innerText = '✅ 완료!';
  setTimeout(() => {
    button.innerText = original;
  }, 1500);
}

// document.querySelectorAll('.button-swap-text').forEach(btn => {
//   btn.addEventListener('click', () => swapText(btn));
// });


/* ------------------------------------------------
10. 흔들기 효과 (Shake)
클릭 시 좌우로 흔들리는 애니메이션
------------------------------------------------ */
function shakeButton(button) {
  button.classList.add('shake');
  setTimeout(() => {
    button.classList.remove('shake');
  }, 500);
}

// document.querySelectorAll('.button-shake').forEach(btn => {
//   btn.addEventListener('click', () => shakeButton(btn));
// });

/* CSS 필요:
.shake {
  animation: shake 0.5s;
}
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
*/


/* ------------------------------------------------
11. 클릭 위치 강조 (Glow at click)
클릭한 위치에 반짝이는 효과 생성
------------------------------------------------ */
function glowClick(button) {
  const glow = document.createElement('div');
  glow.className = 'glow-effect';
  button.appendChild(glow);

  setTimeout(() => glow.remove(), 700);
}

// document.querySelectorAll('.button-glow').forEach(btn => {
//   btn.addEventListener('click', () => glowClick(btn));
// });

/* CSS 필요:
.glow-effect {
  width: 100%;
  height: 100%;
  border: 2px solid white;
  box-shadow: 0 0 10px white;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
*/


/* ------------------------------------------------
12. 카운트다운 타이머 (클릭 비활성화 후 복구)
------------------------------------------------ */
function countdown(button, seconds = 5) {
  const original = button.innerText;
  let timeLeft = seconds;
  button.disabled = true;

  const interval = setInterval(() => {
    button.innerText = `⏳ ${timeLeft}s`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(interval);
      button.innerText = original;
      button.disabled = false;
    }
  }, 1000);
}

// document.querySelectorAll('.button-countdown').forEach(btn => {
//   btn.addEventListener('click', () => countdown(btn, 5));
// });

/* ------------------------------------------------
13. 텍스트 타이핑 애니메이션
한 글자씩 출력되는 듯한 효과
------------------------------------------------ */
function typeEffect(button, message = "🚀 시작합니다!") {
  let index = 0;
  const original = button.innerText;
  button.innerText = "";
  const interval = setInterval(() => {
    button.innerText += message[index];
    index++;
    if (index >= message.length) {
      clearInterval(interval);
      setTimeout(() => {
        button.innerText = original;
      }, 1500);
    }
  }, 100);
}

// document.querySelectorAll('.button-type').forEach(btn => {
//   btn.addEventListener('click', () => typeEffect(btn));
// });

/* ------------------------------------------------
14. 색상 무지개 순환 (Rainbow Effect)
클릭 시 무지개 색이 순환되며 변화함
------------------------------------------------ */
function rainbowCycle(button) {
  const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
  let index = 0;
  const interval = setInterval(() => {
    button.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 150);

  setTimeout(() => {
    clearInterval(interval);
    button.style.backgroundColor = ''; // 원래대로
  }, 150 * colors.length);
}

// document.querySelectorAll('.button-rainbow').forEach(btn => {
//   btn.addEventListener('click', () => rainbowCycle(btn));
// });

/* ------------------------------------------------
15. 버튼 텍스트 알파벳 회전
텍스트 한 글자씩 바뀌는 효과
------------------------------------------------ */
function rotateText(button) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const original = button.innerText;
  let i = 0;
  const interval = setInterval(() => {
    button.innerText = chars[Math.floor(Math.random() * chars.length)];
    i++;
    if (i > 10) {
      clearInterval(interval);
      button.innerText = original;
    }
  }, 50);
}

// document.querySelectorAll('.button-text-rotate').forEach(btn => {
//   btn.addEventListener('click', () => rotateText(btn));
// });

/* ------------------------------------------------
16. 눌림 감지 → 진동 + 색상 반응
모바일 진동 API 연동 및 색 변경
------------------------------------------------ */
function vibrateAndFlash(button) {
  if (navigator.vibrate) {
    navigator.vibrate(100); // 모바일 진동
  }
  flashBackground(button);
}

// document.querySelectorAll('.button-vibrate').forEach(btn => {
//   btn.addEventListener('click', () => vibrateAndFlash(btn));
// });

/* ------------------------------------------------
17. 버튼 회전 스위치 (180도)
회전 상태를 기억해서 토글함
------------------------------------------------ */
function toggleRotate(button) {
  const rotated = button.getAttribute('data-rotated') === 'true';
  button.style.transition = 'transform 0.5s ease';
  button.style.transform = rotated ? 'rotate(0deg)' : 'rotate(180deg)';
  button.setAttribute('data-rotated', String(!rotated));
}

// document.querySelectorAll('.button-rotate-toggle').forEach(btn => {
//   btn.addEventListener('click', () => toggleRotate(btn));
// });

