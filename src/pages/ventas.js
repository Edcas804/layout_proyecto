import Grid from '../templates/grid'

const dataGrid = {
    headers: [
        {name: 'fecha'}, {name: 'Valor'}, {name: 'Cantidad de productos'},{name: 'Estado'}
    ],
    rows: [
        [
            {value: '03/03/2023'},
            {value: '10000'},
            {value: '10'},
            {value: 'Pendiente de pago'}
        ],
        [
            {value: '03/03/2023'},
            {value: '10000'},
            {value: '10'},
            {value: 'Pendiente de pago'}
        ],
        [
            {value: '03/03/2023'},
            {value: '10000'},
            {value: '10'},
            {value: 'Pagado'}
        ],
        [
            {value: '09/03/2023'},
            {value: '10000'},
            {value: '10'},
            {value: 'Pendiente de pago'}
        ],
        [
            {value: '03/03/2023'},
            {value: '10000'},
            {value: '10'},
            {value: 'Pendiente de pago'}
        ],
    ]
}
const Ventas = async () => {
    return `
      <section class="w-full grid grid-cols-1 grid-rows-[30px,1fr] gap-4 h-full box-border p-3 overflow-scroll shadow-sm shadow-slate-400 rounded-xl">
            <div class="col-span-1 pr-3">
                <nav>
                    <ul class="flex justify-end">
                        <li class="p-2 text-2xl"><a href="#"><i class="bi bi-plus-circle"></i></a></li>                
                        <li class="p-2 text-2xl"><a href="#"><i class="bi bi-pencil"></i></a></li>                
                        <li class="p-2 text-2xl"><a href="#"><i class="bi bi-credit-card-2-front"></i></a></li>                
                    </ul>
                </nav>
            </div>
          <div class="col-span-1  box-border overflow-auto m-3"> 
            <h5 class="text-center p-2">Ventas</h5>
            ${Grid(dataGrid)}
          </div>
      </section>
  `;
};

export default Ventas;
