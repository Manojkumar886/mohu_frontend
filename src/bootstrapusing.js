import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
 
export let Bootstrap=()=>
{
    return(
        <>
        <div className="row justify-content-center col-1">
            <div className='col-5'>
            <ol>
            Bootstrap Color Details<i class="bi bi-arrow-through-heart"></i>
            <li className='text-primary'>Primary(Dark blue-Facebook)</li>
            <li className='text-secondary'>Secondary(GRay)</li>
            <li className='text-success'>success(Green)</li>
            <li className='text-info'>info(sky Blue)</li>
            <li className='text-dark'>dark(black)</li>
            <li className='text-light'>light(white)</li>
            <li className='text-warning'>Warning(Orange)</li>
            <li className='text-danger'>Danger(Red)</li>
        </ol>
        </div>

        </div>
        </>
    );
}