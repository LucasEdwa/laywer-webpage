import { useState } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="flex justify-center items-center">
            <div>
                <Button className="bg-black text-white py-2 px-8 mt-10" onClick={handleShow}>
                    ARVODEN
                </Button>

                <BootstrapModal show={show} onHide={handleClose}>
                    <BootstrapModal.Header closeButton >
                        <BootstrapModal.Title className="text-xl font-bold text-center w-full">Arvoden</BootstrapModal.Title>
                    </BootstrapModal.Header>
                    <BootstrapModal.Body>
                        <div className="d-block text-center">

                            För många uppdrag förordnas en advokat av domstolar och myndigheter. För vissa uppdrag kan man ansöka om rättshjälp eller rättsskydd. Hör av dig till oss för mer information. Advokatbyrån kan bistå dig med ansökan om rättshjälp/rättsskydd när det är aktuellt. Den som är missnöjd med en faktura kan vända sig till Advokatsamfundets konsumenttvistnämnd.
                        </div>
                    </BootstrapModal.Body>
                    <BootstrapModal.Footer>
                        <Button className="mt-3 btn-block bg-black w-full " onClick={handleClose}>
                            <a href="#contact" className="text-white no-underline ">
                                KONTAKT OSS
                            </a>
                        </Button>
                    </BootstrapModal.Footer>
                </BootstrapModal>
            </div>
        </div>
    );
}