import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";
import {
  ModalHeader,
  ModalTitle,
  Table,
  TippyStylized,
  TrashAnimation,
} from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";

export function ModalItemsFav(props: any) {
  return (
    <Modal {...props} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>Suas conversões favoritas</ModalTitle>
      </ModalHeader>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>Chave Base</th>
              <th>Chave Cotada</th>
              <th>Valor Baixo</th>
              <th>Valor Cheio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>BRL</td>
              <td>5.738</td>
              <td>5.7387777</td>
              <td>
                <TippyStylized
                  content="Remover dos favoritos"
                  arrow={true}
                  theme="custom"
                  animation="fade"
                  placement="bottom"
                  offset={[0, 20]}
                  duration={0}
                >
                  <TrashAnimation
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <FaRegTrashAlt />
                  </TrashAnimation>
                </TippyStylized>
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}
