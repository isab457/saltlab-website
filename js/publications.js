fetch('data/publications.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('pubList');
    data.forEach(pub => {
      const div = document.createElement('div');
      div.className = 'pub';
      div.innerHTML = `
        <h3>${pub.conference} ${pub.year}: ${pub.title}</h3>
        <p><em>${pub.authors}</em></p>
        <a href="${pub.pdf}" target="_blank">paper</a>
      `;
      container.appendChild(div);
    });
  });
