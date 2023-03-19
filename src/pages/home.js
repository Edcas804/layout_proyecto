import Grid from '../templates/grid'

const dataGrid = {
    headers: [
         {name: 'Nombre'}, {name: 'Valor'},{name: 'Stock'}
    ],
    rows: [
        [
            {value: 'Producto 1'},
            {value: '10000'},
            {value: '10'}
        ],
        [
            {value: 'Producto 2'},
            {value: '10000'},
            {value: '10'}
        ],
        [
            {value: 'Producto 3'},
            {value: '10000'},
            {value: '10'}
        ],
    ]
}
const Home = async () => {
    return `
      <section class="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 grid-rows-[350px,1fr] gap-4 h-full box-border m-2 overflow-scroll">
            <div class="col-span-1 lg:col-span-3 md:col-span-2 sm:col-span-3 hadow-sm shadow-slate-400 rounded overflow-hidden"> 
                <img src="https://d3trkj7zmmj4c7.cloudfront.net/public/banner_public.jpg" alt="main banner" class="w-full h-full object-cover">
            </div>
            <div class="col-span-1 lg:col-span-3 md:col-span-2 sm:col-span-3 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1">
              <div class="col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-1 shadow-sm shadow-slate-400 rounded p-3 box-border overflow-auto m-3"> 
                <h5 class="text-center p-2">Últimos productos</h5>
                ${Grid(dataGrid)}
              </div>
              <div class="col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-1  shadow-sm shadow-slate-400 rounded p-3 box-border overflow-auto m-3"> 
                <h5 class="text-center p-2">Últimos pedidos</h5>
                ${Grid(dataGrid)}
              </div>
              <div class="col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-1  shadow-sm shadow-slate-400 rounded p-3 box-border overflow-auto m-3"> 
                <h5 class="text-center p-2">Estadisticas</h5>
                <div class="flex flex-col justify-between items-center h-4/6">
                    <div><i class="bi bi-bar-chart text-8xl text-violet-400"></i></div> 
                    <div><i class="bi bi-graph-up-arrow text-8xl text-violet-400"></i></div> 
                    <div><i class="bi bi-bar-chart text-8xl text-violet-400"></i></div> 
                </div>
              </div>
            </div>
      </section>
  `;
};

export default Home;
