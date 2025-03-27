import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  ModalHeader,
  ModalTitle,
  NotItems,
  Table,
  TippyStylized,
  TrashAnimation,
} from "./styles";
import { useDash } from "../../../hooks/useDash";

export function ModalItemsFav(props: any) {
  const { fav, removeItemFav } = useDash();

  return (
    <Modal {...props} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>Suas conversões favoritas</ModalTitle>
      </ModalHeader>
      <Modal.Body>
        {fav.length === 0 ? (
          <NotItems>
            <h3>Nenhum Item Salvo</h3>
          </NotItems>
        ) : (
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
              {fav.map((item) => (
                <tr key={item.id}>
                  <td>{item.baseKey}</td>
                  <td>{item.quotedKey}</td>
                  <td>{item.low}</td>
                  <td>{item.high}</td>
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
                        <FaRegTrashAlt onClick={() => removeItemFav(item.id)} />
                      </TrashAnimation>
                    </TippyStylized>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>
    </Modal>
  );
}
