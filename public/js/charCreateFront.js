document.getElementById('create-character-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    nombre: formData.get('nombre'),
    clase: formData.get('clase'),
    raza: formData.get('raza'),
    estadisticas: {
      fuerza: parseInt(formData.get('fuerza')),
      destreza: parseInt(formData.get('destreza')),
      constitucion: parseInt(formData.get('constitucion')),
      sabiduria: parseInt(formData.get('sabiduria')),
      inteligencia: parseInt(formData.get('inteligencia')),
      carisma: parseInt(formData.get('carisma'))
    }
  };

  const totalStats = data.estadisticas.fuerza + data.estadisticas.destreza + data.estadisticas.constitucion + 
                     data.estadisticas.sabiduria + data.estadisticas.inteligencia + data.estadisticas.carisma;

  if (totalStats > 78) {
    alert("La suma de todas las características no puede superar 78.");
    return;
  }

  // Aquí agregamos un console.log para ver los datos antes de enviarlos
  // console.log("Datos que se envían al servidor:", data);

  try {
    const response = await fetch('/api/characters/personajes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      
    });

    if (response.ok) {
      alert('Personaje creado con éxito');
      window.location.reload();
    } else {
      const error = await response.json();
      console.error('Error al crear personaje:', error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});