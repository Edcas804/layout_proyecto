const getRow = (value) => {
    let row = `<tr class="border-b hover:bg-gray-50">`

    value.forEach(data => (
        row += `<td  class="px-6 py-3"> ${data.value} </td>`
    ))
    row += '</tr>'
    return row

}

const Grid = ({...data}) => {
    let headers = ''
    let rows = ''
    data.headers.forEach(row => {
        headers += `<th class="px-6 py-3"> ${row.name} </th>`
    })
    data.rows.forEach(item => (
        rows += getRow(item)
    ))
    return `
        <div class="overflow-x-auto shadow-sm shadow-slate-400 rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 white-bg" style="background: #222222 !important">
            <thead class="text-xs uppercase bg-violet-400 white-color">
                <tr>${headers}</tr>
            </thead>                  
            <tbody class="dark-color white-bg capitalize">
                ${rows}
            </tbody>
        </table>
        </div>
    `
}
export default Grid