let toggleFilter = true;
const mainContainer = document.querySelector('.main-container');
const carsContainer = document.querySelector('#cars-container');
const sideContainer = document.querySelector('.side-container');
const sideMenu = document.querySelector('#side-menu');
const navToggle = document.querySelector('#nav-toggle');

const cars = [
  {
    title: 'NISSAN VERSA 2022',
    price: '$ 10.900.000',
    description:
      'Vendo por renovación, hermoso automóvil, moderno, excelente estado interior, exterior y mecánico. Mantenciones al día. Aire acondicionado, velocidad crucero, transmisión automática, radio touch bluetooth. Solo verdaderos interesados'
  },
  {
    title: 'Jeep wrangler 2017',
    price: '$ 32.500.000',
    description:
      'Único dueño, excelente estado, incluye capota de lona americana tipo bikini, lámina de seguridad en vidrios, porta celular, pisaderas negras exterior, piso goma interior, documentación al día'
  },
  {
    title: 'Mercedez E350',
    price: '$ 1.000.000',
    description:
      'Vehiculo con dos dueños solo uso particular, precio conversable'
  },
  {
    title: 'Toyota corolla cross',
    price: '$ 26.590.000',
    description:
      'COROLLA CROSS CVT HEV 1.8 AUT, Año 2024. Nuevo, full equipo, tope de línea.Patente y mantenciones al día en Kovacs. Vendo por urgencia'
  },
  {
    title: 'Hyundai creta 2021',
    price: '$ 13.790.000',
    description:
      'Este HYUNDAI CRETA 2021 esta garantizado por Autopia:Si no te gusta, puedes devolverlo en 7 dias o 300 km. Valido por 6 meses. Respaldo Derco. Consulta con nuestros ejecutivos por financiamiento para este auto'
  },
  {
    title: 'Honda pilot 2017',
    price: '$ 18.790.000',
    description:
      'Este HONDA PILOT 2017 esta garantizado por Autopia:Si no te gusta, puedes devolverlo en 7 dias o 300 km. Valido por 6 meses. Respaldo Derco. Consulta con nuestros ejecutivos por financiamiento para este auto'
  },
  {
    title: 'Haval jolion 2023',
    price: '$ 13.590.000',
    description:
      'Este HAVAL JOLION 2023 esta garantizado por Autopia:Si no te gusta, puedes devolverlo en 7 dias o 300 km. Valido por 6 meses. Respaldo Derco. Consulta con nuestros ejecutivos por financiamiento para este auto'
  },
  {
    title: 'Subaru impreza 2005',
    price: '$ 500.000',
    description:
      'Unico dueño, 75000 km originales, llantas de aleacion, aire acondicionado.  Todo funcionando al 100, documentos al día'
  },
  {
    title: 'Honda pilot 2017',
    price: '$ 18.790.000',
    description:
      'Este HONDA PILOT 2017 esta garantizado por Autopia:Si no te gusta, puedes devolverlo en 7 dias o 300 km. Valido por 6 meses. Respaldo Derco. Consulta con nuestros ejecutivos por financiamiento para este auto'
  },
  {
    title: 'Ford f150 platinum',
    price: '$ 47.900.000',
    description:
      'Impecable, mantenciones sagradas, pura carretera, neumáticos originales nuevos con 50 kms. Butacas con masajes y volante calefaccionado (la 2024 no trae ninguno de los dos accesorios)'
  }
];

const loadCars = () => {
  carsContainer.innerHTML = '';
  cars.forEach(({ title, price, description }, index) => {
    const card = `
      <div class="card">
        <div>
          <img src="./src/assets/img/${index}.png" alt="${title}">
        </div>
        <h4>${title}</h4>
        <h5>${price}</h5>
        <p class="card-text">${description}</p>
      </div>
    `;
    carsContainer.insertAdjacentHTML('beforeend', card);
  });
};

const renderOffers = () => {
  cars.forEach(({ title }) => {
    const offerCard = `
      <div class="offer-card">
        <i class="fa-solid fa-car-side item-icon" style="color: #fff;"></i>
        <p style='margin-right: 5rem;'>${title}</p>
      </div>
    `;
    sideMenu.insertAdjacentHTML('beforeend', offerCard);
  });
};

const init = async () => {
  loadCars();
  renderOffers();
};

navToggle.addEventListener('click', () => {
  sideContainer.style.display =
    sideContainer.style.display === 'none' ? '' : 'none';
});

init();
