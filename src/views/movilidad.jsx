import React, { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import '../styles/principal.css'
import { ComboBoton } from '../components/btn-form'
import { Modulo2 } from '../components/modulo2'
import { CeldaModuloInput2 } from '../components/celda-modulo-input2'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/breadscrum'
import { ComponetSelectPeriodo } from '../components/component-select-periodo'
import { useForm } from '../Hooks'
import { CeldaModuloSelect2Servicio } from '../components/celda-modulo-select2-servicio'
import { CeldaModuloSelect2Proveedor } from '../components/celda-modulo-select2-proveedor'
import { useFacturasStore } from '../Hooks/useFacturasStore'
import Swal from 'sweetalert2'

const factura = {
    idProveedor: '',
    idPeriodo: '',
    idServicio: '',
    fechaFacturacion: '',
    numeroFactura: '',
    cobro: ''
}

export const GastosMovilidad = () => {
    const { idProveedor, idPeriodo, idServicio, fechaFacturacion, numeroFactura, cobro, onInputChange } = useForm(factura);
    const [hover, setHover] = useState(false);
    const src = hover ? '/images/volver-hover.png' : '/images/volver.png';
    const { startCreatingFactura } = useFacturasStore();


    const navigate = useNavigate();

    const volver = (e) => {
        e.preventDefault();
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
                navigate(`/`)
            }
        })


    }

    const enviar = (e) => {
        e.preventDefault();
        startCreatingFactura({ idProveedor, idPeriodo, idServicio, fechaFacturacion, numeroFactura, cobro })

    };

    const infoFactura = [
        <CeldaModuloInput2 name="numeroFactura" value={numeroFactura} onChange={onInputChange} type="text" titulo='Numero de factura*' placeholder='Ej: A001' required='true' />,
        <CeldaModuloInput2 name="fechaFacturacion" value={fechaFacturacion} onChange={onInputChange} type="date" titulo='Fecha de facturación*' required='true' />]


    const infoServicio = [
        <CeldaModuloSelect2Servicio type="text" name="idServicio" value={idServicio} onChange={onInputChange} titulo='Tipo de servicio*' />,
        <CeldaModuloSelect2Proveedor type="text" name="idProveedor" value={idProveedor} onChange={onInputChange} titulo='Proveedor*' />,
        <CeldaModuloInput2 name="cobro" value={cobro} onChange={onInputChange} type="number" titulo='Cobro*' placeholder='$0.00' />];


    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
            return '¿Estás seguro de que deseas abandonar esta página?';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div className="contenido">

            <NavBar />
            <div className='principal-fondo'>
                <Breadcrumbs />
                <div className='col-principal'>
                    <button onClick={volver} id="volver">
                        <img
                            src={src}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            alt="volver" id='volver'
                        />
                    </button>
                    <div className='col-h1-principal-sac'>
                        Gastos de movilidad
                    </div>

                </div>
                <div className='div-contenido'>
                    <form onSubmit={enviar}>
                        <div className='div-titulos'>



                        </div>
                        <div>
                            <ComponetSelectPeriodo titulo='Seleccione el periodo*' type="text" name="idPeriodo" value={idPeriodo} onChange={onInputChange} />
                        </div>
                        <div>

                            <Modulo2 titulo='INFORMACION DE FACTURACION' content={infoFactura} />
                            <Modulo2 titulo='INFORMACION DEL SERVICIO' content={infoServicio} />


                        </div>

                        <ComboBoton onClick={volver} />
                    </form>
                </div>

            </div>
            <Footer />

        </div >


    )
}