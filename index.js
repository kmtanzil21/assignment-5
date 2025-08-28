

 const lives = document.getElementsByClassName('lives');

  for (let i = 0; i < lives.length; i++) {
    lives[i].addEventListener('click', function () {
      let livesCount = parseInt(document.getElementById('initialLives').innerText);

      livesCount += 1;

      document.getElementById('initialLives').innerText = livesCount;
    });
  }



  document.addEventListener('DOMContentLoaded', () => {
  const COST_PER_CALL = 20;

  const coinEl = document.getElementById('coinCount');
  const historyList = document.getElementById('historyList');
  const clearBtn = document.getElementById('clearHistory');

  const getCoins = () => {
    const n = parseInt(coinEl?.textContent || '0', 10);
    return Number.isFinite(n) ? n : 0;
  };
  const setCoins = (v) => { if (coinEl) coinEl.textContent = String(Math.max(0, v)); };

  const nowTimeString = () =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  function addHistoryItem(serviceName, serviceNumber) {
    const row = document.createElement('div');
    row.className = 'bg-gray-100 w-full p-4 rounded-lg flex justify-between items-center';

    row.innerHTML = `
      <div>
        <h1 class="font-medium">${serviceName}</h1>
        <p class="text-gray-700">${serviceNumber}</p>
      </div>
      <div>
        <p class="text-gray-600">${nowTimeString()}</p>
      </div>
    `;
    historyList?.prepend(row);
  }

  document.querySelectorAll('.call').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const card = btn.closest('.bg-white.rounded-xl.border.border-gray-200.shadow-sm');
      if (!card) return;

      const serviceName = card.querySelector('h1')?.textContent?.trim() || 'Unknown Service';
      const serviceNumber = card.querySelector('h2')?.textContent?.trim() || 'N/A';

      const coins = getCoins();
      if (coins < COST_PER_CALL) {
        alert(`Insufficient coins. You need ${COST_PER_CALL}, but only have ${coins}.`);
        return;
      }

      alert(`Calling ${serviceName} (${serviceNumber})...`);

      setCoins(coins - COST_PER_CALL);

      addHistoryItem(serviceName, serviceNumber);
    });
  });

  clearBtn?.addEventListener('click', () => {
    if (historyList) historyList.innerHTML = '';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const copyCountEl = document.getElementById('copyCount');
  const getCount = () => parseInt(copyCountEl?.textContent || '0', 10) || 0;
  const setCount = n => { if (copyCountEl) copyCountEl.textContent = String(n); };

  async function copyText(text) {
    if (!text) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    } catch {}
  }

  document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.preventDefault();
      const card = btn.closest('.bg-white.rounded-xl.border.border-gray-200.shadow-sm');
      const number = card?.querySelector('h2')?.textContent?.trim() || '';
      await copyText(number);
      setCount(getCount() + 1);
    });
  });
});
