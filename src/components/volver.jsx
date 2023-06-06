import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'

export const Volver = ({ url }) => {
  const navigate = useNavigate();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Esta seguro de cancelar el formulario',
    text: "Se borrara toda la informacion diligenciada hasta el momento",
    iconHtml: '<img src="/images/warning.png" style="width: 1em; height: 1em;" />',

    showCancelButton: true,
    confirmButtonText: 'Abandonar',
    cancelButtonText: 'Volver',
    confirmButtonColor: '#A60F1B',
    cancelButtonColor: '#978F8F',
    customClass: {
      confirmButton: "swal-button-confirm",
      cancelButton: "swal-button-cancel",
      popup: "swal-custom",
    },
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      navigate(url)
    }
  })
}